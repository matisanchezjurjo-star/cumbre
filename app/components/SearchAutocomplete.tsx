"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { PRODUCTS } from "../lib/products";

export function SearchAutocomplete({
  className = "",
}: {
  className?: string;
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const needle = query.trim().toLowerCase();
  const results = needle
    ? PRODUCTS.filter((p) => p.name.toLowerCase().includes(needle)).slice(0, 6)
    : [];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function goToResults() {
    setOpen(false);
    router.push(
      query.trim() ? `/productos?q=${encodeURIComponent(query.trim())}` : "/productos"
    );
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          goToResults();
        }}
      >
        <div className="relative w-full">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => query && setOpen(true)}
            placeholder="Buscar productos"
            className="w-full rounded-full bg-cream text-ink placeholder:text-ink/40 pl-4 pr-11 py-2.5 text-sm outline-none"
          />
          <button
            type="submit"
            aria-label="Buscar"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full bg-wine text-cream hover:scale-110 active:scale-95 transition-transform"
          >
            <Search size={15} />
          </button>
        </div>
      </form>

      {open && needle && (
        <div className="absolute left-0 right-0 top-full mt-2 rounded-xl bg-white shadow-xl border border-wine/10 overflow-hidden z-50 text-ink">
          {results.length === 0 ? (
            <p className="px-4 py-4 text-sm text-ink/50">
              Sin resultados para &quot;{query}&quot;
            </p>
          ) : (
            <>
              {results.map((p) => (
                <Link
                  key={p.slug}
                  href={`/productos/${p.slug}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 hover:bg-cream-soft transition-colors"
                >
                  <div className="relative h-11 w-11 shrink-0 rounded-lg overflow-hidden bg-cream-soft">
                    {p.images[0] && (
                      <Image
                        src={p.images[0]}
                        alt={p.name}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm truncate">{p.name}</p>
                    <p className="text-xs text-wine font-medium">
                      ${p.price.toLocaleString("es-AR")}
                    </p>
                  </div>
                </Link>
              ))}
              <button
                type="button"
                onClick={goToResults}
                className="w-full text-left px-4 py-2.5 text-sm text-wine font-medium border-t border-wine/10 hover:bg-cream-soft transition-colors"
              >
                Ver todos los resultados para &quot;{query}&quot;
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
