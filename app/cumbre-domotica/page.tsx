import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "../components/Header";
import { AnnouncementBar } from "../components/AnnouncementBar";
import { Footer } from "../components/CTAFooter";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { Button } from "../components/ui/Button";
import { Eyebrow, H1, H3 } from "../components/ui/Typography";
import { DOMOTICA_EQUIPMENT } from "../lib/domotica-equipment";

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
            <p className="mt-5 text-ink-soft text-base sm:text-lg max-w-2xl">
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

            <div className="mt-16">
              <H3 className="text-wine">Equipamiento que instalamos</H3>
              <p className="mt-2 text-ink-soft max-w-2xl">
                Hacé click en cada producto para ver qué es y cómo lo
                instalamos.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {DOMOTICA_EQUIPMENT.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/cumbre-domotica/${item.slug}`}
                    className="group rounded-md overflow-hidden border border-wine/10 bg-cream-soft transition-all duration-300 hover:-translate-y-1 hover:border-wine/25 hover:shadow-[0_12px_28px_-12px_rgba(78,22,32,0.28)]"
                  >
                    <div
                      className={`grid gap-0.5 ${item.images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}
                    >
                      {item.images.map((img) => (
                        <div key={img.src} className="relative aspect-[4/3]">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="p-5">
                      <p className="font-serif text-lg text-wine">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                        {item.description}
                      </p>
                      <span className="mt-3 inline-block text-sm font-medium text-wine">
                        Ver detalle e instalación →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-md border border-dashed border-wine/25 bg-cream-soft px-6 py-10 text-center">
              <H3 as="p" className="text-wine">
                Catálogo de productos en camino
              </H3>
              <p className="mt-3 text-ink-soft max-w-lg mx-auto">
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
