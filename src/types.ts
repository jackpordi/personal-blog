import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface FrontMatter {
  title: string;
  date: string;
  abstract: string;
}

export interface Post {
  info: FrontMatter;
  mdx: MDXRemoteSerializeResult;
}
