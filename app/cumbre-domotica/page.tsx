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
  title: "Cumbre Domótica — Automatización para tu Hogar y Empresa | Cumbre",
  description:
    "Automatización e integración inteligente: luces, climatización, seguridad y control centralizado desde un panel o app. Equipamos casas, obras y oficinas.",
};

const GALLERY = [
  {
    src: "/hero-domotica-panel-v1.webp",
    alt: "Panel de control domótico integrado a la pared",
  },
  {
    src: "/hero-domotica-living-v1.webp",
    alt: "Control de domótica desde tablet en el living",
  },
  {
    src: "/hero-domotica-oven-v1.webp",
    alt: "Panel táctil de horno inteligente con recetas integradas",
  },
  {
    src: "/hero-domotica-office-v1.webp",
    alt: "Sala de reunión equipada con panel de control integrado",
  },
];

export default function CumbreDomoticaPage() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <AnnouncementBar />
      <main className="flex-1">
        <section className="bg-cream-soft py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Eyebrow>LÍNEA CUMBRE DOMÓTICA</Eyebrow>
            <H1 className="mt-3 text-wine max-w-2xl">
              Automatización e integración inteligente
            </H1>
            <p className="mt-5 text-ink/70 text-base sm:text-lg max-w-2xl">
              Luces, climatización, seguridad y audio/video controlados
              desde un solo panel o app — proyectamos e instalamos sistemas
              de domótica para casas, obras y oficinas de punta a punta.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid sm:grid-cols-2 gap-5">
              {GALLERY.map((g) => (
                <div
                  key={g.src}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden"
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

            <div className="mt-12 rounded-2xl border border-dashed border-wine/25 bg-cream-soft px-6 py-10 text-center">
              <H3 as="p" className="text-wine">
                Catálogo de productos en camino
              </H3>
              <p className="mt-3 text-ink/70 max-w-lg mx-auto">
                Ya estamos cargando los productos de domótica para que los
                compres directamente acá. Mientras tanto, contanos tu
                proyecto y te asesoramos por WhatsApp o con una cotización.
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
