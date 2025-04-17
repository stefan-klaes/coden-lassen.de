export const runtime = "edge";
export const dynamic = "force-dynamic";

import { BLOG_POSTS } from "@/config/blog/blog-posts";
import { ImageResponse } from "next/og";
import CodeEditorComponent from "./components/code-editor";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const post = BLOG_POSTS.find((post) => post.slug === slug);
  if (!post) {
    return new Response("Not Found", { status: 404 });
  }
  const { text, bg, color, image, type } = post.thumbnail;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex", // explicitly set flex
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          backgroundColor: "#eeeeee",
          width: 800,
          height: 450,
        }}
      >
        <img
          src={`http://localhost:3000${image}`}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: 300,
            height: 300,
            zIndex: 1, // unitless number
          }}
        />
        {type === "code_editor" ? (
          <div
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              display: "flex",
            }}
          >
            <CodeEditorComponent text={text} />
          </div>
        ) : (
          <div
            style={{
              display: "flex", // explicitly set flex
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              borderRadius: 10,
              top: 20,
              right: 20,
              zIndex: 2, // unitless number
              backgroundColor: bg,
              color: color,
              width: 520,
              height: 225,
              marginBottom: 50,
              fontSize: 72,
              padding: 20,
            }}
          >
            {text}
          </div>
        )}
      </div>
    ),
    {
      width: 800,
      height: 450,
    }
  );
}
