import { PostPreviewCard } from 'components/PostPreviewCard';
import moment from 'moment';
import type { NextPage } from 'next';
import Head from 'next/head';
import { FrontMatter } from 'types';
import styles from '../styles/Home.module.css';

const samplePostFrontMatter: FrontMatter = {
  title: "Blog Post",
  abstract: "Blog posty post details blah blah blah. Me very good at coding. This is going to be a very nice long sentence.",
  date: moment().format(),
}

const Home: NextPage = () => (
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
        <PostPreviewCard post={samplePostFrontMatter}/>
        <PostPreviewCard post={samplePostFrontMatter}/>
        <PostPreviewCard post={samplePostFrontMatter}/>
      </div>
    </main>

  </div>
);

export default Home;
