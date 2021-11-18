import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface FrontMatter {
  title: string;
  date: string;
  abstract: string;
}

export interface Post {
  id: string;
  info: FrontMatter;
  mdx: MDXRemoteSerializeResult;
}
