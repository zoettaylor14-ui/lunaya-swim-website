import { zodiacProducts } from "@/lib/data/zodiac-products";
import { ZodiacCard } from "@/components/ZodiacCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";

export function ZodiacPreview() {
  const preview = zodiacProducts.slice(0, 6);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="12 Signs, 12 Energies"
        title="The Zodiac Collection"
        subtitle="Every sign gets its own crystal palette, color story, and energy."
      />
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {preview.map((product) => (
          <ZodiacCard key={product.slug} product={product} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <GlowButton href="/zodiac-collection" variant="secondary">
          Shop All 12 Signs
        </GlowButton>
      </div>
    </section>
  );
}
