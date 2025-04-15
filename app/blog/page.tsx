import Link from "@/components/ui/custom-link";
import { BLOG_POSTS } from "@/config/blog/blog-posts";
import Image from "next/image";

export default function BlogPage() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {BLOG_POSTS.map((post, i) => (
          <Link key={i} href={`/blog/${post.slug}`} className="block">
            <div className="border rounded overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
              <Image
                src={`/api/image/${post.slug}/thumbnail.png`}
                alt={post.thumbnail.text}
                width={800}
                height={450}
                className="w-full"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold line-clamp-2">
                  {post.title}
                </h2>
                <p className="line-clamp-3">{post.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
