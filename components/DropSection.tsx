import { zodiacProducts } from "@/lib/data/zodiac-products";
import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/ui/Badge";
import { GlowButton } from "@/components/ui/GlowButton";

export function DropSection() {
  const preview = zodiacProducts.slice(0, 4);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="glass-card overflow-hidden rounded-3xl p-6 sm:p-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <Badge tone="blush">Coming Soon</Badge>
            <h2 className="mt-4 font-display text-3xl text-pearl sm:text-4xl">Drop 001: Zodiac Heat</h2>
            <p className="mt-3 max-w-xl text-sm text-pearl/65 sm:text-base">
              The first limited crystal bikini collection inspired by the signs. Each piece is
              finished by hand in small batches and designed to match a different kind of summer
              energy.
            </p>
          </div>
          <div className="glass-card shrink-0 rounded-2xl px-6 py-4 text-center">
            <p className="text-[11px] uppercase tracking-widest text-pearl/50">Drop opens in</p>
            <p className="font-display text-3xl text-gold">-- : -- : --</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {preview.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 text-center">
          <GlowButton href="/waitlist">Get Early Access</GlowButton>
          <p className="text-xs text-pearl/40">
            Limited pieces. Once a drop sells out, it may not return in the same design.
          </p>
        </div>
      </div>
    </section>
  );
}
