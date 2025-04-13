import { BLOG_POSTS } from "@/config/blog/blog-posts";
import Image from "next/image";

export default function BlogPage() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {BLOG_POSTS.map((post, i) => (
          <div key={i} className="border rounded overflow-hidden">
            <Image
              src={`/api/image/${post.slug}/thumbnail.png`}
              alt={post.thumbnail.text}
              width={800}
              height={450}
              className="w-full"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
              <span className="text-sm text-gray-500">{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
