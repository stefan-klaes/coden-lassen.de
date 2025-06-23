import { ProjectDetails } from "../project-details";

const CONFIG: ProjectDetails = {
  task: `Entwicklung einer spezialisierten Plugin-Lösung zur Erstellung professioneller PDF-Etiketten für Labeldrucker. Das Plugin sollte eine einfache, aber effiziente Möglichkeit bieten, Etiketten direkt aus dem WordPress-Backend zu erstellen und zu drucken.`,

  challenges: [
    "Präzise PDF-Generierung mit korrekten Abmessungen für Labeldrucker",
    "Benutzerfreundliche Oberfläche für einfache Etikettenerstellung",
    "Integration von dynamischen Inhalten wie Barcodes und Produktdaten",
    "Optimierung für verschiedene Druckermodelle und Etikettengrößen",
  ],

  outcomes: [
    "Erhebliche Zeitersparnis bei der Etikettenerstellung",
    "Konsistentes und professionelles Erscheinungsbild aller Etiketten",
    "Reduzierte Fehlerquote durch automatisierte Dateneingabe",
    "Flexibilität durch verschiedene Etikettenvorlagen und -größen",
  ],

  solution: `Die entwickelte Lösung bietet eine nahtlose Integration in WordPress mit einer intuitiven Benutzeroberfläche zur Etikettenerstellung. Durch die Verwendung der DOMPDF-Bibliothek werden maßgeschneiderte PDF-Etiketten in verschiedenen Formaten generiert, die präzise auf die Anforderungen verschiedener Labeldrucker abgestimmt sind. Das Plugin unterstützt die Integration von Produkt- und Bestelldaten, Barcodes und QR-Codes sowie benutzerdefinierten Inhalten. Eine Vorschaufunktion ermöglicht die Überprüfung der Etiketten vor dem Druck, während Batch-Verarbeitung für die effiziente Erstellung mehrerer Etiketten sorgt.`,

  technologies: [
    "PHP",
    "WordPress",
    "JavaScript",
    "DOMPDF",
    "HTML/CSS",
    "MySQL",
  ],

  client: "Ledermanufaktur",
};

export default CONFIG;
