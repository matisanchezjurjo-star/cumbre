import Link from "next/link";
import Image from "next/image";
import { Header } from "../components/Header";
import { AnnouncementBar } from "../components/AnnouncementBar";
import { Footer } from "../components/CTAFooter";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { PRODUCTS } from "../lib/products";
import { LINES } from "../lib/constants";

export default async function ProductosPage({
  searchParams,
}: {
  searchParams: Promise<{ linea?: string; q?: string }>;
}) {
  const { linea, q } = await searchParams;
  const activeLine = LINES.find((l) => l.slug === linea);
  let products = activeLine
    ? PRODUCTS.filter((p) => p.line === activeLine.slug)
    : PRODUCTS;
  if (q) {
    const needle = q.toLowerCase();
    products = products.filter((p) => p.name.toLowerCase().includes(needle));
  }

  return (
    <div className="flex flex-col flex-1">
      <Header />
      <AnnouncementBar />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12">
          <h1 className="font-serif text-3xl sm:text-4xl text-wine">
            {activeLine ? activeLine.name : "Todos los productos"}
          </h1>

          <div className="mt-4 flex gap-3 text-sm">
            <Link
              href="/productos"
              className={`rounded-full px-4 py-1.5 border transition-colors ${
                !activeLine
                  ? "bg-wine text-cream border-wine"
                  : "border-wine/20 text-ink/70 hover:border-wine/40"
              }`}
            >
              Todos
            </Link>
            {LINES.map((l) => (
              <Link
                key={l.slug}
                href={`/productos?linea=${l.slug}`}
                className={`rounded-full px-4 py-1.5 border transition-colors ${
                  activeLine?.slug === l.slug
                    ? "bg-wine text-cream border-wine"
                    : "border-wine/20 text-ink/70 hover:border-wine/40"
                }`}
              >
                {l.name}
              </Link>
            ))}
          </div>

          {products.length === 0 ? (
            <div className="mt-16 rounded-2xl border border-dashed border-wine/25 bg-cream-soft py-20 text-center">
              <p className="font-serif text-2xl text-wine">
                Estamos cargando el catálogo
              </p>
              <p className="mt-3 text-ink/60 max-w-md mx-auto">
                Muy pronto vas a poder comprar acá mismo. Mientras tanto,
                escribinos por WhatsApp y te contamos qué tenemos disponible.
              </p>
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {products.map((p) => (
                <Link
                  key={p.slug}
                  href={`/productos/${p.slug}`}
                  className="group rounded-xl overflow-hidden border border-wine/10 bg-cream-soft"
                >
                  <div className="relative aspect-square bg-cream">
                    {p.images[0] && (
                      <Image
                        src={p.images[0]}
                        alt={p.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>
                  <div className="p-3">
                    <p className="text-sm text-ink/90 line-clamp-2">
                      {p.name}
                    </p>
                    <div className="mt-1.5 flex items-baseline gap-2">
                      <span className="font-medium text-wine">
                        ${p.price.toLocaleString("es-AR")}
                      </span>
                      {p.compareAtPrice && (
                        <span className="text-xs text-ink/40 line-through">
                          ${p.compareAtPrice.toLocaleString("es-AR")}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
