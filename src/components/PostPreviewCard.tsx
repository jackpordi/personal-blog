import Link from 'next/link';
import { FrontMatter } from 'types';

interface Props {
  id: string;
  post: FrontMatter;
}

export function PostPreviewCard({ post, id }: Props) {
  return (
    <Link href={`posts/${id}`}>
      <div className="transform transitionmargin-2 text-left group my-4 max-w-2xl cursor-pointer">

        <h2 className="text-2xl group-hover:text-blue-600 font-semibold">{post.title}</h2>
        <p className="text-gray-700 text-lg mt-2 group-hover:text-black ">
          {post.abstract}
        </p>
        <p className="text-black mt-4">
          <span className="group-hover:text-blue-600">Read More &rarr;</span>
        </p>
      </div>
    </Link>
  );
}
