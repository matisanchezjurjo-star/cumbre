import Link from "next/link";
import { X } from "lucide-react";
import { Header } from "../components/Header";
import { AnnouncementBar } from "../components/AnnouncementBar";
import { Footer } from "../components/CTAFooter";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { ProductCard } from "../components/ui/ProductCard";
import { H1, H3 } from "../components/ui/Typography";
import { PRODUCTS } from "../lib/products";
import { LINES, BRANDS } from "../lib/constants";

export default async function ProductosPage({
  searchParams,
}: {
  searchParams: Promise<{
    linea?: string;
    categoria?: string;
    marca?: string;
    q?: string;
  }>;
}) {
  const { linea, categoria, marca, q } = await searchParams;
  const activeLine = LINES.find((l) => l.slug === linea);
  let products = activeLine
    ? PRODUCTS.filter((p) => p.line === activeLine.slug)
    : PRODUCTS;
  if (categoria) {
    products = products.filter((p) => p.category === categoria);
  }
  if (marca) {
    products = products.filter((p) => p.brand === marca);
  }
  if (q) {
    const needle = q.toLowerCase();
    products = products.filter((p) => p.name.toLowerCase().includes(needle));
  }

  const filterParams = new URLSearchParams();
  if (linea) filterParams.set("linea", linea);
  if (categoria) filterParams.set("categoria", categoria);
  const baseFilterQuery = filterParams.toString();

  return (
    <div className="flex flex-col flex-1">
      <Header />
      <AnnouncementBar />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12">
          <H1 className="text-wine">
            {categoria ?? (activeLine ? activeLine.name : "Todos los productos")}
          </H1>

          <div className="mt-6 flex flex-wrap gap-x-7 gap-y-2 border-b border-border text-sm">
            <Link
              href="/productos"
              className={`pb-3 -mb-px border-b-2 font-medium transition-colors ${
                !activeLine && !categoria
                  ? "border-wine text-wine"
                  : "border-transparent text-ink-soft hover:text-ink"
              }`}
            >
              Todos
            </Link>
            {LINES.map((l) => (
              <Link
                key={l.slug}
                href={`/productos?linea=${l.slug}`}
                className={`pb-3 -mb-px border-b-2 font-medium transition-colors ${
                  activeLine?.slug === l.slug && !categoria
                    ? "border-wine text-wine"
                    : "border-transparent text-ink-soft hover:text-ink"
                }`}
              >
                {l.name}
              </Link>
            ))}
          </div>

          {categoria && (
            <div className="mt-4">
              <Link
                href={activeLine ? `/productos?linea=${activeLine.slug}` : "/productos"}
                className="inline-flex items-center gap-1.5 rounded-sm border border-wine/30 bg-wine/5 text-wine text-xs font-medium px-3 py-1.5 hover:bg-wine/10 transition-colors"
              >
                {categoria}
                <X size={12} />
              </Link>
            </div>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-[0.7rem] tracking-[0.12em] text-ink-soft uppercase mr-1">
              Marca
            </span>
            {BRANDS.map((b) => (
              <Link
                key={b}
                href={`/productos?${baseFilterQuery ? baseFilterQuery + "&" : ""}marca=${encodeURIComponent(b)}`}
                className={`rounded-sm border px-3 py-1.5 text-xs font-medium transition-colors ${
                  marca === b
                    ? "bg-wine text-cream border-wine"
                    : "border-border text-ink-soft hover:border-wine/40 hover:text-ink"
                }`}
              >
                {b}
              </Link>
            ))}
            {marca && (
              <Link
                href={`/productos${baseFilterQuery ? `?${baseFilterQuery}` : ""}`}
                className="inline-flex items-center gap-1 text-xs text-wine hover:underline ml-1"
              >
                Quitar
                <X size={12} />
              </Link>
            )}
          </div>

          {products.length === 0 ? (
            <div className="mt-16 rounded-sm border border-dashed border-wine/25 bg-cream-soft py-20 text-center">
              <H3 as="p" className="text-wine">
                Estamos cargando el catálogo
              </H3>
              <p className="mt-3 text-ink-soft max-w-md mx-auto">
                Muy pronto vas a poder comprar acá mismo. Mientras tanto,
                escribinos por WhatsApp y te contamos qué tenemos disponible.
              </p>
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {products.map((p) => (
                <ProductCard key={p.slug} product={p} />
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
