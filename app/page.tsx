import { AnnouncementBar } from "./components/AnnouncementBar";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
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
