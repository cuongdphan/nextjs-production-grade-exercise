import HomeNav from "components/HomeNav";
import PostPreview from "components/PostPreview";
import { posts as postsFromCMS } from "content";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import path from "path";
import type { FC } from "react";
import type { PostFrontMatter } from "types";

const Blog: FC<{ posts: PostFrontMatter[] }> = ({ posts }) => (
  <>
    <header>
      <HomeNav />
    </header>

    <main className="content-area space-y-10">
      {posts.map((post) => (
        <PostPreview key={post.title} post={post} />
      ))}
    </main>
  </>
);

export const getStaticProps: GetStaticProps = ({ preview }) => {
  const cmsPosts = (preview ? postsFromCMS.draft : postsFromCMS.published).map(
    (post) => {
      const { data } = matter(post);

      return data;
    }
  );

  const postsPath = path.resolve("posts");
  const filenames = fs.readdirSync(postsPath);
  const filePosts = filenames.map((name) => {
    const fullPath = path.resolve("posts", name);
    const file = fs.readFileSync(fullPath, "utf-8");
    const { data } = matter(file);

    return data;
  });

  const posts = [...cmsPosts, ...filePosts];

  return {
    props: { posts },
  };
};

export default Blog;
