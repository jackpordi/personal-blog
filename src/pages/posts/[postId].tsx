import { ParsedUrlQuery } from "querystring";

import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import Head from "next/head";

import { Post, PostDetails } from "types";
import { MDXComponents } from "mdx-components";
import { useDisplayDate } from "hooks/useDisplayDate";
import { getAllPostPaths, getLatestPosts, getPost } from "utils";
import { Comments } from "components/Comments";
import { Sponsorship } from "components/Sponsorship";
import { StickyButtons } from "components/StickyButtons";
import { LatestArticles } from "components/LatestArticles";

interface PostPath extends ParsedUrlQuery {
  postId: string;
}

interface PageProps {
  post: Post;
  latest: PostDetails[];
}

export const getStaticProps: GetStaticProps<PageProps, PostPath> = async (ctx: GetStaticPropsContext<PostPath>) => {
  const { postId } = ctx.params!;

  const post: Post = await getPost(postId);
  const latest = await getLatestPosts();
  return {
    props: {
      post, latest,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = await getAllPostPaths();

  const posts = files.map((postId) => ({ params: { postId } }));

  return {
    paths: posts,
    fallback: false,
  };
};

const PostPage: NextPage<PageProps> = ({ post, latest }) => {

  const {
    info, mdx, id,
  } = post;

  const { displayDate } = useDisplayDate(info.date);

  return (
    <div className="items-center flex flex-col">
      <Head>
        <title>{info.title}</title>
        <meta property="og:title" content={info.title} key="title" />
        <meta name="description" content={info.abstract} />
        <meta name="author" content="Jack Pordi" />
      </Head>
      <div className="flex flex-row">
        <div className="mx-4 md:mx-0 my-0 md:my-2 items-center block max-w-3xl flex-1">
          <div className="mb-6" >
            {info.image && (
              <Image
                className="rounded-sm mb-2"
                src={info.image}
                alt={info.title}
                height={320}
                width={800}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "cover",
                }} />
            )}
            <p className="text-gray-500 text-left dark:text-gray-300">{displayDate}</p>
            <h1 className="font-semibold text-4xl mb-2 dark:text-gray-200">{info.title}</h1>
            <h2 className="font-semibold text-xl text-gray-700 mb-4 dark:text-gray-200">{info.abstract}</h2>
          </div>
          <MDXRemote
            {...mdx}
            // @ts-ignore
            components={MDXComponents}
          />
          { !info.disableCoffee && <Sponsorship /> }
          <LatestArticles latest={latest} />
          <Comments />
        </div>
        <StickyButtons
          shareData={{
            title: info.title,
            url: `https://jackpordi.com/posts/${id}`,
          }}
        />
      </div>
    </div>
  );
};
export default PostPage;
