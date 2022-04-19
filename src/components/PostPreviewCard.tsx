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
        <div className="px-4 py-4 flex-row flex w-full flex-1 transform transitionmargin-2 text-left group my-2 max-w-2xl cursor-pointer hover:bg-blue-50 rounded-sm">
          {post.image && (
            <div
              className="mr-4 justify-center hidden md:flex"
            >
              <Image
                className="rounded-sm"
                src={post.image}
                alt={post.image}
                height={150}
                width={180}
                objectFit="cover" />
            </div>
          )}

          <div className="flex-1 flex flex-col md:max-h-40">

            <h2 className="text-xl group-hover:text-blue-600 font-semibold">{post.title}</h2>
            <p className="text-gray-700 text-md group-hover:text-black ">
              {post.abstract}
            </p>
            <div className="flex flex-row text-black mt-1 justify-between w-full">
              <div className="group-hover:text-blue-600">Read More &rarr;</div>
              <div className="text-gray-400">{displayDate}</div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
