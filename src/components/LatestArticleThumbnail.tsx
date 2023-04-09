import Image from "next/image";
import { FC } from "react";

import { useDisplayDate } from "hooks/useDisplayDate";
import { PostDetails } from "types";

export const LatestArticleThumbnail: FC<PostDetails> = (post) => {
  const { age } = useDisplayDate(post.info.date);
  return (
    <div className="col-span-4">
      <Image
        src={post.info.image!}
        alt={post.info.title}
        height={100}
        width={120}
        style={{
          height: 150,
          width: "100%",
          objectFit: "cover",
        }} />
      <h5 className="text-xl font-bold">{ post.info.title }</h5>

      <div className="text-gray-400 dark:text-gray-200 flex flex-row">{ post.readingTime.toFixed(0)} min read | {age}</div>
    </div>
  );
};
