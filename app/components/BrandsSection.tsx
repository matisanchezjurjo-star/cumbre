"use client";

import { motion } from "framer-motion";
import { BRANDS } from "../lib/constants";
import { PRODUCTS } from "../lib/products";
import { Button } from "./ui/Button";
import { SectionHeading } from "./ui/SectionHeading";
import { ProductCard } from "./ui/ProductCard";

// One or two real products per category, pulled straight from the
// catalog — if a category is added or a product goes out of stock,
// this stays accurate without anyone having to remember to update it.
const MARQUEE_PRODUCTS = Object.values(
  PRODUCTS.reduce<Record<string, (typeof PRODUCTS)[number][]>>((acc, p) => {
    (acc[p.category] ??= []).push(p);
    return acc;
  }, {})
).flatMap((group) => group.slice(0, 2));

export function BrandsSection() {
  return (
    <section className="py-16 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="PRODUCTOS Y MARCAS"
          title="Lo que equipamos, y con quién"
          description="Trabajamos con marcas líderes en electrodomésticos y equipamiento tecnológico para cada categoría de producto."
        />

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
      </div>

      {/* continuous product marquee */}
      <div className="mt-10 relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-cream to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-cream to-transparent z-10" />

        <motion.div
          className="flex w-max gap-5 px-5 sm:px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        >
          {[...MARQUEE_PRODUCTS, ...MARQUEE_PRODUCTS].map((p, i) => (
            <div key={`${p.slug}-${i}`} className="w-44 sm:w-52 shrink-0">
              <ProductCard product={p} sizes="208px" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mt-10 text-center">
          <Button href="/productos" variant="secondary" size="lg">
            Ver catálogo completo
          </Button>
        </div>
      </div>
    </section>
  );
}
