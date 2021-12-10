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
      <div className="flex-row flex w-full flex-1 transform transitionmargin-2 text-left group my-4 max-w-2xl cursor-pointer">
        {post.image && (
          <div
            className="mr-4"
          >
            <Image
              className="rounded-lg"
              src={post.image}
              alt={post.image}
              height={150}
              width={180}
              objectFit="cover" />
          </div>
        )}

        <div className="flex-1 flex flex-col" style={{ maxHeight: 150 }}>

          <h2 className="text-xl group-hover:text-blue-600 font-semibold">{post.title}</h2>
          <p className="text-gray-700 text-md group-hover:text-black ">
            {post.abstract}
          </p>
          <div className="flex flex-row text-black mt-1 justify-between w-full">
            <div className="group-hover:text-blue-600">Read More &rarr;</div>
            <div className="text-gray-600">{displayDate}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
