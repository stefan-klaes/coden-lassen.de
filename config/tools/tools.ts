import { SparklesIcon } from "lucide-react";
import { Tool } from "./types";

export const MINI_TOOL_SLUGS = ["ki-alt-text-generator"] as const;

export const TOOLS: Tool[] = [
  {
    name: "KI Alt Text Generator",
    slug: "ki-alt-text-generator",
    description:
      "Generiere automatisch Alt-Texte für deine Bilder mit Hilfe von künstlicher Intelligenz.",
    image: "/leistungen-wordpress-entwickler.png",
    icon: SparklesIcon,
    requiredToken: 1,
  },
];
