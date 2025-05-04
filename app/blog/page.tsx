import HeadStarter from "@/components/blocks/head-starter";
import Link from "@/components/ui/custom-link";
import { BLOG_POSTS } from "@/config/blog/blog-posts";
import Image from "next/image";

export default function BlogPage() {
  return (
    <div className="space-y-12">
      <HeadStarter
        title="WordPress Blog eines Entwicklers"
        description={
          <span>
            Hier findest du hilfreiche Anleitungen und Tutorials rund um{" "}
            <strong className="font-semibold">WordPress Entwicklung</strong>.
            Von der Erstellung eigener Plugins und Themes bis hin zu
            Sicherheitstipps und API-Integrationen - mein Blog bietet
            praxisnahes Wissen für Einsteiger und fortgeschrittene
            WordPress-Entwickler.
          </span>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {BLOG_POSTS.map((post, i) => (
          <Link key={i} href={`/blog/${post.slug}`} className="block">
            <div className="border rounded overflow-hidden hover:shadow-mds transition-shadow duration-300 h-full">
              <Image
                src={`/api/image/${post.slug}/thumbnail.png`}
                alt={post.title}
                width={800}
                height={450}
                className="w-full"
              />
              <div className="p-4 border-t">
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
