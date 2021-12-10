import { MDXRemote } from 'next-mdx-remote';
import Script from "next/script";
import Image from "next/image";
import {
  GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage,
} from 'next';
import { Post } from 'types';
import { ParsedUrlQuery } from 'querystring';
import { MDXComponents } from 'mdx-components';
import Head from 'next/head';

import { getAllPostPaths, getPost } from '../../utils';
import { useDisplayDate } from 'hooks/useDisplayDate';

interface PostPath extends ParsedUrlQuery {
  postId: string;
}

export const getStaticProps: GetStaticProps<Post, PostPath> = async (ctx: GetStaticPropsContext<PostPath>) => {
  const { postId } = ctx.params!;

  const post: Post = await getPost(postId);
  return {
    props: post,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = await getAllPostPaths();

  const posts = files.map((postId) => ({
    params: { postId, },
  }));

  return {
    paths: posts,
    fallback: false,
  };
};

const PostPage: NextPage<Post> = ({ info, mdx }) => {

  const displayDate = useDisplayDate(info.date);

  return (
    <div className="items-center flex flex-col">
      <Head>
        <title>{info.title}</title>
        <meta property="og:title" content={info.title} key="title" />
        <meta name="description" content={info.abstract} />
        <meta name="author" content="Jack Pordi" />
      </Head>
      <div className="ml-2 md:mx-0 my-0 md:my-2 items-center block max-w-3xl flex-1">
        <div className="mb-6" >
          <p className="text-gray-500 text-left">{displayDate}</p>
          <h1 className="font-semibold text-4xl mb-2">{info.title}</h1>
          <h2 className="font-semibold text-xl text-gray-700 mb-4">{info.abstract}</h2>
          <Image
            className="rounded-lg mb-2"
            src={info.image}
            alt={info.image}
            height={350}
            width={800}
            objectFit="cover" />
        </div>
        <MDXRemote {...mdx} components={MDXComponents} />
        <Script src="https://utteranc.es/client.js"
          // @ts-ignore
          repo="jackel119/personal-blog"
          issue-term="pathname"
          theme="github-light"
          crossOrigin="anonymous"
          async
        >
        </Script>
      </div>
    </div>
  );
}
export default PostPage;
