import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, MapPin, Briefcase, Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Über mich | WordPress Freelancer für individuelle Plugin-Entwicklung",
  description:
    "WordPress Freelancer mit Leidenschaft für individuelle Programmierung und Plugin-Entwicklung. Unterstützung für Agenturen und andere Freelancer.",
  keywords: [
    "WordPress Freelancer",
    "Plugin-Entwicklung",
    "WordPress Programmierung",
    "WordPress Entwickler",
    "WordPress Plugins",
  ],
};

export default function WordpressFreelancerPage() {
  return (
    <div className="grid gap-24">
      <section>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              WordPress Freelancer für individuelle Programmierung
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Spezialisiert auf maßgeschneiderte Plugin-Entwicklung für
              Agenturen und Freelancer
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="text-sm py-1">
                WordPress
              </Badge>
              <Badge variant="outline" className="text-sm py-1">
                Plugin-Entwicklung
              </Badge>
              <Badge variant="outline" className="text-sm py-1">
                Custom Code
              </Badge>
              <Badge variant="outline" className="text-sm py-1">
                Remote
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <MapPin size={18} />
              <span>Zwischen Hamburg und Bremen</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Briefcase size={18} />
              <span>Software Engineer & WordPress Freelancer</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-full aspect-square max-w-md mx-auto rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/wordpress-entwickler-profile-image.png"
                alt="Stefan - WordPress Freelancer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Code className="h-8 w-8" />
          Über mich als WordPress Freelancer
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Persönliches</h3>
              <p className="mb-4">
                Hallo, ich bin Stefan – ein leidenschaftlicher Programmierer und
                WordPress-Enthusiast aus einem kleinen Dorf zwischen Hamburg und
                Bremen. Als Remote-Arbeiter verbinde ich die Ruhe des Landlebens
                mit der digitalen Welt der Webentwicklung.
              </p>
              <p>
                Hauptberuflich bin ich als Software Engineer in einem großen
                deutschen Unternehmen tätig, was mir einen breiten
                Erfahrungsschatz in professioneller Softwareentwicklung
                ermöglicht. Diese Expertise bringe ich in meine
                Freelance-Projekte ein.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">
                Meine WordPress-Leidenschaft
              </h3>
              <p className="mb-4">
                WordPress hat mich schon früh begeistert – die Kombination aus
                Flexibilität, Community und technischen Möglichkeiten macht es
                zu meiner bevorzugten Plattform für Webentwicklung.
              </p>
              <p>
                Anders als viele WordPress-Freelancer konzentriere ich mich
                nicht auf komplette Website-Erstellungen, sondern auf das, was
                ich am besten kann: individuelle Programmierung und
                maßgeschneiderte Plugin-Entwicklung, die genau auf die
                Bedürfnisse meiner Kunden zugeschnitten ist.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">
          Meine Dienstleistungen als WordPress Freelancer
        </h2>
        <div className="grid gap-6">
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 p-6 border-b">
              <h3 className="text-2xl font-semibold">
                Individuelle WordPress Plugin-Entwicklung
              </h3>
            </div>
            <CardContent className="pt-6">
              <p className="mb-4">
                Als spezialisierter WordPress Freelancer entwickle ich
                maßgeschneiderte Plugins, die genau das tun, was Sie benötigen –
                nicht mehr und nicht weniger. Mein Fokus liegt auf:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  Entwicklung von Custom Plugins nach Ihren spezifischen
                  Anforderungen
                </li>
                <li>Erweiterung und Anpassung bestehender WordPress-Plugins</li>
                <li>
                  Integration von Drittanbieter-APIs und -Diensten in WordPress
                </li>
                <li>
                  Optimierung der Performance von WordPress-Installationen
                </li>
                <li>
                  Behebung von technischen Problemen und Bugs in
                  WordPress-Setups
                </li>
              </ul>
              <p>
                Ich arbeite hauptsächlich mit Agenturen und anderen Freelancern
                zusammen, die technische Unterstützung bei ihren
                WordPress-Projekten benötigen. Meine Rolle ist die des
                technischen Spezialisten, der die Lücke zwischen Design und
                Funktionalität schließt.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">
          Warum mich als WordPress Freelancer wählen?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">
                Technische Expertise
              </h3>
              <p>
                Als hauptberuflicher Software Engineer bringe ich fundiertes
                technisches Know-how und Best Practices aus der professionellen
                Softwareentwicklung in meine WordPress-Projekte ein.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Spezialisierung</h3>
              <p>
                Ich konzentriere mich ausschließlich auf individuelle
                Programmierung und Plugin-Entwicklung für WordPress – das ist
                meine Stärke und Leidenschaft.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Zuverlässigkeit</h3>
              <p>
                Als Partner für Agenturen und andere Freelancer verstehe ich die
                Bedeutung von Termintreue, klarer Kommunikation und qualitativ
                hochwertiger Arbeit.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-green-50 dark:bg-green-950 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Benötigen Sie einen WordPress Freelancer für Ihr Projekt?
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Ob Sie eine Agentur sind, die technische Unterstützung benötigt, oder
          ein Freelancer, der Hilfe bei der Umsetzung eines komplexen
          WordPress-Projekts sucht – ich freue mich auf Ihre Anfrage!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/kontakt">
              Kontakt aufnehmen <Mail className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="/projekte">
              Projekte ansehen <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
