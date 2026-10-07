import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "../components/Header";
import { AnnouncementBar } from "../components/AnnouncementBar";
import { Footer } from "../components/CTAFooter";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { Button } from "../components/ui/Button";
import { Eyebrow, H1, H2 } from "../components/ui/Typography";
import { CATEGORIES } from "../lib/constants";
import { PRODUCTS } from "../lib/products";

export const metadata: Metadata = {
  title: "Cumbre Home — Equipamiento para tu Hogar y Empresa | Cumbre",
  description:
    "Hornos, anafes, microondas, heladeras, climatización, lavado y TV. Equipamiento de cocina y electrodomésticos para tu hogar o tu empresa.",
};

const HOME_CATEGORIES = CATEGORIES.filter((c) => c.line === "cumbre-home");

// Subconjunto de categorías que más se piden para oficinas y locales:
// climatización de espacios de trabajo, AV para salas de reunión y el
// office de la empresa. No son categorías distintas del catálogo — es
// el mismo stock, pensado para ese uso.
const BUSINESS_CATEGORY_LABELS = [
  "Aire Acondicionado y Climatización",
  "TV y Audio",
  "Microondas",
  "Heladeras y Freezers",
];
const BUSINESS_CATEGORIES = HOME_CATEGORIES.filter((c) =>
  BUSINESS_CATEGORY_LABELS.includes(c.label)
);

function CategoryGrid({
  categories,
}: {
  categories: typeof HOME_CATEGORIES;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
      {categories.map((c) => {
        const count = PRODUCTS.filter((p) => p.category === c.category)
          .length;
        return (
          <Link
            key={c.category}
            href={`/productos?linea=cumbre-home&categoria=${encodeURIComponent(c.category)}`}
            className="group block rounded-sm overflow-hidden border border-border bg-cream-soft transition-colors duration-300 hover:border-wine/30"
          >
            <div className="relative aspect-square bg-cream">
              <Image
                src={c.image}
                alt={c.label}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine-dark/70 via-wine-dark/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-serif text-lg text-cream leading-snug">
                  {c.label}
                </p>
                <p className="text-xs text-cream/75">
                  {count > 0
                    ? `${count} ${count === 1 ? "producto" : "productos"}`
                    : "Próximamente"}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default function CumbreHomePage() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <AnnouncementBar />
      <main className="flex-1">
        <section className="bg-cream-soft py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Eyebrow>LÍNEA CUMBRE HOME</Eyebrow>
            <H1 className="mt-3 text-wine max-w-2xl">
              Equipamiento para tu hogar, tu cocina y tu empresa
            </H1>
            <p className="mt-5 text-ink-soft text-base sm:text-lg max-w-2xl">
              Todo lo que necesitás para equipar un espacio, en un solo
              lugar: hornos, anafes, microondas, heladeras, climatización,
              lavado y TV. Elegí una categoría para ver los productos.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <H2 className="text-wine">Equipamiento para tu hogar</H2>
            <p className="mt-2 text-ink-soft max-w-2xl">
              Cocina, climatización y electrodomésticos para equipar tu casa
              de punta a punta.
            </p>
            <div className="mt-6">
              <CategoryGrid categories={HOME_CATEGORIES} />
            </div>

            <div className="mt-10 text-center">
              <Button
                href="/productos?linea=cumbre-home"
                variant="primary"
                size="lg"
              >
                Ver todo Cumbre Home
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </section>

        <section
          id="empresas-y-oficinas"
          className="py-16 sm:py-20 bg-cream-soft scroll-mt-20"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <H2 className="text-wine">Equipamiento para tu empresa y oficina</H2>
            <p className="mt-2 text-ink-soft max-w-2xl">
              Las categorías que más piden oficinas y locales: climatización
              de espacios de trabajo, pantallas para salas de reunión y
              electrodomésticos para el office. Mismo stock, provisión en
              volumen con asesoramiento técnico.
            </p>
            <div className="mt-6">
              <CategoryGrid categories={BUSINESS_CATEGORIES} />
            </div>

            <div className="mt-10 text-center">
              <Button href="/proyectos#cotizar" variant="secondary" size="lg">
                Cotizá equipamiento para tu empresa
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
