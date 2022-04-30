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

      <p className="text-center text-gray-600 dark:text-white my-4 md:my-8 text-4xl md:text-7xl font-bold">
        Where I
        {" "}
        {" "}
        <span className="gradient-text font-semibold">
          rant
          {" "}
        </span>
        <br/>
        about
        {" "}
        <span className="gradient-text font-semibold">
          tech things
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
