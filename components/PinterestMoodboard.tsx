import Image from "next/image";
import { pinterest } from "@/lib/data/social-links";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";
import { PinterestIcon } from "@/components/ui/PinterestIcon";

// Do not scrape Pinterest. These photos are approved and shown purely as ambient
// decoration (no labels, no per-image links) — the single button below is the
// only link out to Lilly's board.
export function PinterestMoodboard() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Moodboard"
        title="Lilly's Moodboard"
        subtitle="The visual energy behind Lunaya: tropical heat, crystal details, beach goddess styling, fruit tones, jungle greens, and golden skin."
      />
      <div className="mt-10 grid grid-cols-3 gap-4">
        {pinterest.decorativeImages.map((image, i) => (
          <div
            key={image}
            className={`relative aspect-[4/5] overflow-hidden rounded-2xl glass-card ${i === 1 ? "translate-y-6" : ""}`}
          >
            <Image
              src={image}
              alt=""
              aria-hidden
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 768px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <GlowButton href={pinterest.boardUrl} variant="secondary">
          <PinterestIcon size={16} />
          View Lilly&apos;s Pinterest Board
        </GlowButton>
      </div>
    </section>
  );
}
