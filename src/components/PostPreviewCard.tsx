import Link from "next/link";

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
      <div className="w-full transform transitionmargin-2 text-left group my-4 max-w-2xl cursor-pointer">

        <h2 className="text-2xl group-hover:text-blue-600 font-semibold">{post.title}</h2>
        <p className="text-gray-700 text-lg mt-2 group-hover:text-black ">
          {post.abstract}
        </p>
        <div className="flex flex-row text-black mt-4 justify-between w-full">
          <div className="group-hover:text-blue-600">Read More &rarr;</div>
          <div className="text-gray-600">{displayDate}</div>
        </div>
      </div>
    </Link>
  );
}
