import Image from "next/image";
import Link from "next/link";
import type { ZodiacProduct } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { formatPrice } from "@/lib/utils";

const colorSwatch: Record<string, string> = {
  red: "#B3382C",
  orange: "#E08A3E",
  gold: "#D7AF5E",
  olive: "#8A8B5C",
  cream: "#F3E9D2",
  champagne: "#D7AF5E",
  silver: "#D9D6E5",
  blue: "#5B87C5",
  pink: "#F0AFC7",
  pearl: "#F8ECDC",
  white: "#F5F5F0",
  seafoam: "#9FD8C8",
  bronze: "#A9762F",
  nude: "#DAB894",
  blush: "#F8C8FF",
  rose: "#E4A3B3",
  black: "#0A0A0D",
  "deep red": "#6E1423",
  smoke: "#5C5A5F",
  turquoise: "#3FBFB0",
  charcoal: "#38363E",
  "icy blue": "#BFE3F5",
  chrome: "#C9CBD1",
  "ocean blue": "#2B5C8A",
  lavender: "#C6B7E0",
};

export function ZodiacCard({ product }: { product: ZodiacProduct }) {
  return (
    <div className="group glass-card relative flex flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={product.image}
          alt={`${product.sign} — ${product.name}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
        <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full glass-card text-lg text-gold">
          {product.symbol}
        </div>
        <Badge tone="gold" className="absolute right-3 top-3">
          Zodiac Inspired
        </Badge>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs uppercase tracking-wider text-gold/80">{product.sign}</p>
        <h3 className="mt-1 font-display text-xl text-pearl">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-pearl/60">{product.description}</p>
        <div className="mt-3 flex items-center gap-1.5">
          {product.colors.map((c) => (
            <span
              key={c}
              title={c}
              className="h-3.5 w-3.5 rounded-full border border-pearl/30"
              style={{ backgroundColor: colorSwatch[c] || "#999" }}
            />
          ))}
          <span className="ml-1 text-[11px] text-pearl/40">
            {product.crystals.slice(0, 2).join(" · ")}
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-lg text-gold">{formatPrice(product.price)}</span>
          <Link
            href={`/products/${product.slug}`}
            className="rounded-full border border-gold/40 px-4 py-1.5 text-xs text-gold transition hover:bg-gold/10"
          >
            Shop This Sign
          </Link>
        </div>
      </div>
    </div>
  );
}

export { colorSwatch };
