import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostPreviewCard } from 'components/PostPreviewCard';
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { FrontMatter } from 'types';
import styles from '../styles/Home.module.css';

interface Props {
  posts: {
    id: string;
    frontMatter: FrontMatter;
  }[];
}

const Home = ({ posts }: Props) => (
  <div className="pb-4">
    <Head>
      <title>Jack Pordi</title>
      <meta name="description" content="Jack Pordi's Blog" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className="text-7xl items-center font-bold">
        <span className="text-blue-600">Welcome</span>
        {' '}
        to my blog!
      </h1>

      <p className="text-gray-600 my-8 text-xl">
        Where I
        {' '}
        {' '}
        <span className="text-blue-600 font-semibold">
          talk
          {' '}
          {' '}
        </span>
        about
        {' '}
        {' '}
        <span className="text-blue-600 font-semibold">
          tech
          {' '}
          {' '}
        </span>
        and rant about
        {' '}
        {' '}
        <span className="text-blue-600 font-semibold">
          things
        </span>
        .
      </p>

      <div className={styles.grid}>
        {posts.map((p) => (
          <PostPreviewCard key={p.id} id={p.id} post={p.frontMatter} />
        ))}
      </div>
    </main>

  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join('src', 'posts'));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('src', 'posts', filename), 'utf-8');
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      id: filename.split('.')[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Home;
