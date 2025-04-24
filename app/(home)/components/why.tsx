import type React from "react";
import { Code, FileCode, LucideIcon, Shield, Zap } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HeadStarter from "@/components/blocks/head-starter";

interface WhyItem {
  title: string;
  description: string;
  filename: string;
  language: string;
  code: string;
  icon: LucideIcon;
}

const WHYS: WhyItem[] = [
  {
    title: "Einhaltung des WordPress Coding Standards",
    description:
      "Ich programmiere nach den offiziellen WordPress Coding Standards. Dadurch ist der Code sicher und wartbar. Dateneingaben werden validiert, nonces werden verwendet, und die Sicherheit wird durch bewährte Praktiken gewährleistet.",
    language: "php",
    filename: "sanitize.php",
    code: `// nicht empfohlen
$email = $_POST['email'];

// empfohlen (WordPress Code Standard)
$email = isset( $_POST['email'] ) ? sanitize_email( $_POST['email'] ) : "" ;`,
    icon: Shield,
  },
  {
    title: "Einbau unterschiedlichster Funktionalitäten",
    description:
      "Von Anbindungen zu externen APIs über Erweiterungen von WordPress-Funktionen bis hin zu individuellen Anpassungen – ich entwickle maßgeschneiderte Lösungen.",
    language: "php",
    filename: "plugin-name.php",
    code: `/* API-Anbindung
 * TODO: Daten aus externem Service abrufen
 */

/* Erstellung von PDF-Dokumenten
 * TODO: PDF-Dokumente erstellen und speichern
 */

/* Woocommerce Bestellüberprüfung
 * TODO: Regeln für die Überprüfung der Bestellung einbauen
 */

/* KI Integration
 * TODO: KI integrieren für die Priorisierung von Bestellungen
 */

// und viele weitere Möglichkeiten...`,
    icon: Zap,
  },
  {
    title: "Erstellung versionierter WordPress Plugins",
    description:
      "Meine Plugins sind versioniert, wodurch zukünftige Änderungen und Bugfixes einfach nachverfolgt werden können. So können die Versionen leicht installiert werden.",
    language: "text",
    filename: "README.txt",
    code: `= 1.0.2 - 2025-04-07 =
* Feat: Einbau einer Download Funktion für die XML-Datei

= 1.0.1 - 2025-04-05 =
* Fix: Tippfehler in der Beschreibung korrigiert

= 1.0.0 - 2025-04-01 =
* Erster Release`,
    icon: FileCode,
  },
];

export function Why() {
  return (
    <section>
      <div>
        <HeadStarter
          title="WordPress Entwicklung mit Fokus auf Qualität"
          variant="h2"
          description="Sichere und wartbare WordPress Plugins und Themes durch Einhaltung
            bewährter Coding-Praktiken"
        />
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {WHYS.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="flex flex-row items-center gap-2">
                <item.icon className="size-6" />
                <CardTitle className="text-xl font-bold">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 leading-relaxed">{item.description}</p>
                <div className="rounded-lg overflow-hidden border">
                  <div className="px-4 py-2 flex items-center gap-2 border-b">
                    <Code className="h-4 w-4" />
                    <span className="text-sm font-mono">{item.filename}</span>
                  </div>
                  <SyntaxHighlighter
                    language={item.language}
                    style={github}
                    customStyle={{
                      margin: 0,
                      padding: "1.5rem",
                      borderRadius: "0 0 0.5rem 0.5rem",
                      fontSize: "0.9rem",
                    }}
                  >
                    {item.code}
                  </SyntaxHighlighter>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
