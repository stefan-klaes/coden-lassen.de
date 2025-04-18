import { ImageCodeEditor } from "@/config/blog/types";
import React from "react";

export default function CodeEditorComponent({
  config,
}: {
  config: ImageCodeEditor;
}) {
  const { filename, language, codeLines } = config;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: 480,
        height: 300,
        backgroundColor: "#111827",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        overflow: "hidden",
      }}
    >
      {/* Editor Tabs */}
      <div
        style={{
          width: "100%",
          height: 30,
          backgroundColor: "#1f2937",
          display: "flex",
          alignItems: "center",
          fontSize: 16,
        }}
      >
        <div
          style={{
            padding: "0 10px",
            backgroundColor: "#374151",
            color: "#60a5fa",
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          <span>{filename}</span>
          <span style={{ marginLeft: 8, color: "#6b7280" }}>×</span>
        </div>
      </div>

      {/* Line Numbers and Code */}
      <div style={{ display: "flex", flexGrow: 1 }}>
        <div
          style={{
            width: 22,
            backgroundColor: "#1f2937",
            color: "#6b7280",
            fontSize: 28,
            padding: 4,
            textAlign: "center",
            fontFamily: "monospace",
            display: "flex", // Added display: flex
            flexDirection: "column", // Added flexDirection
          }}
        >
          {codeLines.map((line, index) => (
            <div
              key={index}
              style={{ display: "flex", justifyContent: "center" }}
            >
              {index + 1}
            </div>
          ))}
        </div>
        <div
          style={{
            flexGrow: 1,
            backgroundColor: "#111827",
            fontSize: 28,
            fontFamily: "monospace",
            padding: 4,
            color: "#d1d5db",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {codeLines.map((line, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                whiteSpace: "pre", // Preserve all whitespace including multiple spaces
              }}
            >
              {line === "[empty]" ? (
                <span style={{ color: "#111827" }}>-</span>
              ) : (
                line
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Status Bar */}
      <div
        style={{
          width: "100%",
          height: 16,
          backgroundColor: "#2563eb",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 8px",
          fontSize: 12,
          color: "#fff",
        }}
      >
        <div style={{ display: "flex" }}>main</div>
        <div style={{ display: "flex" }}>{language}</div>
        <div style={{ display: "flex" }}>Ln {codeLines.length}</div>
      </div>
    </div>
  );
}
