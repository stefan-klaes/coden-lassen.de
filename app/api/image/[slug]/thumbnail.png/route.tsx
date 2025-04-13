export const runtime = "edge";

import { BLOG_POSTS } from "@/config/blog/blog-posts";
import { ImageResponse } from "next/og";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const post = BLOG_POSTS.find((post) => post.slug === slug);
  if (!post) {
    return new Response("Not Found", { status: 404 });
  }
  const { text, bg, color } = post.thumbnail;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: bg,
          color,
          width: "100%",
          height: "100%",
          fontSize: 100,
        }}
      >
        {text}
      </div>
    ),
    {
      width: 800,
      height: 450,
    }
  );
}
