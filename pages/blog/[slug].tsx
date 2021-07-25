import HomeNav from "components/HomeNav";
import { posts as postsFromCMS } from "content";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import path from "path";
import type { FC } from "react";
import type { Params, Post } from "types";

const BlogPost: FC<Post> = ({ source, frontMatter }) => (
  <>
    <Head>
      <title>{`Known Blog | ${frontMatter.title}`}</title>
      <meta name="description" content={frontMatter.summary} />
    </Head>

    <header>
      <HomeNav />
    </header>

    <main className="content-area">
      <h2 className="mb-6">{frontMatter.title}</h2>
      <div className="pt-16 border-t-2 border-gray-700 prose prose-lg max-w-none">
        <MDXRemote {...source} />
      </div>
    </main>
  </>
);

export function getStaticPaths() {
  const postsPath = path.resolve("posts");
  const filenames = fs.readdirSync(postsPath);
  const slugs = filenames.map((name) => {
    const filePath = path.join("posts", name);
    const file = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(file);

    return data;
  });

  return {
    paths: slugs.map((s) => ({ params: { slug: s.slug } })),
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  const { slug } = params as Params;
  let post;

  try {
    const filesPath = path.resolve("posts", `${slug}.mdx`);

    post = fs.readFileSync(filesPath, "utf-8");
  } catch {
    const cmsPosts = (
      preview ? postsFromCMS.draft : postsFromCMS.published
    ).map((p) => matter(p));
    const match = cmsPosts.find((p) => p.data.slug === slug);

    if (match) {
      post = matter.stringify(match.content, match.data);
    }
  }

  const { content, data } = matter(post ?? "");
  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export default BlogPost;
