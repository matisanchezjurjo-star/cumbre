"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/Button";
import { SectionHeading } from "./ui/SectionHeading";
import { H3 } from "./ui/Typography";

type Service = {
  title: string;
  description: string;
  image: string;
  href: string;
  caption?: string;
};

const FEATURED: Service = {
  title: "Domótica para tu Hogar",
  description:
    "Automatización de luces, climatización, seguridad y entretenimiento — proyectamos e instalamos sistemas inteligentes integrados a tu hogar, controlados desde un panel en la pared o la app.",
  image: "/hero-domotica-panel-v1.webp",
  href: "/cumbre-domotica",
};

const SECONDARY: Service[] = [
  {
    title: "Constructoras y Obra",
    description:
      "Trabajamos junto a constructoras y desarrolladores para equipar edificios y viviendas con tecnología desde la etapa de obra.",
    image: "/hero-domotica-fence-v1.webp",
    href: "/cumbre-constructoras",
    caption: "Cercos perimetrales inteligentes",
  },
  {
    title: "Empresas y Oficinas",
    description:
      "Equipamiento tecnológico en volumen para oficinas, locales y espacios de trabajo, con asesoramiento técnico de principio a fin.",
    image: "/hero-domotica-office-v1.webp",
    href: "/cumbre-home#empresas-y-oficinas",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 sm:py-28 bg-cream-soft">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="NUESTRO SERVICIO"
          title="Equipamiento tecnológico para cada proyecto"
          description="Diseñamos, asesoramos y equipamos con tecnología — para hogares que se vuelven inteligentes, obras que necesitan integración desde el día uno, y empresas que buscan un espacio de trabajo a la altura."
        />

        {/* Featured: large editorial split, image carries the weight */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 grid lg:grid-cols-5 gap-8 lg:gap-12 items-center"
        >
          <Link
            href={FEATURED.href}
            className="group relative lg:col-span-3 block aspect-[4/3] sm:aspect-[16/10] overflow-hidden"
          >
            <Image
              src={FEATURED.image}
              alt={FEATURED.title}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
            />
          </Link>
          <div className="lg:col-span-2">
            <H3 as="h3" className="text-wine text-2xl sm:text-3xl">
              {FEATURED.title}
            </H3>
            <p className="mt-4 text-ink-soft leading-relaxed">
              {FEATURED.description}
            </p>
            <Link
              href={FEATURED.href}
              className="group mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-wine border-b border-wine/30 pb-0.5 hover:border-wine transition-colors"
            >
              Explorar domótica
              <ArrowUpRight
                size={15}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </div>
        </motion.div>

        {/* Secondary: two smaller, even pair — deliberately smaller than the
            featured block above, not a third equal grid column. */}
        <div className="mt-16 grid sm:grid-cols-2 gap-8 lg:gap-12">
          {SECONDARY.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={s.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                {s.caption && (
                  <p className="mt-3 text-[0.7rem] tracking-[0.14em] text-brass font-medium">
                    {s.caption.toUpperCase()}
                  </p>
                )}
                <H3 as="p" className={`${s.caption ? "mt-1.5" : "mt-4"} text-wine text-xl`}>
                  {s.title}
                </H3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {s.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <Button href="/proyectos" variant="primary" size="lg">
            Conocé el servicio y cotizá tu proyecto
          </Button>
        </div>
      </div>
    </section>
  );
}
