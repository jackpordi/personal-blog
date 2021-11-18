import { promises as fs } from "fs";
import path from "path";
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

import { Post } from "types";

export async function getPost(postId: string): Promise<Post> {

  const markdownWithMeta = await fs.readFile(path.join('src/posts', `${postId}.mdx`), 'utf-8');

  const { data: info, content } = matter(markdownWithMeta);
  const mdx = await serialize(content);

  const post: Post = { 
    id: postId,
    info,
    mdx,
  } as Post;
  return post;
}

export async function getAllPostPaths(): Promise<string[]> {
  const files = await fs.readdir(path.join('src', 'posts'));

  return files.map(fileName => fileName.split(".")[0])
}

export async function getAllPosts(): Promise<Post[]> {

  const files = await getAllPostPaths();

  const posts = files.map((filename: string) => (getPost(filename)));

  return Promise.all(posts);
}
