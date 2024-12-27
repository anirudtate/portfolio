import Link from "next/link";
import { getPosts } from "@/lib/blog";

export function BlogSection({ limit = 1000 }: { limit?: number }) {
  const posts = getPosts()
    .sort(
      (a, b) =>
        new Date(b.metadata.date).getTime() -
        new Date(a.metadata.date).getTime(),
    )
    .slice(0, limit);
  return posts.map((post, index) => (
    <div key={index} className="flex justify-between items-center group">
      <Link
        href={`/blog/${post.slug}`}
        className="text-gray-200 hover:text-accent transition-colors duration-200"
      >
        {post.metadata.title.toLowerCase()}
      </Link>
      <span className="text-sm text-gray-400">
        {formatDate(post.metadata.date)}
      </span>
    </div>
  ));
}

function formatDate(dateString: string) {
  return new Date(dateString)
    .toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
    .toLowerCase();
}
