import Image from "next/image";
import Link from "next/link";

// Single static message, full-bleed image, cream text plate.
export function Hero() {
  return (
    <section
      id="top"
      className="relative flex items-end bg-wine-dark overflow-hidden min-h-[560px] h-[86vh] max-h-[820px]"
    >
      <Image
        src="/hero-smart-living-v1.webp"
        alt="Living inteligente con panel de control integrado"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="relative w-full mx-auto max-w-6xl px-5 sm:px-8 pb-5 sm:pb-12">
        <div className="bg-cream max-w-[600px] p-7 sm:p-12 flex flex-col gap-5">
          <p className="text-[0.8125rem] tracking-[0.16em] uppercase text-ink-soft font-semibold">
            Domótica para tu hogar
          </p>
          <h1 className="font-serif text-[2.4rem] sm:text-5xl lg:text-[4rem] leading-[1.03] tracking-[-0.015em] text-wine text-balance">
            Convertimos tu casa en un hogar inteligente
          </h1>
          <p className="text-[1.0625rem] leading-relaxed text-ink-soft text-pretty">
            Automatización, climatización y equipamiento tecnológico integrado
            — proyectamos e instalamos de punta a punta.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="#contacto"
              className="bg-wine text-cream-soft hover:bg-wine-dark transition-colors text-[0.9375rem] font-semibold px-6 py-4 whitespace-nowrap"
            >
              Empezá tu proyecto
            </Link>
            <Link
              href="#proyectos"
              className="border border-wine text-wine hover:bg-wine hover:text-cream-soft transition-colors text-[0.9375rem] font-semibold px-6 py-[0.9375rem] whitespace-nowrap"
            >
              Ver antes y después
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-4 border-t border-border text-[0.8125rem] font-medium text-ink-soft">
            <span>Garantía oficial</span>
            <span className="text-brass">·</span>
            <span>Postventa propia</span>
            <span className="text-brass">·</span>
            <span>Hogares, obras y empresas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
