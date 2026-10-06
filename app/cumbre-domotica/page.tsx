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

// Equipamiento de domótica que instalamos. Sin precio ni stock todavía —
// se suman como productos reales a products.ts cuando estén cargados.
const EQUIPMENT = [
  {
    images: [
      {
        src: "/domotica-cerradura-v1.webp",
        alt: "Cerradura inteligente con teclado táctil y sensor de huella en puerta de entrada",
      },
    ],
    title: "Cerradura inteligente",
    description:
      "Acceso sin llave con teclado táctil, sensor de huella y apertura remota desde la app. Asigná códigos temporales para visitas o personal de limpieza, y recibí notificaciones cada vez que se abre la puerta.",
  },
  {
    images: [
      {
        src: "/domotica-videoportero-v1.webp",
        alt: "Videoportero inteligente con cámara en la entrada y pantalla de video en el living",
      },
    ],
    title: "Videoportero inteligente",
    description:
      "Cámara con visión nocturna en la entrada, con video en vivo desde el panel de la casa o tu celular. Atendé, hablá y abrile la puerta a quien toque timbre estés donde estés.",
  },
  {
    images: [
      {
        src: "/domotica-camara-v1.webp",
        alt: "Cámara de seguridad inteligente para exterior instalada bajo el alero de una casa",
      },
    ],
    title: "Cámara de seguridad exterior",
    description:
      "Cámara resistente a la intemperie con detección de movimiento y grabación en la nube. Mirá el patio, el acceso o el perímetro de tu casa en vivo desde la app, de día o de noche.",
  },
  {
    images: [
      {
        src: "/domotica-iluminacion-switch-v1.webp",
        alt: "Panel de control de iluminación inteligente en la pared",
      },
      {
        src: "/domotica-iluminacion-ambiente-v1.webp",
        alt: "Living y cocina con iluminación inteligente integrada, luz cálida en toda la escena",
      },
    ],
    title: "Iluminación inteligente integral",
    description:
      "Controlá la intensidad y el color de cada ambiente desde un panel en la pared o la app, con escenas predefinidas para cada momento del día. Integrá luminarias de techo, tiras LED y lámparas en un solo sistema.",
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

            <div className="mt-16">
              <H3 className="text-wine">Equipamiento que instalamos</H3>
              <p className="mt-2 text-ink/70 max-w-2xl">
                Algunos de los dispositivos que sumamos a cada proyecto de
                domótica.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {EQUIPMENT.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl overflow-hidden border border-wine/10 bg-cream-soft"
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
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="p-5">
                      <p className="font-serif text-lg text-wine">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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
