"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    image: "/hero-kitchen-v3.webp",
    alt: "Cocina moderna con electrodomésticos integrados",
    eyebrow: "CUMBRE HOME",
    title: "Diseño, innovación y confort para tus espacios",
    subtitle:
      "Electrodomésticos premium con cuotas sin interés y envío gratis a todo el país.",
    href: "/productos?linea=cumbre-home",
  },
  {
    image: "/hero-living-v1.webp",
    alt: "Living moderno con televisor, aire acondicionado y sillón",
    eyebrow: "ELECTRODOMÉSTICOS",
    title: "Tu living, a la altura de cada momento",
    subtitle:
      "TVs, climatización y equipamiento para tus espacios, en casa o en la oficina, con la mejor calidad y financiación.",
    href: "/productos?linea=electrodomesticos",
  },
  {
    image: "/hero-office-v1.webp",
    alt: "Oficina moderna equipada",
    eyebrow: "PARA TU EMPRESA",
    title: "Equipamos hogares y también empresas",
    subtitle:
      "Soluciones para cada espacio de trabajo, con asesoramiento, cuotas sin interés y envíos a todo el país.",
    href: "/productos?linea=electrodomesticos",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % SLIDES.length);
  }, []);
  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, 8000);
    return () => clearInterval(id);
  }, [next, index]);

  const slide = SLIDES[index];

  return (
    <section id="top" className="relative">
      <div className="relative h-[420px] sm:h-[520px] w-full overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={slide.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-wine-dark/85 via-wine-dark/40 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full mx-auto max-w-6xl px-5 sm:px-8 flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="max-w-md"
            >
              <p className="text-cream/80 tracking-[0.2em] text-xs sm:text-sm font-medium mb-3">
                {slide.eyebrow}
              </p>
              <h1 className="font-serif text-3xl sm:text-5xl leading-tight text-cream">
                {slide.title}
              </h1>
              <p className="mt-4 text-cream/85 text-base sm:text-lg">
                {slide.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={slide.href}
                  className="rounded-full bg-cream text-wine font-medium px-7 py-3 hover:bg-cream-soft transition-colors hover:scale-[1.03] active:scale-[0.98] duration-200"
                >
                  Comprar ahora
                </Link>
                <a
                  href="#categorias"
                  className="rounded-full border border-cream/50 text-cream font-medium px-7 py-3 hover:bg-cream/10 transition-colors"
                >
                  Ver categorías
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* arrows */}
        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full bg-cream/15 text-cream hover:bg-cream/30 transition-colors backdrop-blur-sm"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full bg-cream/15 text-cream hover:bg-cream/30 transition-colors backdrop-blur-sm"
        >
          <ChevronRight size={22} />
        </button>

        {/* dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.image}
              onClick={() => setIndex(i)}
              aria-label={`Ir a la diapositiva ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-cream" : "w-2 bg-cream/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
