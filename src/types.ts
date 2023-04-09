import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface FrontMatter {
  title: string;
  date: string;
  "abstract": string;
  image?: string;
  disableCoffee?: boolean;
}

export interface PostDetails {
  id: string;
  info: FrontMatter;
  readingTime: number;
}

export interface Post extends PostDetails {
  mdx: MDXRemoteSerializeResult;
}
