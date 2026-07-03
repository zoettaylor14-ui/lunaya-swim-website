import type { Metadata } from "next";
import Image from "next/image";
import { crystals } from "@/lib/data/crystals";
import { CrystalCard } from "@/components/CrystalCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Crystal Energy Guide | Lunaya Swim",
  description: "Every crystal color carries a different mood. Find the one that matches your sign or your energy.",
};

export default function CrystalGuidePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="relative mb-12 aspect-[21/9] w-full overflow-hidden rounded-3xl glass-card">
        <Image
          src="/lunaya/crystals/crystal-detail-closeup.png"
          alt="Hand-placed crystal detail, close up"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent" />
      </div>
      <SectionHeading
        eyebrow="Crystal Guide"
        title="Crystal Energy Guide"
        subtitle="Every crystal color carries a different mood. Choose the one that matches your sign, your season, or the energy you're stepping into."
      />
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {crystals.map((c) => (
          <CrystalCard key={c.name} crystal={c} />
        ))}
      </div>
    </div>
  );
}
