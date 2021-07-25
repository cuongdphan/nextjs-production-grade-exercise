import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { ParsedUrlQuery } from "querystring";

export interface PostFrontMatter {
  title: string;
  summary: string;
  slug: string;
  publishedOn: string;
  author?: string;
}

export interface Post {
  source: MDXRemoteSerializeResult;
  frontMatter: PostFrontMatter;
}

export interface Params extends ParsedUrlQuery {
  slug: string;
}

export interface Query {
  [key: string]: string;
}
