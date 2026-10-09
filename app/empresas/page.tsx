import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/CTAFooter";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { EmpresasForm } from "../components/EmpresasForm";

export const metadata: Metadata = {
  title: "Cumbre Empresas — Oficinas inteligentes | Cumbre",
  description:
    "Salas de reunión que funcionan con un toque, control de acceso, seguridad y climatización para oficinas y locales. Un solo interlocutor para todo el equipamiento.",
};

const SOLUTIONS = [
  {
    n: "02",
    tag: "Control de acceso",
    title: "Nadie pierde una tarjeta más",
    desc: "Ingreso con código, huella o celular, permisos por horario y registro de quién entró y cuándo. Dar o quitar un acceso lleva segundos.",
    image: "/empresas-control-acceso-v1.webp",
    alt: "Cerradura inteligente con teclado en puerta de sala de reunión",
  },
  {
    n: "03",
    tag: "Seguridad",
    title: "Todo a la vista, desde el celular",
    desc: "Cámaras y sensores con aviso al celular ante eventos fuera de horario, integrados con el control de acceso.",
    image: "/empresas-camara-seguridad-v1.webp",
    alt: "Cámara de seguridad Hikvision en oficina",
  },
  {
    n: "04",
    tag: "Clima y equipamiento",
    title: "El espacio de trabajo, completo",
    desc: "Climatización de espacios de trabajo y electrodomésticos para el office, con provisión en volumen.",
    image: "/hero-office-v1.webp",
    alt: "Espacio de trabajo equipado",
  },
];

const STEPS = [
  { title: "Relevamiento", desc: "Visitamos el espacio o lo revisamos con planos y fotos, y entendemos cómo trabaja tu equipo." },
  { title: "Propuesta", desc: "Te mandamos qué equipamiento conviene, por qué y en qué etapas, con una cotización clara." },
  { title: "Instalación", desc: "Instalamos y configuramos todo, coordinando horarios para no frenar el trabajo diario." },
  { title: "Soporte", desc: "Postventa online todos los días de la semana, o presencial de lunes a viernes." },
];

export default function EmpresasPage() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-1">
        <section className="relative flex items-end bg-ink overflow-hidden min-h-[540px] h-[80vh] max-h-[760px]">
          <Image src="/empresas-sala-reunion-pantalla-v1.webp" alt="Sala de reunión equipada con pantalla y panel de control" fill priority sizes="100vw" className="object-cover" />
          <div className="relative w-full mx-auto max-w-6xl px-5 sm:px-8 pb-5 sm:pb-12">
            <div className="bg-cream max-w-[620px] p-7 sm:p-12 flex flex-col gap-5">
              <span className="text-[0.8125rem] tracking-[0.16em] uppercase text-ink-soft font-semibold">Cumbre Empresas</span>
              <h1 className="font-serif text-[2.375rem] sm:text-5xl lg:text-[3.875rem] leading-[1.03] tracking-[-0.015em] text-ink text-balance">
                Tu oficina también debería ser <span className="text-wine italic">inteligente.</span>
              </h1>
              <p className="text-[1.0625rem] leading-relaxed text-ink-soft text-pretty">
                Salas de reunión que funcionan con un toque, control de acceso, seguridad y climatización. Con un solo interlocutor para todo el equipamiento.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link href="#contacto" className="bg-wine text-cream-soft hover:bg-wine-dark transition-colors text-[0.9375rem] font-semibold px-6 py-4 whitespace-nowrap">Pedí un relevamiento</Link>
                <Link href="#soluciones" className="border border-wine text-wine hover:bg-wine hover:text-cream-soft transition-colors text-[0.9375rem] font-semibold px-6 py-[15px] whitespace-nowrap">Ver soluciones</Link>
              </div>
            </div>
          </div>
        </section>

        <section id="soluciones" className="py-[72px] sm:py-28 scroll-mt-[72px]">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col gap-14">
            <div className="flex flex-col gap-4 max-w-[680px]">
              <span className="text-[0.8125rem] tracking-[0.16em] uppercase text-brass font-semibold">Soluciones</span>
              <h2 className="font-serif text-[2rem] sm:text-4xl lg:text-[2.875rem] leading-[1.1] text-ink text-balance">Si tu sala de reuniones necesita cinco controles, algo está mal</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
              <div className="relative aspect-[16/11] overflow-hidden bg-stone">
                <Image src="/empresas-sala-reunion-panel-v1.webp" alt="Panel de reserva de salas instalado en la pared" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[0.8125rem] tracking-[0.16em] uppercase text-brass font-semibold">01 · Salas de reunión</span>
                <h3 className="font-serif text-[1.75rem] sm:text-4xl leading-[1.15] text-wine">La reunión empieza a horario</h3>
                <p className="text-base leading-relaxed text-ink-soft">Pantalla, videollamada, audio y clima integrados. Un toque en el panel y la sala queda lista, sin cables sueltos ni buscar el control remoto.</p>
                <ul className="flex flex-col gap-2 text-[0.9375rem] text-ink">
                  {["Pantallas y sistema de videollamada", "Panel de control con escenas por tipo de reunión", "Climatización e iluminación de la sala"].map((li) => (
                    <li key={li} className="flex gap-2.5"><span className="text-brass">—</span>{li}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-7 lg:gap-12 pt-2 border-t border-border">
              {SOLUTIONS.map((s) => (
                <div key={s.tag} className="flex flex-col gap-3 pt-8">
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone">
                    <Image src={s.image} alt={s.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <span className="text-[0.8125rem] tracking-[0.16em] uppercase text-brass font-semibold pt-2">{s.n} · {s.tag}</span>
                  <span className="font-serif text-2xl text-ink">{s.title}</span>
                  <span className="text-[0.9375rem] leading-relaxed text-ink-soft">{s.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-[72px] sm:py-28 bg-wine-dark text-cream">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col gap-12">
            <div className="flex flex-col gap-4 max-w-[640px]">
              <span className="text-[0.8125rem] tracking-[0.16em] uppercase text-brass-soft font-semibold">Cómo trabajamos</span>
              <h2 className="font-serif text-[2rem] sm:text-4xl lg:text-[2.875rem] leading-[1.1] text-cream">Un solo interlocutor, de punta a punta</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 border-t border-wine">
              {STEPS.map((s, i) => (
                <div key={s.title} className="flex flex-col gap-3 pt-8">
                  <span className="font-serif text-[2.75rem] leading-none text-brass-soft">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-serif text-2xl text-cream">{s.title}</span>
                  <span className="text-[0.9375rem] leading-relaxed text-border">{s.desc}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-2 text-[0.9375rem] font-medium text-cream">
              <span>Provisión en volumen</span>
              <span className="text-brass-soft">·</span>
              <span>Condiciones especiales para pedidos recurrentes</span>
              <span className="text-brass-soft">·</span>
              <span>Garantía oficial</span>
            </div>
          </div>
        </section>

        <EmpresasForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
