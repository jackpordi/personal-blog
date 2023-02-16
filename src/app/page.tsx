import dayjs from "dayjs";

import { PostPreviewCard } from "components/PostPreviewCard";

import styles from "../styles/Home.module.css";
import { getAllPosts } from "../utils";

export const metadata = {
  title: "Jack Pordi",
  description: "Software Engineering Blog",
};

const Home = async () => {
  const posts = await getAllPosts();

  posts.sort((a, b) => dayjs(b.info.date).diff(dayjs(a.info.date)));

  return (
    <div className="pb-4">

      <main className="flex flex-col flex-1 justify-start items-center py-2 md:py-4 lg:py-6">

        <p className="text-center text-gray-800 dark:text-white my-4 md:mb-8 md: mt-0 text-4xl md:text-7xl font-bold">
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
            <PostPreviewCard
              key={p.id}
              id={p.id}
              post={p.info}
              readingTime={p.readingTime}
            />
          ))}
        </div>
      </main>

    </div>
  );
};

export default Home;
