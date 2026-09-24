import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "../../components/Header";
import { AnnouncementBar } from "../../components/AnnouncementBar";
import { Footer } from "../../components/CTAFooter";
import { WhatsAppButton } from "../../components/WhatsAppButton";
import { AddToCartButton } from "../../components/AddToCartButton";
import { getProductBySlug, PRODUCTS } from "../../lib/products";

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

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="flex flex-col flex-1">
      <Header />
      <AnnouncementBar />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 grid sm:grid-cols-2 gap-10">
          <div className="relative aspect-square rounded-xl overflow-hidden bg-cream-soft">
            {product.images[0] && (
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
              />
            )}
          </div>

          <div>
            <h1 className="font-serif text-3xl text-wine">{product.name}</h1>
            <div className="mt-3 flex items-baseline gap-3">
              <span className="text-2xl font-medium text-wine">
                ${product.price.toLocaleString("es-AR")}
              </span>
              {product.compareAtPrice && (
                <span className="text-ink/40 line-through">
                  ${product.compareAtPrice.toLocaleString("es-AR")}
                </span>
              )}
            </div>
            <p className="mt-6 text-ink/70 leading-relaxed">
              {product.description}
            </p>
            <div className="mt-8">
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
