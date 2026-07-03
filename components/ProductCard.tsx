import Image from "next/image";
import Link from "next/link";
import type { ZodiacProduct } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { formatPrice } from "@/lib/utils";

export function ProductCard({ product }: { product: ZodiacProduct }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group glass-card flex flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {product.badges.slice(0, 2).map((b) => (
            <Badge key={b} tone={b === "Low Stock" ? "blush" : "gold"}>
              {b}
            </Badge>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] uppercase tracking-wider text-gold/70">{product.sign}</p>
        <h3 className="mt-1 font-display text-lg text-pearl">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs text-pearl/55">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-gold">{formatPrice(product.price)}</span>
          <span className="text-xs text-pearl/50 group-hover:text-gold">View →</span>
        </div>
      </div>
    </Link>
  );
}
