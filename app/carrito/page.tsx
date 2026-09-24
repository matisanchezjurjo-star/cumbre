"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { Header } from "../components/Header";
import { AnnouncementBar } from "../components/AnnouncementBar";
import { Footer } from "../components/CTAFooter";
import { useCart } from "../lib/cart-context";

export default function CarritoPage() {
  const { items, removeItem, setQty, subtotal } = useCart();

  return (
    <div className="flex flex-col flex-1">
      <Header />
      <AnnouncementBar />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 py-12">
          <h1 className="font-serif text-3xl text-wine">Tu carrito</h1>

          {items.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-dashed border-wine/25 bg-cream-soft py-16 text-center">
              <p className="text-ink/60">Todavía no agregaste productos.</p>
              <Link
                href="/productos"
                className="mt-5 inline-block rounded-full bg-wine text-cream font-medium px-6 py-2.5 hover:scale-105 active:scale-95 transition-transform"
              >
                Ver catálogo
              </Link>
            </div>
          ) : (
            <div className="mt-8 grid sm:grid-cols-3 gap-10">
              <div className="sm:col-span-2 flex flex-col gap-4">
                {items.map((item) => (
                  <div
                    key={item.slug}
                    className="flex items-center gap-4 rounded-xl border border-wine/10 bg-cream-soft p-3"
                  >
                    <div className="relative h-20 w-20 shrink-0 rounded-lg overflow-hidden bg-cream">
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-ink/90 truncate">
                        {item.name}
                      </p>
                      <p className="text-wine font-medium mt-1">
                        ${item.price.toLocaleString("es-AR")}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border border-wine/20 rounded-full px-1">
                      <button
                        onClick={() => setQty(item.slug, item.qty - 1)}
                        className="h-7 w-7 flex items-center justify-center text-wine"
                        aria-label="Restar"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-5 text-center text-sm">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => setQty(item.slug, item.qty + 1)}
                        className="h-7 w-7 flex items-center justify-center text-wine"
                        aria-label="Sumar"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.slug)}
                      aria-label="Quitar"
                      className="text-ink/40 hover:text-wine"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-wine/10 bg-cream-soft p-5 h-fit">
                <div className="flex justify-between text-sm text-ink/70">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString("es-AR")}</span>
                </div>
                <p className="mt-1 text-xs text-ink/50">
                  El envío se calcula en el siguiente paso.
                </p>
                <Link
                  href="/checkout"
                  className="mt-5 block text-center rounded-full bg-wine text-cream font-medium px-6 py-3 hover:bg-wine-dark hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  Ir a pagar
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
