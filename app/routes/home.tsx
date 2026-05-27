import type { Route } from "./+types/home";
import Hero from "./hero.tsx";
import HowWeWork from "./process";
import Why from "./why.tsx";
import ProfessionalServices from "./houseServices.tsx";
import Services from "./services.tsx";
import CatalogSection from "./catalogsection.tsx";
import FactorySection from "./factorySection.tsx";
import ContactSection from "./contact.tsx";


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
