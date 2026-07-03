import type { Metadata } from "next";
import { zodiacProducts } from "@/lib/data/zodiac-products";
import { ZodiacCard } from "@/components/ZodiacCard";
import { QuizSection } from "@/components/QuizSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Zodiac Collection | Lunaya Swim",
  description: "Crystal astrology swimwear by Zoe + Lilly. Find your Lunaya energy.",
};

export default function ZodiacCollectionPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Crystal Astrology Swimwear"
          title="Find Your Lunaya Energy"
          subtitle="Each zodiac story is translated into crystal color, swim cut, and beach mood."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {zodiacProducts.map((product) => (
            <ZodiacCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
      <QuizSection />
    </>
  );
}
