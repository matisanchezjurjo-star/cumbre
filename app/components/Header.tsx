"use client";

import { useState } from "react";
import { Menu, X, Search, User, ShoppingCart } from "lucide-react";
import { LogoLockup } from "./Logo";
import { STORE_URL } from "../lib/constants";

const LINKS = [
  { label: "Categorías", href: "#categorias" },
  { label: "Ofertas", href: "#destacados" },
  { label: "18 cuotas sin interés", href: STORE_URL },
  { label: "Envío gratis a todo el país", href: STORE_URL },
  { label: "Cumbre Home", href: "#categorias" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-wine-dark text-cream">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center gap-4">
        <a href="#top" className="shrink-0">
          <LogoLockup color="var(--cream)" />
        </a>

        <form
          action={STORE_URL}
          target="_blank"
          className="hidden sm:flex flex-1 max-w-xl"
        >
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Buscar productos"
              className="w-full rounded-full bg-cream text-ink placeholder:text-ink/40 pl-4 pr-11 py-2.5 text-sm outline-none"
            />
            <button
              type="submit"
              aria-label="Buscar"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full bg-wine text-cream"
            >
              <Search size={15} />
            </button>
          </div>
        </form>

        <div className="ml-auto flex items-center gap-5">
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-sm text-cream/90 hover:text-cream"
          >
            <User size={18} />
            Ingresar
          </a>
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-cream/90 hover:text-cream"
            aria-label="Carrito"
          >
            <ShoppingCart size={20} />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="sm:hidden text-cream"
            aria-label="Abrir menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-6 border-t border-cream/10 px-5 sm:px-8 h-11 text-xs tracking-wide">
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href === STORE_URL ? "_blank" : undefined}
            rel={l.href === STORE_URL ? "noopener noreferrer" : undefined}
            className="text-cream/75 hover:text-cream transition-colors"
          >
            {l.label}
          </a>
        ))}
      </nav>

      {open && (
        <div className="md:hidden border-t border-cream/10 px-5 py-4 flex flex-col gap-4 bg-wine-dark">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-cream/90 text-sm"
            >
              {l.label}
            </a>
          ))}
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cream text-wine text-sm font-medium px-5 py-2.5 text-center"
          >
            Ver tienda
          </a>
        </div>
      )}
    </header>
  );
}
