import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Header } from "../components/Header";
import { AnnouncementBar } from "../components/AnnouncementBar";
import { Footer } from "../components/CTAFooter";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { Button } from "../components/ui/Button";
import { Eyebrow, H1, H3 } from "../components/ui/Typography";

export const metadata: Metadata = {
  title: "Cumbre Constructoras — Equipamiento para Obra | Cumbre",
  description:
    "Cercos perimetrales eléctricos e inteligentes y equipamiento técnico para constructoras y desarrollos, desde la etapa de obra hasta la entrega.",
};

const GALLERY = [
  {
    src: "/hero-domotica-fence-v1.webp",
    alt: "Panel de seguridad perimetral junto a cerco eléctrico inteligente",
  },
  {
    src: "/hero-door-v1.webp",
    alt: "Entrada de proyecto equipado por Cumbre",
  },
];

export default function CumbreConstructorasPage() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <AnnouncementBar />
      <main className="flex-1">
        <section className="bg-cream-soft py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Eyebrow>LÍNEA CUMBRE CONSTRUCTORAS</Eyebrow>
            <H1 className="mt-3 text-wine max-w-2xl">
              Equipamiento técnico para constructoras y desarrollos
            </H1>
            <p className="mt-5 text-ink-soft text-base sm:text-lg max-w-2xl">
              Trabajamos junto a constructoras y desarrolladores desde el
              plano eléctrico hasta la entrega: cercos perimetrales
              eléctricos e inteligentes, cableado y pre-instalación, y
              equipamiento en volumen para cada unidad.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid sm:grid-cols-2 gap-5">
              {GALLERY.map((g) => (
                <div
                  key={g.src}
                  className="relative aspect-[4/3] rounded-md overflow-hidden"
                >
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-sm border border-dashed border-wine/25 bg-cream-soft px-6 py-10 text-center">
              <H3 as="p" className="text-wine">
                Catálogo de productos en camino
              </H3>
              <p className="mt-3 text-ink-soft max-w-lg mx-auto">
                Ya estamos cargando el equipamiento de cercado y obra para
                que lo compres directamente acá. Mientras tanto, contanos tu
                desarrollo y te armamos una cotización a medida.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Button href="/proyectos#cotizar" variant="primary" size="lg">
                  Cotizá tu proyecto
                  <ArrowRight size={16} />
                </Button>
                <Button href="/proyectos" variant="secondary" size="lg">
                  Ver el servicio de Proyectos
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
