"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Briefcase, UtensilsCrossed } from "lucide-react";

const CATEGORIES = [
  {
    key: "domotica",
    label: "Domótica para tu Hogar",
    icon: Home,
    description:
      "Living y ambientes principales con iluminación, climatización y control integrado desde un solo panel o app.",
    images: [
      { src: "/hero-smart-living-v1.webp", alt: "Living con domótica integrada" },
      { src: "/hero-door-v1.webp", alt: "Entrada con cerradura inteligente" },
    ],
  },
  {
    key: "hogar",
    label: "Equipamiento para el Hogar",
    icon: UtensilsCrossed,
    description:
      "Cocinas equipadas de punta a punta: heladeras conectadas, anafes, hornos y electrodomésticos premium.",
    images: [
      { src: "/hero-smart-kitchen-v1.webp", alt: "Cocina inteligente equipada" },
      { src: "/hero-kitchen-v3.webp", alt: "Cocina premium con heladera conectada" },
    ],
  },
  {
    key: "empresas",
    label: "Empresas y Oficinas",
    icon: Briefcase,
    description:
      "Salas de reunión y espacios de trabajo equipados con pantallas, climatización y conectividad para empresas.",
    images: [
      { src: "/hero-smart-office-v1.webp", alt: "Oficina moderna equipada" },
      { src: "/hero-office-v1.webp", alt: "Sala de trabajo con pantalla integrada" },
    ],
  },
] as const;

export function ProjectsGallery() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]["key"]>(
    CATEGORIES[0].key
  );
  const current = CATEGORIES.find((c) => c.key === active)!;

  return (
    <section className="py-16 sm:py-20 bg-cream-soft">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-wine tracking-[0.2em] text-xs font-medium">
            NUESTROS PROYECTOS
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-wine">
            Así equipamos cada tipo de espacio
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Ejemplos del tipo de trabajo que hacemos en cada categoría de
            proyecto.
          </p>
        </motion.div>

        {/* tabs */}
        <div className="mt-8 flex flex-wrap gap-3">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.key === active;
            return (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-wine text-cream"
                    : "bg-white text-ink/70 border border-wine/15 hover:border-wine/40"
                }`}
              >
                <Icon size={16} strokeWidth={1.75} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* gallery */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="mt-8"
          >
            <p className="text-ink/70 leading-relaxed max-w-2xl mb-6">
              {current.description}
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {current.images.map((img) => (
                <div
                  key={img.src}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wine-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/proyectos"
                className="inline-block rounded-full bg-wine text-cream font-medium px-7 py-3 hover:bg-wine-dark hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              >
                Cotizá un proyecto así
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
