import { promises as fs } from "fs";
import path from "path";

import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";
import readingTime from "reading-time";
import dayjs from "dayjs";

import { FrontMatter, Post, PostDetails } from "types";

export async function getPost(postId: string): Promise<Post> {

  const markdownWithMeta = await fs.readFile(path.join("src/posts", `${postId}.mdx`), "utf-8");

  const { data: info, content } = matter(markdownWithMeta);
  const mdx = await serialize(content, {
    mdxOptions: {
      // @ts-ignore
      rehypePlugins: [ rehypeHighlight ],
    },
  });

  const post: Post = {
    id: postId,
    info: info as FrontMatter,
    readingTime: readingTime(content).minutes,
    mdx,
  };
  return post;
}

export async function getAllPostPaths(): Promise<string[]> {
  const files = await fs.readdir(path.join("src", "posts"));

  return files
    .filter((fileName) => !fileName.startsWith("_"))
    .map((fileName) => fileName.split(".")[0]);
}

export async function getAllPosts(): Promise<PostDetails[]> {

  const files = await getAllPostPaths();

  const posts = await Promise.all(
    files
      .map(getPost),
  );

  return posts.map(({ mdx, ...postInfo }) => postInfo);
}

export async function getLatestPosts(excludeId: string): Promise<PostDetails[]> {

  const posts = await getAllPosts();
  posts.sort((a, b) => dayjs(b.info.date).diff(dayjs(a.info.date)));

  const latest = posts.filter((p) => p.id !== excludeId).slice(0, 3);

  return latest;
}
