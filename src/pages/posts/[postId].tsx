import { MDXRemote } from 'next-mdx-remote';
import {
  GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage,
} from 'next';
import { Post } from 'types';
import { ParsedUrlQuery } from 'querystring';
import { MDXComponents } from 'mdx-components';
import { getAllPostPaths, getPost } from '../../../utils';

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

const PostPage: NextPage<Post> = ({ info, mdx }) => (
  <div className="items-center flex flex-col">
    <div className="my-8 items-center block max-w-3xl flex-1">
      <div className="mb-6">
        <h1 className="font-semibold text-4xl mb-2">{info.title}</h1>
        <h2 className="font-semibold text-xl text-gray-700">{info.abstract}</h2>
      </div>
      <MDXRemote {...mdx} components={MDXComponents} />
    </div>
  </div>
);

export default PostPage;
