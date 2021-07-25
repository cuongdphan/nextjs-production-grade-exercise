import HomeNav from "components/HomeNav";
import PostPreview from "components/PostPreview";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import type { FC } from "react";
import type { PostFrontMatter } from "types";
import { posts as postsFromCMS } from "../../content";

const Blog: FC<{ posts: PostFrontMatter[] }> = ({ posts }) => {
  return (
    <>
      <header>
        <HomeNav />
      </header>

      <main className="blog space-y-10">
        {posts.map((post) => (
          <PostPreview key={post.title} post={post} />
        ))}
      </main>
    </>
  );
};

export function getStaticProps() {
  const cmsPosts = postsFromCMS.published.map((post) => {
    const { data } = matter(post);
    return data;
  });

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
}

export default Blog;
