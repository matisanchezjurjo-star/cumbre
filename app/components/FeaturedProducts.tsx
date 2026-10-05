"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { PRODUCTS } from "../lib/products";

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
          <h2 className="font-serif text-2xl sm:text-3xl text-ink">
            Algunos de nuestros productos
          </h2>
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
              <Link
                href={`/productos/${p.slug}`}
                className="group block rounded-2xl overflow-hidden border border-wine/10 bg-cream-soft transition-all duration-300 hover:-translate-y-1 hover:border-wine/25 hover:shadow-[0_12px_28px_-12px_rgba(78,22,32,0.28)]"
              >
                <div className="relative aspect-square bg-cream">
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    sizes="(min-width: 640px) 25vw, 50vw"
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-ink/90 line-clamp-2 leading-snug">
                    {p.name}
                  </p>
                  <p className="mt-2 font-medium text-wine">
                    ${p.price.toLocaleString("es-AR")}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
