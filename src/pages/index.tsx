import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
  <div className={styles.container}>
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
        Where I {" "}
        <span className="text-blue-600 font-semibold">
          talk {" "}
        </span>
      about {" "}
        <span className="text-blue-600 font-semibold">
          tech {" "}
        </span>
        and rant about {" "}
        <span className="text-blue-600 font-semibold">
          things
        </span>
        .
      </p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2 className="font-semibold">Blog post #1</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2 className="font-semibold">Blog post #2</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

      </div>
    </main>

  </div>
);

export default Home;
