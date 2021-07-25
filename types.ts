import type { MDXRemoteSerializeResult } from "next-mdx-remote";

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
