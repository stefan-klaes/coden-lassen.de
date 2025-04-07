import { ProjectSlug } from "./projects";
import * as details from "./details";

export type ProjectDetails = {
  task: string;
  solution: string;
  code?: {
    filename: string;
    code: string;
    language: string;
    description?: string;
  }[];
  screenshots?: {
    url: string;
    src: string;
    alt: string;
    description?: string;
  }[];
};

export const PROJECT_DETAILS: Partial<Record<ProjectSlug, ProjectDetails>> = {
  werkstattauftrag: details.werkstattauftrag,
};
