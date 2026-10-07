import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "../components/Header";
import { AnnouncementBar } from "../components/AnnouncementBar";
import { Footer } from "../components/CTAFooter";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { Eyebrow, H1 } from "../components/ui/Typography";

export const metadata: Metadata = {
  title: "Galería | Cumbre",
  description:
    "Instalaciones, equipamiento y proyectos de domótica realizados por Cumbre.",
};

const PHOTOS = [
  { src: "/hero-smart-living-v1.webp", alt: "Living inteligente con panel de control integrado", ratio: "aspect-[3/4]" },
  { src: "/hero-domotica-panel-v1.webp", alt: "Panel de control domótico en la pared", ratio: "aspect-square" },
  { src: "/domotica-cerradura-v1.webp", alt: "Cerradura inteligente instalada", ratio: "aspect-[4/5]" },
  { src: "/hero-door-v1.webp", alt: "Entrada de proyecto equipado por Cumbre", ratio: "aspect-[4/3]" },
  { src: "/domotica-videoportero-v1.webp", alt: "Videoportero inteligente", ratio: "aspect-square" },
  { src: "/hero-domotica-kitchen-v1.webp", alt: "Cocina con control domótico integrado", ratio: "aspect-[4/5]" },
  { src: "/domotica-iluminacion-ambiente-v1.webp", alt: "Escena de iluminación inteligente", ratio: "aspect-[3/4]" },
  { src: "/hero-living-v1.webp", alt: "Living equipado con tecnología Cumbre", ratio: "aspect-square" },
  { src: "/domotica-camara-v1.webp", alt: "Cámara de seguridad exterior", ratio: "aspect-[4/3]" },
  { src: "/hero-domotica-fence-v1.webp", alt: "Cerco perimetral inteligente", ratio: "aspect-[4/5]" },
  { src: "/domotica-termostato-v1.webp", alt: "Termostato inteligente", ratio: "aspect-square" },
  { src: "/hero-smart-office-v1.webp", alt: "Oficina moderna equipada", ratio: "aspect-[3/4]" },
  { src: "/hero-kitchen-v3.webp", alt: "Cocina premium con heladera conectada", ratio: "aspect-[4/3]" },
  { src: "/domotica-hub-v1.webp", alt: "Central de domótica", ratio: "aspect-square" },
  { src: "/hero-domotica-office-v1.webp", alt: "Oficina con integración de domótica", ratio: "aspect-[4/5]" },
  { src: "/hero-office-v1.webp", alt: "Sala de trabajo con pantalla integrada", ratio: "aspect-[4/3]" },
];

export default function GaleriaPage() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <AnnouncementBar />
      <main className="flex-1">
        <section className="bg-cream-soft py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Eyebrow>FOTOS</Eyebrow>
            <H1 className="mt-3 text-wine max-w-2xl">Galería</H1>
            <p className="mt-5 text-ink-soft text-base sm:text-lg max-w-2xl">
              Instalaciones, equipamiento y proyectos de domótica que
              realizamos para hogares, obras y empresas.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-5 [&>*]:mb-5">
              {PHOTOS.map((photo) => (
                <div
                  key={photo.src}
                  className={`relative ${photo.ratio} overflow-hidden rounded-sm break-inside-avoid border border-border`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
