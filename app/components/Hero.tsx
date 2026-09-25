"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LogoMark } from "./Logo";

const SLIDES = [
  {
    image: "/hero-smart-living-v1.webp",
    alt: "Living inteligente con panel de control integrado",
    eyebrow: "CASAS INTELIGENTES",
    title: "Convertimos tu casa en un hogar inteligente",
    subtitle:
      "Automatización, climatización y equipamiento tecnológico integrado — proyectamos e instalamos de punta a punta.",
    href: "/proyectos",
    ctaLabel: "Cotizá tu proyecto",
  },
  {
    image: "/hero-smart-kitchen-v1.webp",
    alt: "Cocina totalmente inteligente",
    eyebrow: "EQUIPAMIENTO PARA EL HOGAR",
    title: "Cocinas equipadas con la última tecnología",
    subtitle:
      "Heladeras conectadas, anafes con control por app y asistentes de voz integrados a tu cocina.",
    href: "/proyectos",
    ctaLabel: "Cotizá tu proyecto",
  },
  {
    image: "/hero-smart-office-v1.webp",
    alt: "Oficina moderna equipada",
    eyebrow: "PARA TU EMPRESA",
    title: "Tecnología y equipamiento para tu oficina",
    subtitle:
      "Asesoramiento técnico y provisión en volumen para equipar espacios de trabajo completos.",
    href: "/proyectos",
    ctaLabel: "Cotizá tu proyecto",
  },
];

// Posición de la cerradura dentro de /hero-door-v1.webp, en % de la imagen.
const LOCK_ORIGIN = "51% 62%";

type Phase = "door" | "zoom" | "opening" | "logo" | "carousel";

const TIMINGS: Record<Exclude<Phase, "door">, number> = {
  zoom: 1800,
  opening: 4300,
  logo: 5500,
  carousel: 7500,
};

export function Hero() {
  const [phase, setPhase] = useState<Phase>("door");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("zoom"), TIMINGS.zoom),
      setTimeout(() => setPhase("opening"), TIMINGS.opening),
      setTimeout(() => setPhase("logo"), TIMINGS.logo),
      setTimeout(() => setPhase("carousel"), TIMINGS.carousel),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % SLIDES.length);
  }, []);
  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (phase !== "carousel") return;
    const id = setInterval(next, 8000);
    return () => clearInterval(id);
  }, [phase, next, index]);

  const slide = SLIDES[index];
  const introDone = phase === "carousel";
  const doorSliding = phase === "opening" || phase === "logo";

  return (
    <section id="top" className="relative">
      <div className="relative h-[560px] sm:h-[680px] w-full overflow-hidden bg-wine-dark">
        {!introDone && (
          <>
            {/* living room revealed behind the doors */}
            {doorSliding && (
              <div className="absolute inset-0">
                <Image
                  src="/hero-smart-living-v1.webp"
                  alt="Living inteligente"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-wine-dark/35" />
              </div>
            )}

            {/* door, static then zooming into the lock */}
            {!doorSliding && (
              <motion.div
                className="absolute inset-0"
                style={{ transformOrigin: LOCK_ORIGIN }}
                animate={phase === "zoom" ? { scale: 3.2 } : { scale: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <Image
                  src="/hero-door-v1.webp"
                  alt="Puerta principal con cerradura inteligente"
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
            )}

            {/* door panels sliding open like real double doors */}
            {doorSliding && (
              <>
                <motion.div
                  className="absolute inset-0"
                  style={{
                    transformOrigin: LOCK_ORIGIN,
                    clipPath: "inset(0 50% 0 0)",
                  }}
                  initial={{ scale: 3.2, x: 0 }}
                  animate={{ scale: 3.2, x: "-45%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <Image
                    src="/hero-door-v1.webp"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  className="absolute inset-0"
                  style={{
                    transformOrigin: LOCK_ORIGIN,
                    clipPath: "inset(0 0 0 50%)",
                  }}
                  initial={{ scale: 3.2, x: 0 }}
                  animate={{ scale: 3.2, x: "45%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <Image
                    src="/hero-door-v1.webp"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </>
            )}

            {/* logo reveal */}
            <AnimatePresence>
              {phase === "logo" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.75 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.08 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10"
                >
                  <LogoMark className="h-14 w-14 sm:h-20 sm:w-20" color="var(--cream)" />
                  <span className="font-serif text-3xl sm:text-5xl text-cream tracking-[0.2em]">
                    CUMBRE
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        {introDone && (
          <>
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
                      {slide.ctaLabel}
                    </Link>
                    <Link
                      href="/productos"
                      className="rounded-full border border-cream/50 text-cream font-medium px-7 py-3 hover:bg-cream/10 transition-colors"
                    >
                      Ver catálogo
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

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
          </>
        )}
      </div>
    </section>
  );
}
