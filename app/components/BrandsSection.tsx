"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BRANDS } from "../lib/constants";
import { Button } from "./ui/Button";

const CATEGORY_CARDS = [
  {
    label: "Climatización",
    line: "electrodomesticos",
    category: "Aire Acondicionado y Climatización",
    image: "/products/ac1.png",
    description:
      "Equipos inverter para todo tipo de ambientes, con bajo consumo y alto rendimiento.",
  },
  {
    label: "Hornos y Anafes",
    line: "cumbre-home",
    category: "Hornos y Anafes",
    image: "/products/horno-dual.png",
    description:
      "Hornos y anafes integrables, con diseño sofisticado y eficiencia energética.",
  },
  {
    label: "Heladeras y Freezers",
    line: "electrodomesticos",
    category: "Heladeras y Freezers",
    image: "/products/heladera2.png",
    description:
      "Tecnología inverter de última generación para conservar alimentos por más tiempo.",
  },
  {
    label: "Lavado y Secado",
    line: "electrodomesticos",
    category: "Lavado y Secado",
    image: "/products/lavasec1.png",
    description:
      "Soluciones de gran capacidad para equipar hogares y espacios de trabajo modernos.",
  },
  {
    label: "TV y Audio",
    line: "electrodomesticos",
    category: "TV y Audio",
    image: "/products/tv1.png",
    description:
      "Pantallas y sistemas de audio para sumar confort y tecnología a cada ambiente.",
  },
  {
    label: "Microondas",
    line: "cumbre-home",
    category: "Microondas",
    image: "/products/microondas.png",
    description: "Potencia y funciones smart para una cocina más ágil.",
  },
  {
    label: "Campanas y Extractores",
    line: "cumbre-home",
    category: "Campanas y Extractores",
    image: "/products/campana1.png",
    description: "Diseño e integración total con tu cocina.",
  },
] as const;

export function BrandsSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-wine tracking-[0.2em] text-xs font-medium">
            PRODUCTOS Y MARCAS
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-ink">
            Lo que equipamos, y con quién
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Trabajamos con marcas líderes en electrodomésticos y
            equipamiento tecnológico para cada categoría de producto.
          </p>
        </motion.div>

        {/* brand chips */}
        <div className="mt-8 flex flex-wrap gap-3">
          {BRANDS.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ scale: 1.04 }}
              className="rounded-full border border-wine/20 bg-cream-soft px-6 py-2.5 cursor-default"
            >
              <span className="font-serif text-lg text-wine tracking-wide">
                {brand}
              </span>
            </motion.div>
          ))}
        </div>

        {/* category cards with real product photos */}
        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {CATEGORY_CARDS.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
            >
              <Link
                href={`/productos?linea=${cat.line}&categoria=${encodeURIComponent(cat.category)}`}
                className="group block rounded-2xl border border-wine/10 bg-white overflow-hidden hover:border-wine/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[16/10] bg-cream-soft overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-contain p-6 group-hover:scale-110 transition-transform duration-400"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-ink group-hover:text-wine transition-colors">
                    {cat.label}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink/60 leading-relaxed">
                    {cat.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-wine opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver productos →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/productos" variant="secondary" size="lg">
            Ver catálogo completo
          </Button>
        </div>
      </div>
    </section>
  );
}
