import { ImageCodeDiff } from "@/config/blog/types";

export default function CodeDiff({ config }: { config: ImageCodeDiff }) {
  const { oldLines, newLines } = config;

  return (
    <div
      style={{
        width: 480,
        height: 300,
        display: "flex",
        flexDirection: "column",
        paddingBottom: 30,
        backgroundColor: "#0d1117",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
        fontFamily: "monospace",
        fontSize: 15,
        border: "1px solid #30363d",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#161b22",
          padding: "10px 18px",
          borderBottom: "1px solid #30363d",
          marginBottom: 30,
        }}
      >
        <div
          style={{
            backgroundColor: "#e34c26",
            borderRadius: "50%",
            width: 10,
            height: 10,
            marginRight: 10,
          }}
        />
        <span style={{ color: "#c9d1d9", fontWeight: 600, fontSize: 14 }}>
          diff
        </span>
      </div>
      {/* Diff lines */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Old lines in red */}
        {oldLines.map((line, i) => (
          <div
            key={`old-${i}`}
            style={{
              display: "flex",
              alignItems: "center",
              minHeight: 28,
              borderBottom: "1px solid #161b22",
              background: "rgba(248,113,113,0.08)",
            }}
          >
            <span
              style={{
                width: 38,
                paddingLeft: 6,
                textAlign: "right",
                color: "#6e7681",
                borderRight: "1px solid #21262d",
                userSelect: "none",
                fontSize: 24,
                paddingRight: 6,
              }}
            >
              {i + 1}
            </span>
            <span
              style={{
                width: 18,
                textAlign: "center",
                fontWeight: 700,
                color: "#ff7b72",
                fontSize: 24,
                userSelect: "none",
              }}
            >
              -
            </span>
            <span
              style={{
                color: "#ff7b72",
                padding: "0 8px",
                flex: 1,
                fontSize: 24,
                whiteSpace: "pre",
              }}
            >
              {line}
            </span>
          </div>
        ))}
        {/* New lines in green */}
        {newLines.map((line, i) => (
          <div
            key={`new-${i}`}
            style={{
              display: "flex",
              alignItems: "center",
              minHeight: 28,
              borderBottom: "1px solid #161b22",
              background: "rgba(16,185,129,0.08)",
            }}
          >
            <span
              style={{
                width: 38,
                textAlign: "right",
                color: "#6e7681",
                borderRight: "1px solid #21262d",
                userSelect: "none",
                fontSize: 24,
                paddingLeft: 6,
                paddingRight: 6,
              }}
            >
              {i + 1}
            </span>
            <span
              style={{
                width: 18,
                textAlign: "center",
                fontWeight: 700,
                color: "#3fb950",
                fontSize: 24,
                userSelect: "none",
              }}
            >
              +
            </span>
            <span
              style={{
                color: "#3fb950",
                padding: "0 8px",
                flex: 1,
                fontSize: 24,
                whiteSpace: "pre",
              }}
            >
              {line}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
