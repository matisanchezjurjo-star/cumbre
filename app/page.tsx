import { AnnouncementBar } from "./components/AnnouncementBar";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ServicesSection } from "./components/ServicesSection";
import { DomoticaPossibilities } from "./components/DomoticaPossibilities";
import { ProcessSection } from "./components/ProcessSection";
import { ProjectsGallery } from "./components/ProjectsGallery";
import { BrandsSection } from "./components/BrandsSection";
import { Categories } from "./components/Categories";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Trust } from "./components/Trust";
import { CTASection, Footer } from "./components/CTAFooter";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <AnnouncementBar />
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <DomoticaPossibilities />
        <ProcessSection />
        <ProjectsGallery />
        <BrandsSection />
        <Categories />
        <FeaturedProducts />
        <Trust />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
