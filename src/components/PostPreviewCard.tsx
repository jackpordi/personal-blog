import Link from "next/link";
import Image from "next/image";

import { useDisplayDate } from "hooks/useDisplayDate";
import { FrontMatter } from "types";

interface Props {
  id: string;
  post: FrontMatter;
}

export function PostPreviewCard({ post, id }: Props) {

  const displayDate = useDisplayDate(post.date);

  return (
    <Link href={`posts/${id}`}>
      <a>
        <div className="md:px-4 px-3 py-1 md:py-4 flex-row flex w-full flex-1 transform transition margin-2 text-left group my-2 max-w-2xl cursor-pointer rounded-sm">
          {post.image && (
            <div
              className="mr-4 justify-center"
            >

              <div
                className="rounded-sm hidden md:flex"
              >
                <Image
                  src={post.image}
                  alt={post.image}
                  height={150}
                  width={180}
                  objectFit="cover" />
              </div>
              <div
                className="rounded-sm md:hidden flex"
              >
                <Image
                  src={post.image}
                  alt={post.image}
                  height={100}
                  width={120}
                  objectFit="cover" />
              </div>
            </div>
          )}

          <div className="flex-1 flex flex-col md:max-h-40">

            <h2 className="fade-colors text-xl text-black dark:text-gray-200 dark:group-hover:text-cyan-400 group-hover:text-cyan-500 font-semibold flex-1 md:flex-none">{post.title}</h2>
            <p className="text-gray-700 text-md group-hover:text-black dark:text-gray-300 dark:group-hover:text-white hidden md:flex">
              {post.abstract}
            </p>
            <div className="flex flex-row text-black mt-1 justify-between w-full">
              <div className="fade-colors group-hover:text-cyan-500 dark:text-gray-200 dark:group-hover:text-cyan-400">Read More &rarr;</div>
              <div className="text-gray-400 dark:text-gray-200 ">{displayDate}</div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
