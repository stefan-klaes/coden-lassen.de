import { Typography } from "@/components/ui/typography";
import {
  BracesIcon,
  ClockIcon,
  CodeIcon,
  FileTextIcon,
  FolderIcon,
  LucideIcon,
  MailIcon,
  ShoppingCartIcon,
  SparklesIcon,
} from "lucide-react";

type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};
const SERVICES: ServiceItem[] = [
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
    <div className="space-y-8 p-4">
      <Typography variant="h3">Mögliche individuelle Umsetzungen</Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((service, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-none size-12 rounded-lg bg-muted ">
              <div className="flex items-center justify-center size-full">
                <service.icon className="size-6 text-muted-foreground" />
              </div>
            </div>
            <div className="flex-grow">
              <h4 className="text-lg font-semibold">{service.title}</h4>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        Weitere Lösungen sind auf Anfrage natürlichs möglich.
      </p>
    </div>
  );
}
