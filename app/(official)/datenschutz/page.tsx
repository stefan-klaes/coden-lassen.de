import { MarkdownRenderer } from "@/components/utility/markdown-renderer";
import { DATENSCHUTZ } from "./markdown";

export default async function DatenschutzPage() {
  return <MarkdownRenderer content={DATENSCHUTZ} />;
}
