import Link from "next/link";
import type { FC } from "react";

const PostPreview: FC<{
  post: { title: string; summary: string; slug: string };
}> = ({ post }) => {
  return (
    <div className="p-4 border border-gray-200 rounded space-y-4">
      <h2 className="text-2xl ">{post.title}</h2>
      <p className="text-sm">{post.summary}</p>
      <div className="text-right">
        <Link href={`/blog/${post.slug}`}>
          <a>
            <button>Read</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PostPreview;
