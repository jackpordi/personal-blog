import { FC } from "react";

import { PostDetails } from "types";

import { LatestArticleThumbnail } from "./LatestArticleThumbnail";

interface Props {
  latest: PostDetails[];
}

export const LatestArticles: FC<Props> = ({ latest }) => (
  <div className="mb-2 mt-4">
    <h4 className="text-2xl font-semibold">Latest Posts</h4>
    <div className="grid grid-cols-12 gap-4 my-1">
      { latest.map((post) => <LatestArticleThumbnail {...post} />)}
    </div>
  </div>
);
