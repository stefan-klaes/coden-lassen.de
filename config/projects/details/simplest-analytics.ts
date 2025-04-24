import { ProjectDetails } from "../project-details";

const CONFIG: ProjectDetails = {
  task: `Entwicklung eines WordPress-Plugins zur serverseitigen Analyse von Seitenaufrufen, Nutzern und Events – komplett ohne Cookies oder externe Dienste. Nach der Installation funktioniert das Plugin sofort ohne weitere Konfiguration, bietet aber auch die Möglichkeit, individuelle Events und URL-Parameter zu tracken.`,

  challenges: [
    "Datenschutzkonforme Umsetzung ohne Cookies oder Drittanbieter",
    "Effiziente Speicherung und Auswertung von Tracking-Daten auf dem eigenen Server",
    "Einfache Integration und sofortige Nutzbarkeit nach Installation",
    "Flexible Erweiterbarkeit für benutzerdefinierte Events und Parameter",
    "Visualisierung der Daten im WordPress-Backend mit Google Charts",
  ],

  outcomes: [
    "Webanalyse ohne externe Dienste oder Cookies",
    "Sofort einsatzbereit nach Installation",
    "Messung von Seitenaufrufen, Nutzern, Events und URL-Parametern",
    "Transparente Herkunftsanalyse des Traffics und WooCommerce-Verkäufen",
    "Einfache Erweiterbarkeit durch eigene Tracking-Funktionen",
  ],

  solution: `Das Plugin "Simplest Analytics" ermöglicht es Website-Betreibern, Besucher, Seitenaufrufe, Events und URL-Parameter serverseitig und anonym zu erfassen. Die Daten werden ausschließlich auf dem eigenen Server gespeichert und im WordPress-Backend übersichtlich mit Google Charts visualisiert. Nach der Aktivierung ist keine weitere Konfiguration notwendig. Über die Einstellungen können individuelle Events und Parameter definiert werden. Eine PHP-Funktion erlaubt das Tracking beliebiger Ereignisse, z.B. Formularabsendungen oder Warenkorb-Aktionen. Das Plugin verzichtet vollständig auf Cookies und externe Dienste und ist damit besonders datenschutzfreundlich.`,

  technologies: ["PHP", "WordPress", "JavaScript", "Google Charts", "MySQL"],

  client: "Website-Betreiber mit Fokus auf Datenschutz und einfache Webanalyse",

  screenshots: Array.from({ length: 4 }, (_, i) => ({
    src: `/referenzen/simplest-analytics-screenshot-${i + 1}.png`,
    url: "WordPress > Simplest Analytics",
    alt: `Simplest Analytics Screenshot ${i + 1}`,
  })),

  links: [
    {
      title: "WordPress Plugin Verzeichnis",
      url: "https://wordpress.org/plugins/simplest-analytics/",
    },
  ],
};

export default CONFIG;
