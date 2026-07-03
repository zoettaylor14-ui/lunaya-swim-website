import type { Metadata } from "next";
import { zodiacProducts } from "@/lib/data/zodiac-products";
import { ZodiacCard } from "@/components/ZodiacCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Zodiac Collection | Lunaya Swim",
  description: "12 signs, 12 crystal energies. Zodiac-inspired swimwear by Zoe + Lilly.",
};

export default function ZodiacCollectionPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="The Full Collection"
        title="Zodiac Collection"
        subtitle="Every sign gets its own crystal palette, color story, and energy — pick yours or shop the one that speaks to you."
      />
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {zodiacProducts.map((product) => (
          <ZodiacCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
