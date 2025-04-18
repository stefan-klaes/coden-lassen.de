import { ImageBrowserPreview } from "@/config/blog/types";
import React from "react";

export default function BrowserPreviewComponent({
  config,
}: {
  config: ImageBrowserPreview;
}) {
  const { url, title, content } = config;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: 480,
        height: 300,
        backgroundColor: "#ffffff",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        overflow: "hidden",
      }}
    >
      {/* Browser Navigation Bar */}
      <div
        style={{
          width: "100%",
          height: 30,
          backgroundColor: "#f3f4f6",
          display: "flex",
          alignItems: "center",
          padding: "0 10px",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        {/* Browser Controls */}
        <div
          style={{
            display: "flex",
            gap: 6,
            marginRight: 10,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: "#ef4444",
            }}
          ></div>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: "#f59e0b",
            }}
          ></div>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: "#10b981",
            }}
          ></div>
        </div>

        {/* URL Bar */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#e5e7eb",
            borderRadius: 4,
            height: 22,
            display: "flex",
            alignItems: "center",
            padding: "0 8px",
            fontSize: 12,
            color: "#4b5563",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {url}
        </div>
      </div>

      {/* Browser Content */}
      <div
        style={{
          flexGrow: 1,
          backgroundColor: "#ffffff",
          padding: 10,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {title && (
          <h1
            style={{
              fontSize: 42,
              fontWeight: "bold",
              marginBottom: 12,
              color: "#111827",
            }}
          >
            {title}
          </h1>
        )}
        <div
          style={{
            fontSize: 32,
            lineHeight: 1.5,
            color: "#374151",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {typeof content === "string"
            ? content.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < content.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))
            : content}
        </div>
      </div>
    </div>
  );
}
