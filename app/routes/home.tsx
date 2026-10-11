import type { Route } from "./+types/home";
import Hero from "./hero";
import HowWeWork from "./process";
import Why from "./why";
import ProfessionalServices from "./houseServices";
import Services from "./services";
import CatalogSection from "./catalogsection";
import FactorySection from "./factorySection";
import ContactSection from "./contact";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "ALLIANCE SOURCING BD" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <Why />
      <HowWeWork />
      <ProfessionalServices />
      <Services />
      <CatalogSection />
      <FactorySection />
      <ContactSection />
    </>
  )
}
