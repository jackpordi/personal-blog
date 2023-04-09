import Image from "next/image";
import { FC } from "react";
import Link from "next/link";

import { useDisplayDate } from "hooks/useDisplayDate";
import { PostDetails } from "types";

export const LatestArticleThumbnail: FC<PostDetails> = (post) => {
  const { age } = useDisplayDate(post.info.date);
  return (
    <div className="col-span-4 group">
      <Link href={`/posts/${post.id}`}>
        <Image
          src={post.info.image!}
          alt={post.info.title}
          height={150}
          width={200}
          style={{
            height: 150,
            width: "100%",
            objectFit: "cover",
          }} />
        <h5 className="fade-colors text-xl text-black dark:text-gray-200 dark:group-hover:text-cyan-400 group-hover:text-cyan-500 font-semibold">{ post.info.title }</h5>

        <div className="text-gray-400 dark:text-gray-200 flex flex-row">{ post.readingTime.toFixed(0)} min read | {age}</div>
      </Link>
    </div>
  );
};
