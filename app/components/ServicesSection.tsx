"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { Eyebrow } from "./ui/Typography";

const SECONDARY = [
  {
    line: "Cumbre Constructoras",
    title: "Constructoras y Obra",
    description:
      "Trabajamos junto a constructoras y desarrolladores para equipar edificios y viviendas con tecnología desde la etapa de obra.",
    image: "/hero-domotica-fence-v1.webp",
    alt: "Cerco perimetral inteligente",
    href: "/cumbre-constructoras",
  },
  {
    line: "Cumbre Home",
    title: "Equipamiento para hogar y empresa",
    description:
      "Hornos, anafes, heladeras, climatización, lavado y TV de Samsung, TCL y Longvie, con garantía oficial y provisión en volumen para oficinas.",
    image: "/hero-smart-office-v1.webp",
    alt: "Oficina moderna equipada",
    href: "/cumbre-home",
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-[72px] sm:py-28 bg-cream-soft">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col gap-14">
        <SectionHeading
          eyebrow="Nuestro servicio"
          title="Equipamiento tecnológico para cada proyecto"
          description="Diseñamos, asesoramos y equipamos con tecnología — para hogares que se vuelven inteligentes, obras que necesitan integración desde el día uno, y empresas que buscan un espacio de trabajo a la altura."
        />

        <motion.div
          id="domotica"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center"
        >
          <Link href="/cumbre-domotica" className="group relative block aspect-[16/11] overflow-hidden">
            <Image
              src="/hero-domotica-panel-v1.webp"
              alt="Panel de control domótico integrado a la pared"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
            />
          </Link>
          <div className="flex flex-col gap-4">
            <Eyebrow>Cumbre Domótica</Eyebrow>
            <h3 className="font-serif text-[1.75rem] sm:text-4xl leading-[1.15] text-wine">
              Domótica para tu Hogar
            </h3>
            <p className="text-base leading-relaxed text-ink-soft">
              Automatización de luces, climatización, seguridad y
              entretenimiento — proyectamos e instalamos sistemas inteligentes
              integrados a tu hogar, controlados desde un panel en la pared o la
              app.
            </p>
            <Link
              href="#contacto"
              className="self-start text-[0.9375rem] font-semibold text-wine border-b border-wine pb-0.5"
            >
              Cotizá tu proyecto de domótica →
            </Link>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-7 lg:gap-12 pt-2 border-t border-border">
          {SECONDARY.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={s.href} className="group flex flex-col gap-3 pt-8 text-ink">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <Eyebrow className="pt-2">{s.line}</Eyebrow>
                <span className="font-serif text-2xl text-ink">{s.title}</span>
                <span className="text-[0.9375rem] leading-relaxed text-ink-soft">
                  {s.description}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
