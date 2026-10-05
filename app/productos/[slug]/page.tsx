import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChevronRight, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { Header } from "../../components/Header";
import { AnnouncementBar } from "../../components/AnnouncementBar";
import { Footer } from "../../components/CTAFooter";
import { WhatsAppButton } from "../../components/WhatsAppButton";
import { AddToCartButton } from "../../components/AddToCartButton";
import { ProductCard } from "../../components/ui/ProductCard";
import { H2 } from "../../components/ui/Typography";
import { getProductBySlug, PRODUCTS } from "../../lib/products";
import { LINES, WHATSAPP_URL } from "../../lib/constants";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Producto no encontrado | Cumbre" };

  return {
    title: `${product.name} | Cumbre`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images[0] ? [{ url: product.images[0] }] : undefined,
    },
  };
}

const ASSURANCES = [
  {
    icon: ShieldCheck,
    label: "Garantía legal de 6 meses",
    sub: "Mínimo según la Ley 24.240",
  },
  {
    icon: Truck,
    label: "Envíos a todo el país",
    sub: "Coordinado por WhatsApp",
  },
  {
    icon: RotateCcw,
    label: "10 días para arrepentirte",
    sub: "Sin necesidad de justificar el motivo",
  },
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const line = LINES.find((l) => l.slug === product.line);
  const discountPct = product.compareAtPrice
    ? Math.round(100 - (product.price / product.compareAtPrice) * 100)
    : null;
  const lowStock = product.stock <= 5;

  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  ).slice(0, 4);

  const whatsappMessage = encodeURIComponent(
    `Hola! Tengo una consulta sobre ${product.name}.`
  );

  return (
    <div className="flex flex-col flex-1">
      <Header />
      <AnnouncementBar />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 sm:py-14">
          {/* breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center flex-wrap gap-1.5 text-xs text-ink/50 mb-8"
          >
            <Link href="/productos" className="hover:text-wine transition-colors">
              Catálogo
            </Link>
            {line && (
              <>
                <ChevronRight size={12} />
                <Link
                  href={`/productos?linea=${line.slug}`}
                  className="hover:text-wine transition-colors"
                >
                  {line.name}
                </Link>
              </>
            )}
            <ChevronRight size={12} />
            <Link
              href={`/productos?linea=${product.line}&categoria=${encodeURIComponent(product.category)}`}
              className="hover:text-wine transition-colors"
            >
              {product.category}
            </Link>
          </nav>

          <div className="grid sm:grid-cols-2 gap-10 sm:gap-14">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-cream-soft border border-wine/10">
              {product.images[0] && (
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  priority
                  className="object-cover"
                />
              )}
              {discountPct && discountPct > 0 && (
                <span className="absolute top-4 left-4 rounded-full bg-wine text-cream text-xs font-semibold px-3 py-1.5">
                  {discountPct}% OFF
                </span>
              )}
            </div>

            <div>
              <span className="inline-block rounded-full bg-wine/10 text-wine text-xs font-medium px-3 py-1.5">
                {product.brand}
              </span>

              <H2 as="h1" className="mt-4 text-wine">
                {product.name}
              </H2>

              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-3xl font-medium text-wine">
                  ${product.price.toLocaleString("es-AR")}
                </span>
                {product.compareAtPrice && (
                  <span className="text-lg text-ink/40 line-through">
                    ${product.compareAtPrice.toLocaleString("es-AR")}
                  </span>
                )}
              </div>

              <p
                className={`mt-2 text-sm font-medium ${lowStock ? "text-wine" : "text-ink/60"}`}
              >
                {lowStock
                  ? `¡Últimas unidades! Quedan ${product.stock} en stock.`
                  : "En stock."}
              </p>

              <p className="mt-6 text-ink/70 leading-relaxed">
                {product.description}
              </p>

              <div className="mt-8">
                <AddToCartButton product={product} />
              </div>

              <a
                href={`${WHATSAPP_URL}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-wine hover:underline"
              >
                ¿Tenés dudas sobre este producto? Preguntanos por WhatsApp →
              </a>

              <div className="mt-10 pt-8 border-t border-wine/10 grid gap-4">
                {ASSURANCES.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream-soft text-wine">
                      <item.icon size={16} strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-ink">
                        {item.label}
                      </p>
                      <p className="text-xs text-ink/50">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-20 sm:mt-28">
              <H2 className="text-ink">También te puede interesar</H2>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-5">
                {related.map((p) => (
                  <ProductCard
                    key={p.slug}
                    product={p}
                    sizes="(min-width: 640px) 25vw, 50vw"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
