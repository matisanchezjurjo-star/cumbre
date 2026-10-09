import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ServicesSection } from "./components/ServicesSection";
import { DomoticaPossibilities } from "./components/DomoticaPossibilities";
import { ProcessSection } from "./components/ProcessSection";
import { CaseStudies } from "./components/CaseStudies";
import { Trust } from "./components/Trust";
import { FAQ } from "./components/FAQ";
import { ContactCTA } from "./components/ContactCTA";
import { Footer } from "./components/CTAFooter";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <DomoticaPossibilities />
        <ProcessSection />
        <CaseStudies />
        <Trust />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
