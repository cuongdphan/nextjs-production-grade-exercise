import HomeNav from "components/HomeNav";
import { posts } from "content";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import path from "path";
import type { FC } from "react";
import type { Post } from "types";

type Params = {
  [param: string]: any;
};

const BlogPost: FC<Post> = ({ source, frontMatter }) => {
  return (
    <>
      <Head>
        <title>{`Known Blog | ${frontMatter.title}`}</title>
        <meta name="description" content={frontMatter.summary} />
      </Head>

      <header>
        <HomeNav />
      </header>

      <main className="blog">
        <h2 className="mb-6">{frontMatter.title}</h2>
        <div className="py-10 border-t-2 border-gray-700 prose prose-lg max-w-none">
          <MDXRemote {...source} />
        </div>
      </main>
    </>
  );
};

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

export async function getStaticProps({ params }: Params) {
  let post;

  try {
    const filesPath = path.resolve("posts", `${params.slug}.mdx`);

    post = fs.readFileSync(filesPath, "utf-8");
  } catch {
    const cmsPosts = posts.published.map((p) => {
      return matter(p);
    });
    const match = cmsPosts.find((p) => p.data.slug === params.slug);

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
}

export default BlogPost;
