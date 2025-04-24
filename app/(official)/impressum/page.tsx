import { MarkdownRenderer } from "@/components/utility/markdown-renderer";
import { IMPRESSUM } from "./markdown";

export default async function ImpressumPage() {
  return <MarkdownRenderer content={IMPRESSUM} />;
}
