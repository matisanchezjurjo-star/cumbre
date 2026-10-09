import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/CTAFooter";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { ConstructorasForm } from "../components/ConstructorasForm";

export const metadata: Metadata = {
  title: "Cumbre Constructoras — Tecnología prevista desde el plano | Cumbre",
  description:
    "Para arquitectos, constructoras y desarrolladores: pre-instalación, cercos perimetrales inteligentes y equipamiento por unidad, desde el plano eléctrico hasta la entrega llave en mano.",
};

const AUDIENCES = [
  {
    title: "Estudios de arquitectura",
    desc: "Asesoramiento técnico junto al equipo de arquitectura para que la tecnología respete el diseño: dónde van las teclas, los paneles y los equipos, y qué necesita cada ambiente.",
  },
  {
    title: "Constructoras",
    desc: "Cableado y pre-instalación coordinados con el cronograma de obra, y montaje de equipos en terminaciones, sin frenar a los demás gremios.",
  },
  {
    title: "Desarrolladores",
    desc: "Un paquete de tecnología repetible por unidad, equipamiento en volumen y cercos perimetrales para el emprendimiento, con entrega llave en mano.",
  },
];

const STAGES = [
  { title: "Proyecto", when: "Anteproyecto y plano eléctrico", desc: "Definimos con el estudio qué tecnología lleva cada unidad y los espacios comunes, y lo volcamos al plano: bocas, cajas, canalizaciones y ubicación de equipos." },
  { title: "Obra gruesa", when: "Instalaciones", desc: "Cableado y pre-instalación coordinados con el electricista y el cronograma de obra, para que todo quede previsto antes de cerrar paredes." },
  { title: "Terminaciones", when: "Montaje", desc: "Instalamos cerraduras, teclas, paneles, cámaras y cercos perimetrales eléctricos e inteligentes, sin interferir con los demás gremios." },
  { title: "Entrega", when: "Por unidad", desc: "Programamos y probamos cada unidad, y la entregamos llave en mano con una guía de uso para el comprador." },
  { title: "Postventa", when: "Después de la entrega", desc: "Servicio postventa online todos los días de la semana, o presencial de lunes a viernes. Todos los productos tienen garantía oficial." },
];

const DELIVERABLES = [
  { title: "Memoria técnica por unidad", desc: "Qué equipos lleva cada tipología y dónde va cada uno, para el estudio y la obra." },
  { title: "Cotización en volumen", desc: "Equipamiento para todo el desarrollo con un solo proveedor y un solo interlocutor." },
  { title: "Cableado y pre-instalación", desc: "Coordinados con el cronograma de obra." },
  { title: "Cercos perimetrales eléctricos e inteligentes", desc: "Para el perímetro del emprendimiento o de cada lote." },
  { title: "Entrega llave en mano por unidad", desc: "Equipos instalados, programados y probados." },
  { title: "Guía de uso para el comprador", desc: "Para que quien recibe la unidad sepa usar todo desde el primer día." },
];

const n = (i: number) => String(i + 1).padStart(2, "0");

export default function CumbreConstructorasPage() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-1">
        <section className="py-12 sm:py-[88px] bg-cream-soft border-b border-border">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-2 gap-10 lg:gap-[72px] items-center">
            <div className="flex flex-col gap-[22px]">
              <span className="text-[0.8125rem] tracking-[0.16em] uppercase text-brass font-semibold">Para arquitectos, constructoras y desarrolladores</span>
              <h1 className="font-serif text-[2.5rem] sm:text-5xl lg:text-[4.125rem] leading-[1.03] tracking-[-0.015em] text-ink text-balance">
                La tecnología de cada unidad, <span className="text-wine italic">prevista desde el plano.</span>
              </h1>
              <p className="text-lg leading-relaxed text-ink-soft text-pretty">
                Nos integramos al equipo de obra desde el plano eléctrico hasta la entrega, para que cada unidad salga con la tecnología ya prevista — no como un agregado de último momento.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link href="#contacto" className="bg-wine text-cream-soft hover:bg-wine-dark transition-colors text-[0.9375rem] font-semibold px-6 py-4 whitespace-nowrap">Contanos tu proyecto</Link>
                <Link href="#etapas" className="border border-wine text-wine hover:bg-wine hover:text-cream-soft transition-colors text-[0.9375rem] font-semibold px-6 py-[15px] whitespace-nowrap">Cómo trabajamos</Link>
              </div>
            </div>
            <div className="grid grid-cols-[3fr_2fr] gap-3 aspect-[5/4]">
              <div className="relative overflow-hidden bg-stone">
                <Image src="/hero-door-v1.webp" alt="Entrada de proyecto equipado por Cumbre" fill priority sizes="(min-width: 1024px) 30vw, 60vw" className="object-cover" />
              </div>
              <div className="grid grid-rows-2 gap-3">
                <div className="relative overflow-hidden bg-stone">
                  <Image src="/hero-domotica-fence-v1.webp" alt="Cerco perimetral inteligente" fill sizes="(min-width: 1024px) 20vw, 40vw" className="object-cover" />
                </div>
                <div className="relative overflow-hidden bg-stone">
                  <Image src="/domotica-hub-v1.webp" alt="Central de domótica" fill sizes="(min-width: 1024px) 20vw, 40vw" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-[72px] sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col gap-12">
            <div className="flex flex-col gap-4 max-w-[640px]">
              <span className="text-[0.8125rem] tracking-[0.16em] uppercase text-brass font-semibold">Con quién trabajamos</span>
              <h2 className="font-serif text-[2rem] sm:text-4xl lg:text-[2.875rem] leading-[1.1] text-ink text-balance">Un solo interlocutor técnico para todo el equipo</h2>
            </div>
            <div className="grid md:grid-cols-3 border-t border-l border-border">
              {AUDIENCES.map((a) => (
                <div key={a.title} className="px-7 pt-8 pb-9 border-r border-b border-border flex flex-col gap-3">
                  <span className="font-serif text-[1.625rem] text-wine">{a.title}</span>
                  <span className="text-[0.9375rem] leading-relaxed text-ink-soft">{a.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="etapas" className="py-[72px] sm:py-28 bg-wine-dark text-cream scroll-mt-[72px]">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col gap-12">
            <div className="flex flex-col gap-4 max-w-[680px]">
              <span className="text-[0.8125rem] tracking-[0.16em] uppercase text-brass-soft font-semibold">En qué etapa entramos</span>
              <h2 className="font-serif text-[2rem] sm:text-4xl lg:text-[2.875rem] leading-[1.1] text-cream text-balance">Cuanto antes, mejor. Pero podemos sumarnos en cualquier punto.</h2>
            </div>
            <div className="border-t border-wine">
              {STAGES.map((s, i) => (
                <div key={s.title} className="grid md:grid-cols-2 gap-x-10 gap-y-3 py-7 border-b border-wine">
                  <div className="flex gap-5 items-baseline">
                    <span className="font-serif text-4xl leading-none text-brass-soft">{n(i)}</span>
                    <div className="flex flex-col gap-1">
                      <span className="font-serif text-[1.625rem] text-cream">{s.title}</span>
                      <span className="text-[0.8125rem] tracking-[0.14em] uppercase text-brass-soft font-semibold">{s.when}</span>
                    </div>
                  </div>
                  <span className="text-base leading-relaxed text-border">{s.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-[72px] sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <div className="flex flex-col gap-4 lg:sticky lg:top-[104px]">
              <span className="text-[0.8125rem] tracking-[0.16em] uppercase text-brass font-semibold">Qué entregamos</span>
              <h2 className="font-serif text-[2rem] sm:text-4xl lg:text-[2.875rem] leading-[1.1] text-ink text-balance">Cada unidad, lista para usar el día de la entrega</h2>
              <p className="text-[1.0625rem] leading-relaxed text-ink-soft">El comprador recibe una unidad con la tecnología funcionando y sabe cómo usarla. La constructora entrega sin pendientes técnicos.</p>
            </div>
            <div className="border-t border-border">
              {DELIVERABLES.map((d) => (
                <div key={d.title} className="grid grid-cols-[28px_minmax(0,1fr)] gap-4 py-[22px] border-b border-border">
                  <span className="h-[22px] w-[22px] bg-wine text-cream flex items-center justify-center text-[13px] font-bold mt-[3px]">✓</span>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-lg font-semibold text-ink">{d.title}</span>
                    <span className="text-[0.9375rem] leading-relaxed text-ink-soft">{d.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ConstructorasForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
