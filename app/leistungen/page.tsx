import HeadStarter from "@/components/blocks/head-starter";
import ServiceChips from "../(home)/components/service-chips";
import CoreServices from "./components/core-services";
import Workflow from "./components/workflow";
import AnfrageCTA from "@/components/blocks/cta-contact";
import { Why } from "../(home)/components/why";

export default function LeistungenPage() {
  return (
    <section className="grid gap-24">
      <div className="grid gap-12">
        <HeadStarter
          title="Meine Leistungen als WordPress Entwickler"
          description={
            <span>
              Ich spezialisiere mich auf{" "}
              <strong className="font-semibold">
                individuelle WordPress Lösungen
              </strong>
              . Hierbei kann es um kleinere Anpassungen oder um komplette
              Neuentwicklungen gehen. Ich helfe WordPress Profis dabei
              Sonderlösungen zu entwickeln, die mit den Standardmitteln von
              WordPress nicht möglich sind.
            </span>
          }
        />
        <ServiceChips />
      </div>
      <CoreServices />
      <div className="grid gap-24">
        <Workflow />
        <Why />
        <AnfrageCTA
          description="Jetzt unverbindlich anfragen! Ich setze sowohl, kleinere Anpassungen als auch größere Entwicklungen in WordPress zum Festpreis um."
          secondaryBotton={{
            href: "/referenzen",
            label: "Referenzen",
          }}
        />
      </div>
    </section>
  );
}
