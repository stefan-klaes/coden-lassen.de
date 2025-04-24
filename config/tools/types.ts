import { LucideIcon } from "lucide-react";
import { MINI_TOOL_SLUGS } from "./tools";

export type Tool = {
  name: string;
  slug: ToolSlug;
  description: string;
  image: string;
  icon: LucideIcon;
};

export type ToolSlug = (typeof MINI_TOOL_SLUGS)[number];
