export const runtime = "edge";

import { BLOG_POSTS } from "@/config/blog/blog-posts";
import { ImageResponse } from "next/og";
import CodeEditorComponent from "./components/code-editor";
import BrowserPreviewComponent from "./components/browser-preview";
import TerminalComponent from "./components/terminal";
import CodeDiff from "./components/code-diff";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const post = BLOG_POSTS.find((post) => post.slug === slug);
  if (!post) {
    return new Response("Not Found", { status: 404 });
  }
  const { motiv, config } = post.thumbnail;
  const { type } = config;

  const url = new URL(request.url);
  const origin = url.origin;

  const image = `/thumbnails/thumbnail-${motiv}.png`;

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
          src={`${origin}${image}`}
          alt="thumbnail"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: 300,
            height: 300,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            display: "flex",
          }}
        >
          {type === "code_editor" ? (
            <CodeEditorComponent config={config.atts} />
          ) : type === "browser_preview" ? (
            <BrowserPreviewComponent config={config.atts} />
          ) : type === "terminal" ? (
            <TerminalComponent config={config.atts} />
          ) : type === "code_diff" ? (
            <CodeDiff config={config.atts} />
          ) : null}
        </div>
      </div>
    ),
    {
      width: 800,
      height: 450,
    }
  );
}
