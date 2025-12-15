import * as React from "react";
import { cn } from "@/lib/utils";

interface SyntaxHighlighterProps {
  children: string;
  className?: string;
}

export default function SyntaxHighlighter({
  children,
  className,
}: SyntaxHighlighterProps) {
  return (
    <pre
      className={cn(
        "m-0 p-6 rounded-b-lg bg-[#f6f8fa] dark:bg-[#0d1117] text-[0.9rem] overflow-x-auto font-mono leading-relaxed whitespace-pre",
        className
      )}
    >
      <code className={cn("text-[#24292e] dark:text-[#c9d1d9] block")}>
        {children}
      </code>
    </pre>
  );
}
