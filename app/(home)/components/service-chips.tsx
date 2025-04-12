import IconServices from "@/components/blocks/icon-services";
import {
  BracesIcon,
  ClockIcon,
  CodeIcon,
  FileTextIcon,
  FolderIcon,
  MailIcon,
  ShoppingCartIcon,
  SparklesIcon,
} from "lucide-react";

const SERVICES = [
  {
    icon: CodeIcon,
    title: "WordPress Entwicklung",
    description:
      "Individuelle WordPress Lösungen, die über die Kernfunktionalität hinausgehen.",
  },
  {
    icon: FolderIcon,
    title: "Plugin Entwicklung",
    description: "Maßgeschneiderte Plugins für spezifische Anforderungen.",
  },
  {
    icon: BracesIcon,
    title: "API Integrationen",
    description: "Integration von externen APIs in WordPress.",
  },
  {
    icon: SparklesIcon,
    title: "Einbindung von KI",
    description:
      "Integration von KI für automatisierte Prozesse und intelligente Lösungen.",
  },
  {
    icon: ShoppingCartIcon,
    title: "WooCommerce Anpassungen",
    description:
      "Technische Erweiterungen für individuelle Shop-Funktionalität.",
  },
  {
    icon: FileTextIcon,
    title: "PDF-Generierung",
    description:
      "Automatisches Erstellen von PDFs für Angebote, Rechnungen und Berichte.",
  },
  {
    icon: ClockIcon,
    title: "Cronjobs & Datensynchronisation",
    description:
      "Automatisierte Abläufe für Import, Export und Datenaktualisierung.",
  },
  {
    icon: MailIcon,
    title: "E-Mail- & Rechnungs-Layouts",
    description:
      "Integration neuer oder angepasster E-Mail- und Rechnungs-Layouts.",
  },
];

export default function ServiceChips() {
  return (
    <IconServices
      items={SERVICES}
      title="Mögliche individuelle Umsetzungen"
      footerNote="Weitere Lösungen sind auf Anfrage natürlichs möglich."
    />
  );
}
