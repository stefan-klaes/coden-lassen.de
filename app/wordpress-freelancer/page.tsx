import Image from "next/image";
import type { Metadata } from "next";
import AboutMe from "@/components/blocks/about-me";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import AnfrageCTA from "@/components/blocks/cta-contact";
import { Projects } from "../(home)/components/projects";
import HeadStarter from "@/components/blocks/head-starter";

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
      <div className="grid gap-12 lg:grid-cols-2 items-start">
        <div className="flex flex-col justify-center space-y-4">
          <Typography variant="h1">
            Ich bin Stefan,
            <br />
            WordPress Entwickler
          </Typography>
          <p>
            Ich bin WordPress Entwickler und arbeite hauptsächlich mit
            Agenturen, Freelancern und WordPress Profis zusammen und
            programmiere individuelle Lösungen für WordPress.
          </p>
          <AboutMe type="aboutme" />
        </div>
        <div className="pt-4 relative flex justify-center h-[320px] lg:h-full border-b lg:border-b-0">
          <Image
            src="/individuelles-wordpress-plugin-entwickler.webp"
            alt="WordPress Entwickler mit Laptop"
            fill
            className="w-auto h-full object-contain object-center"
            priority
            quality={100}
          />
        </div>
      </div>
      <AboutMeChat />
      <Projects />
      <AnfrageCTA
        title="Du suchst einen WordPress Entwickler?"
        description="Lass uns in Kontakt treten. Wenn du eine Einschätzung zur Umsetzbarkeit spezieller Anforderungen benötigst oder generell in Kontakt treten möchtest, melde dich gerne."
      />
    </div>
  );
}

function AboutMeChat() {
  const messages = [
    {
      sender: "Stefan",
      text: (
        <>
          👋 Hi! Ich entwickle <b>individuelle WordPress-Lösungen</b> – von
          Plugins bis zu maßgeschneiderten Erweiterungen. Dabei nutze ich{" "}
          <b>PHP, MySQL, JavaScript, HTML und CSS</b>.
        </>
      ),
    },
    {
      sender: "Stefan",
      text: (
        <>
          Mein Fokus liegt <b>ausschließlich auf individueller Entwicklung</b>.{" "}
          <br />
          Komplette Websites biete ich nicht an.
        </>
      ),
    },
    {
      sender: "Stefan",
      text: (
        <>
          Hauptberuflich arbeite ich als Software Engineer in einem großen
          deutschen Unternehmen – mit{" "}
          <b>Next.js, TypeScript, React und Python</b>. <br />
          WordPress war mein Einstieg in die Programmierung, daher freue ich
          mich, nebenberuflich weiterhin spannende Projekte umzusetzen.
        </>
      ),
    },
    {
      sender: "Stefan",
      text: (
        <>
          Ich suche <b>WordPress-Profis</b>, die selbst Websites erstellen und
          gelegentlich Unterstützung bei individuellen Lösungen benötigen.
        </>
      ),
    },
    {
      sender: "Stefan",
      text: (
        <>
          Meine Leistungen biete ich <b>zum Festpreis</b> an. Viele meiner
          Kunden geben meine Arbeit mit Aufpreis an ihre Endkunden weiter – so
          bleibt auch für dich eine Marge möglich.
        </>
      ),
    },
    {
      sender: "Stefan",
      text: (
        <>
          Wenn du ab und zu Unterstützung bei individuellen
          WordPress-Programmierungen brauchst, <b>melde dich gern</b> – auch
          wenn aktuell nichts ansteht!
        </>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <HeadStarter
        title="Lerne mich kennen"
        description="Hier ist ein kurzer Überblick über mich und meine Arbeitsweise."
      />
      <div className="max-w-xl mx-auto space-y-8">
        {messages.map((msg, idx) => {
          // Array mit möglichen Margin-Left-Werten (px)
          const marginVariants = [0, 4];
          const marginLeft = marginVariants[idx % marginVariants.length];
          return (
            <div key={idx} className="flex">
              <div
                className={cn(
                  "bg-muted px-4 py-3 rounded-2xl shadow-sm border",
                  marginLeft === 0 ? "w-[96%]" : "w-full"
                )}
                style={{ marginLeft: `${marginLeft}%` }}
              >
                <span className="block text-base">{msg.text}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
