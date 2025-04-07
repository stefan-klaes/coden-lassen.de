import { ProjectDetails } from "../project-details";

const CONFIG: ProjectDetails = {
  task: "Werkstattauftrag",
  solution: "Ein Werkzeug für die Verwaltung von Werkstattaufträgen.",
  code: [
    {
      filename: "werkstattauftrag.php",
      language: "php",
      code: `<?php
// Plugin Name: Werkstattauftrag
// Description: Ein Werkzeug für die Verwaltung von Werkstattaufträgen.
// Version: 1.0.0`,
    },
  ],
  screenshots: [
    {
      src: "/woocommerce-custom-order-actions.png",
      url: "Bestellung > Bearbeiten",
      alt: "Werkstattauftrag Screenshot",
      description: "Screenshot des Werkstattauftrags",
    },
  ],
};

export default CONFIG;
