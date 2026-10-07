"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingCart, LayoutGrid } from "lucide-react";
import { LogoLockup } from "./Logo";
import { CategoryDrawer } from "./CategoryDrawer";
import { SearchAutocomplete } from "./SearchAutocomplete";
import { Button } from "./ui/Button";
import { useCart } from "../lib/cart-context";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Galería", href: "/galeria" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Garantías", href: "/garantias" },
  { label: "Contacto", href: "/contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { count } = useCart();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-cream border-b border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-[4.5rem] flex items-center gap-8 lg:gap-10">
        <Link href="/" className="shrink-0">
          <LogoLockup />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative py-1 text-[0.72rem] tracking-[0.14em] uppercase transition-colors ${
                  active ? "text-wine" : "text-ink-soft hover:text-ink"
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-px bg-wine transition-opacity ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
          <button
            onClick={() => setDrawerOpen(true)}
            className="group relative flex items-center gap-1.5 py-1 text-[0.72rem] tracking-[0.14em] uppercase text-ink-soft hover:text-ink transition-colors"
          >
            <LayoutGrid size={13} className="opacity-70" />
            Categorías
          </button>
        </nav>

        <SearchAutocomplete className="hidden lg:block flex-1 max-w-sm" />

        <div className="ml-auto flex items-center gap-6">
          <Link
            href="/carrito"
            className="relative flex items-center text-ink hover:text-wine transition-colors"
            aria-label="Carrito"
          >
            <ShoppingCart size={19} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 h-4 min-w-4 px-1 rounded-full bg-wine text-cream text-[10px] font-medium flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
          <div className="hidden lg:block">
            <Button href="/proyectos#cotizar" variant="primary" size="md">
              Cotizá tu proyecto
            </Button>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-ink"
            aria-label="Abrir menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border px-5 py-4 flex flex-col gap-4 bg-cream">
          <SearchAutocomplete />
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[0.72rem] tracking-[0.14em] uppercase font-medium text-ink"
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              setDrawerOpen(true);
            }}
            className="flex items-center gap-1.5 text-ink text-[0.72rem] tracking-[0.14em] uppercase text-left"
          >
            <LayoutGrid size={14} className="opacity-70" />
            Categorías
          </button>
          <Button
            href="/productos"
            variant="primary"
            onClick={() => setOpen(false)}
            className="text-center"
          >
            Ver catálogo
          </Button>
        </div>
      )}

      <CategoryDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}
