import type { Metadata } from "next";
import Image from "next/image";
import {
  Home,
  Building2,
  Briefcase,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { Header } from "../components/Header";
import { AnnouncementBar } from "../components/AnnouncementBar";
import { Footer } from "../components/CTAFooter";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { QuoteForm } from "../components/QuoteForm";

export const metadata: Metadata = {
  title: "Proyectos y Equipamiento Tecnológico | Cumbre",
  description:
    "Casas inteligentes, equipamiento para constructoras y empresas. Diseñamos, asesoramos e instalamos tecnología para tu proyecto.",
};

const SERVICES = [
  {
    icon: Home,
    title: "Domótica para tu Hogar",
    image: "/hero-smart-living-v1.webp",
    description:
      "Automatizamos luces, climatización, cortinas, seguridad y audio/video en un solo sistema que controlás desde tu celular o un panel integrado en la pared.",
    points: [
      "Iluminación y climatización automatizada",
      "Control centralizado por app o panel táctil",
      "Integración con cámaras y seguridad",
      "Audio y video multiambiente",
    ],
  },
  {
    icon: Building2,
    title: "Constructoras y Obra",
    image: "/hero-door-v1.webp",
    description:
      "Nos integramos al equipo de obra desde el plano eléctrico hasta la entrega, para que cada unidad salga con la tecnología ya prevista — no como un agregado de último momento.",
    points: [
      "Cableado y pre-instalación en obra",
      "Cercos perimetrales eléctricos e inteligentes",
      "Equipamiento en volumen para desarrollos",
      "Asesoramiento técnico junto al equipo de arquitectura",
      "Entrega llave en mano por unidad",
    ],
  },
  {
    icon: Briefcase,
    title: "Empresas y Oficinas",
    image: "/hero-smart-office-v1.webp",
    description:
      "Equipamos oficinas, locales y espacios de trabajo completos: desde salas de reunión con AV integrado hasta climatización y electrodomésticos para el office.",
    points: [
      "Salas de reunión con pantallas y videollamada",
      "Climatización de espacios de trabajo",
      "Provisión en volumen con un solo interlocutor",
      "Condiciones especiales para pedidos recurrentes",
    ],
  },
];

export default function ProyectosPage() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <AnnouncementBar />
      <main className="flex-1">
        <section className="bg-cream-soft py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 grid sm:grid-cols-2 gap-10 sm:gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-wine/10 text-wine px-4 py-2 text-xs font-medium tracking-wide">
                <Building2 size={14} />
                EQUIPAMIENTO TECNOLÓGICO PARA CADA PROYECTO
              </span>
              <h1 className="mt-5 font-serif text-4xl sm:text-5xl leading-tight">
                <span className="text-wine">Equipamiento tecnológico</span>
                <br />
                <span className="text-ink">para cada tipo de proyecto</span>
              </h1>
              <p className="mt-5 text-ink/70 text-base sm:text-lg max-w-lg">
                Casas inteligentes, obras y empresas. Un solo interlocutor
                para todo el equipamiento tecnológico, de punta a punta.
              </p>
              <Button href="#cotizar" variant="primary" size="lg" className="mt-7">
                Cotizá tu proyecto
                <ArrowRight size={16} />
              </Button>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="/hero-door-v1.webp"
                  alt="Entrada de proyecto equipado por Cumbre"
                  fill
                  priority
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-6 sm:left-8 flex items-center gap-3 rounded-2xl bg-white shadow-lg px-5 py-4 max-w-[260px]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-wine text-cream">
                  <ShieldCheck size={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">
                    Garantía oficial
                  </p>
                  <p className="text-xs text-ink/70">en todos los productos</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col gap-16">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              const reverse = i % 2 === 1;
              return (
                <div
                  key={s.title}
                  className={`grid sm:grid-cols-2 gap-8 sm:gap-12 items-center ${
                    reverse ? "sm:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-wine/10 text-wine">
                      <Icon size={24} />
                    </span>
                    <h2 className="mt-4 font-serif text-2xl sm:text-3xl text-wine">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-ink/70 leading-relaxed">
                      {s.description}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2.5 text-sm text-ink/80"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-wine"
                          />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="cotizar" className="py-16 sm:py-20 bg-cream-soft scroll-mt-20">
          <div className="mx-auto max-w-2xl px-5 sm:px-8">
            <QuoteForm />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
