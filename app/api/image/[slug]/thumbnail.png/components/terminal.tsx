import { ImageTerminalProps } from "@/config/blog/types";
import React from "react";

export default function TerminalComponent({
  config,
}: {
  config: ImageTerminalProps;
}) {
  const { commandLines } = config;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: 480,
        height: 300,
        backgroundColor: "#282c34",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
        overflow: "hidden",
        zIndex: 0, // Ensure unitless zIndex
      }}
    >
      {/* Terminal Title Bar */}
      <div
        style={{
          width: "100%",
          height: 30,
          backgroundColor: "#21252b",
          display: "flex",
          alignItems: "center",
          padding: "0 10px",
          borderBottom: "1px solid #181a1f",
        }}
      >
        {/* Terminal Controls */}
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
              backgroundColor: "#ff5f56",
            }}
          ></div>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: "#ffbd2e",
            }}
          ></div>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: "#27c93f",
            }}
          ></div>
        </div>
      </div>

      {/* Terminal Content */}
      <div
        style={{
          flexGrow: 1,
          backgroundColor: "#282c34",
          padding: 10,
          overflow: "hidden",
          fontFamily: "monospace",
          fontSize: 26,
          color: "#abb2bf",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {commandLines &&
            commandLines.map((line, index) => {
              if (!line) return null;
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {line.command && (
                    <div style={{ display: "flex" }}>
                      <span style={{ color: "#61afef", display: "block" }}>
                        ${" "}
                      </span>
                      <span style={{ color: "#e5c07b", display: "block" }}>
                        {line.command}
                      </span>
                    </div>
                  )}
                  {line.output && (
                    <div
                      style={{
                        color: "#98c379",
                        marginTop: 3,
                        display: "flex",
                      }}
                    >
                      <span style={{ display: "block" }}>{line.output}</span>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
