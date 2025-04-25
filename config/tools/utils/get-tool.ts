import { ToolSlug, Tool } from "../types";
import { TOOLS } from "../tools";

export function getTool(slug: ToolSlug): Tool {
  const tool = TOOLS.find((tool) => tool.slug === slug);
  if (!tool) {
    throw new Error(`Tool ${slug} not found`);
  }
  return tool;
}