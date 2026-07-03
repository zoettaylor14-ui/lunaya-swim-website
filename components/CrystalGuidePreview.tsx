import { crystals } from "@/lib/data/crystals";
import { CrystalCard } from "@/components/CrystalCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";

export function CrystalGuidePreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Crystal Energy"
        title="Every Crystal Carries a Mood"
        subtitle="Choose the one that matches your sign, your season, or the energy you're stepping into."
      />
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {crystals.slice(0, 4).map((c) => (
          <CrystalCard key={c.name} crystal={c} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <GlowButton href="/crystal-guide" variant="secondary">
          See the Full Crystal Guide
        </GlowButton>
      </div>
    </section>
  );
}
