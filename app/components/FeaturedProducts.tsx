"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PRODUCTS } from "../lib/products";
import { ProductCard } from "./ui/ProductCard";
import { H2 } from "./ui/Typography";

const FEATURED_IDS = [
  "anafe-samsung-ctr264",
  "aire-samsung-ar40f12",
  "tv-samsung-55-crystal-uhd",
  "heladera-samsung-french-door-431l",
];

export function FeaturedProducts() {
  const products = FEATURED_IDS.map((id) =>
    PRODUCTS.find((p) => p.id === id)
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (products.length === 0) return null;

  return (
    <section className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-end justify-between mb-8">
          <H2 className="text-ink">Algunos de nuestros productos</H2>
          <Link
            href="/productos"
            className="text-sm font-medium text-wine hover:underline whitespace-nowrap ml-4"
          >
            Ver todos →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <ProductCard product={p} sizes="(min-width: 640px) 25vw, 50vw" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
