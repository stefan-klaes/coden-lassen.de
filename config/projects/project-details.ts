import { ProjectSlug } from "./projects";
import * as details from "./details";

export type ProjectDetails = {
  task: string;
  challenges: string[];
  outcomes: string[];
  solution: string;
  technologies: string[];
  client: string;
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
  links?: {
    title: string;
    url: string;
  }[];
};

export const PROJECT_DETAILS: Record<ProjectSlug, ProjectDetails> = {
  werkstattauftrag: details.werkstattauftrag,
  "job-synchronisation": details.jobSynchronisation,
  "pdf-etiketten": details.pdfEtiketten,
  "bild-generierung": details.bildGenerierung,
  "zeitraffer-webcam": details.zeitrafferWebcam,
  bestellemails: details.bestellemails,
  "racechip-api-fahrzeugwahl": details.racechipApiFahrzeugwahl,
  ticketsystem: details.ticketsystem,
  versandkostenfrei: details.versandkostenfrei,
  "simplest-analytics-wp-plugin": details.simplestAnalytics,
};
