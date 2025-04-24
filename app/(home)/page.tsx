import AnfrageCTA from "@/components/blocks/cta-contact";
import Hero from "./components/hero";
import { Projects } from "./components/projects";
import ServiceChips from "./components/service-chips";
import Services from "./components/services";
import { Why } from "./components/why";

export default function HomePage() {
  return (
    <div className="space-y-32">
      <Hero />
      <Services />
      <div className="space-y-32 p-4">
        <ServiceChips />
        <Why />
        <Projects />
        <AnfrageCTA />
      </div>
    </div>
  );
}
