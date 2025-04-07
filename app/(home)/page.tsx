import Hero from "./components/hero";
import { References } from "./components/references";
import Services from "./components/services";
import { Why } from "./components/why";

export default function HomePage() {
  return (
    <div className="space-y-32">
      <Hero />
      <Services />
      <Why />
      <References />
    </div>
  );
}
