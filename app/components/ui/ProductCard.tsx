import Link from "next/link";
import Image from "next/image";
import type { Product } from "../../lib/types";

export function ProductCard({
  product,
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw",
  priority = false,
}: {
  product: Product;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/productos/${product.slug}`}
      className="group block rounded-sm overflow-hidden border border-border bg-cream-soft transition-colors duration-300 hover:border-wine/30"
    >
      <div className="relative aspect-square bg-cream overflow-hidden">
        {product.images[0] && (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover group-hover:scale-[1.04] transition-transform duration-300"
          />
        )}
      </div>
      <div className="p-4">
        <p className="text-sm text-ink/90 line-clamp-2 leading-snug">
          {product.name}
        </p>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-medium text-wine">
            ${product.price.toLocaleString("es-AR")}
          </span>
          {product.compareAtPrice && (
            <span className="text-xs text-ink-soft line-through">
              ${product.compareAtPrice.toLocaleString("es-AR")}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
