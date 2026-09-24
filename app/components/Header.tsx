"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";
import { LogoLockup } from "./Logo";
import { CategoryDrawer } from "./CategoryDrawer";
import { SearchAutocomplete } from "./SearchAutocomplete";
import { useCart } from "../lib/cart-context";

const LINKS = [
  { label: "Todos los productos", href: "/productos" },
  { label: "Cumbre Home", href: "/productos?linea=cumbre-home" },
  { label: "Electrodomésticos", href: "/productos?linea=electrodomesticos" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-wine-dark text-cream">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center gap-4">
        <Link href="/" className="shrink-0">
          <LogoLockup color="var(--cream)" />
        </Link>

        <SearchAutocomplete className="hidden sm:block flex-1 max-w-xl" />

        <div className="ml-auto flex items-center gap-5">
          <Link
            href="/carrito"
            className="relative flex items-center text-cream/90 hover:text-cream hover:scale-110 transition-transform"
            aria-label="Carrito"
          >
            <ShoppingCart size={20} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 h-4 min-w-4 px-1 rounded-full bg-cream text-wine text-[10px] font-medium flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
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
        <button
          onClick={() => setDrawerOpen(true)}
          className="text-cream/75 hover:text-cream transition-colors"
        >
          Categorías
        </button>
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="text-cream/75 hover:text-cream transition-colors"
          >
            {l.label}
          </a>
        ))}
      </nav>

      {open && (
        <div className="md:hidden border-t border-cream/10 px-5 py-4 flex flex-col gap-4 bg-wine-dark">
          <SearchAutocomplete />
          <button
            onClick={() => {
              setOpen(false);
              setDrawerOpen(true);
            }}
            className="text-cream/90 text-sm text-left"
          >
            Categorías
          </button>
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
          <Link
            href="/productos"
            onClick={() => setOpen(false)}
            className="rounded-full bg-cream text-wine text-sm font-medium px-5 py-2.5 text-center"
          >
            Ver catálogo
          </Link>
        </div>
      )}

      <CategoryDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}
