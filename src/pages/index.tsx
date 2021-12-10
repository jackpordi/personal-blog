import type { GetStaticProps } from "next";
import Head from "next/head";
import moment from "moment";

import { Post } from "types";
import { PostPreviewCard } from "components/PostPreviewCard";

import styles from "../styles/Home.module.css";
import { getAllPosts } from "../utils";

interface Props {
  posts: Post[];
}

const Home = ({ posts }: Props) => (
  <div className="pb-4">
    <Head>
      <title>Jack Pordi</title>
      <meta name="description" content="Jack Pordi's Blog" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="flex flex-col flex-1 justify-start items-center py-2 md:py-4 lg:py-6">
      <h1 className="text-5xl md:text-7xl items-center font-bold">
        <span className="text-blue-600">Welcome</span>
        {" "}
        to my blog!
      </h1>

      <p className="text-gray-600 my-4 md:my-8 text-xl">
        Where I
        {" "}
        <span className="text-blue-600 font-semibold">
          talk
          {" "}
        </span>
        about
        {" "}
        <span className="text-blue-600 font-semibold">
          tech
          {" "}
        </span>
        and rant about
        {" "}
        <span className="text-blue-600 font-semibold">
          things
        </span>
        .
      </p>

      <div className={styles.grid}>
        {posts.map((p) => (
          <PostPreviewCard key={p.id} id={p.id} post={p.info} />
        ))}
      </div>
    </main>

  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  posts.sort((a, b) => moment(b.info.date).diff(moment(a.info.date)));

  return { props: { posts } };
};

export default Home;
