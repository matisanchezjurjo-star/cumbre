"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Refrigerator,
  AirVent,
  Microwave,
  WashingMachine,
  Tv,
  Flame,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { CATEGORIES, BRANDS, LINES } from "../lib/constants";

const ICONS: Record<string, LucideIcon> = {
  Refrigerator,
  AirVent,
  Microwave,
  WashingMachine,
  Tv,
  Flame,
  Wind,
};

export function CategoryDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed left-0 top-0 z-[70] h-full w-[85vw] max-w-sm bg-cream text-ink shadow-2xl overflow-y-auto"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
          >
            <div className="flex items-center justify-between px-5 h-16 border-b border-cream/10 bg-wine-dark text-cream sticky top-0 z-10">
              <span className="font-serif text-lg">Categorías</span>
              <button
                onClick={onClose}
                aria-label="Cerrar"
                className="hover:scale-110 transition-transform"
              >
                <X size={22} />
              </button>
            </div>

            <div className="p-5 pb-10">
              <Link
                href="/productos"
                onClick={onClose}
                className="block py-2 font-medium text-wine hover:translate-x-1 transition-transform"
              >
                Todos los productos
              </Link>

              {LINES.map((line) => (
                <div key={line.slug} className="mt-5">
                  <Link
                    href={`/productos?linea=${line.slug}`}
                    onClick={onClose}
                    className="block font-serif text-lg text-wine"
                  >
                    {line.name}
                  </Link>
                  <div className="mt-2 flex flex-col">
                    {CATEGORIES.filter((c) => c.line === line.slug).map(
                      (c) => {
                        const Icon = ICONS[c.icon];
                        return (
                          <Link
                            key={c.category}
                            href={`/productos?linea=${line.slug}&categoria=${encodeURIComponent(c.category)}`}
                            onClick={onClose}
                            className="flex items-center gap-3 py-2 pl-1 text-sm text-ink/75 hover:text-wine hover:translate-x-1 transition-all"
                          >
                            <Icon size={18} className="shrink-0 text-wine/70" />
                            {c.label}
                          </Link>
                        );
                      }
                    )}
                  </div>
                </div>
              ))}

              <div className="mt-6 pt-6 border-t border-wine/10">
                <p className="font-serif text-lg text-wine">Marcas</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {BRANDS.map((b) => (
                    <Link
                      key={b}
                      href={`/productos?marca=${encodeURIComponent(b)}`}
                      onClick={onClose}
                      className="rounded-full border border-wine/20 px-4 py-1.5 text-sm hover:border-wine/50 hover:bg-wine/5 transition-colors"
                    >
                      {b}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
