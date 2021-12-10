import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface FrontMatter {
  title: string;
  date: string;
  abstract: string;
  image: string;
}

export interface Post {
  id: string;
  info: FrontMatter;
  mdx: MDXRemoteSerializeResult;
}
