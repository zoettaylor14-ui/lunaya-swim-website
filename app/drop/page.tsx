import type { Metadata } from "next";
import Image from "next/image";
import { ColorStories } from "@/components/ColorStories";
import { GlowButton } from "@/components/ui/GlowButton";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "The Drop | Lunaya Swim",
  description:
    "Drop 001: The First Lunaya Collection is being shaped now. Limited pieces, hand-finished crystal details, and Brazilian-inspired silhouettes — join the waitlist for early access.",
};

export default function DropPage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/70 to-midnight/30" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <Badge tone="blush">Coming Soon</Badge>
          <h1 className="mt-4 font-display text-4xl leading-tight text-pearl sm:text-6xl">
            Drop 001: The First Lunaya Collection
          </h1>
          <p className="mt-4 max-w-xl text-base text-pearl/80 sm:text-lg">
            Our first crystal swimwear drop is being shaped now. Expect limited pieces, hand-finished
            crystal details, Brazilian-inspired silhouettes, tropical colors, and designs made to feel
            like wearable sunlight.
          </p>
          <p className="mt-6 text-xs uppercase tracking-widest text-gold">Drop date coming soon.</p>
          <div className="mt-6">
            <GlowButton href="/waitlist">Get Early Access</GlowButton>
          </div>
        </div>
      </section>

      <ColorStories
        eyebrow="Preview the Drop"
        title="Color Stories in Progress"
        subtitle="Seven shade concepts are taking shape first. Zodiac-influenced customs open by request once the drop is live."
        cta={false}
      />

      <section className="bg-[#07120d]/85 px-4 py-14 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl leading-tight text-pearl sm:text-4xl">
              Limited Pieces. Big Energy.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-pearl/70 sm:text-base">
              When the drop opens, quantities will be limited by design — small batches keep the pieces
              personal and the brand special. Joining the waitlist now is the only way to get first
              access.
            </p>
            <div className="mt-6">
              <GlowButton href="/waitlist">Get on the List</GlowButton>
            </div>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-none glass-card">
            <Image src="/lunaya/moodboard/flatlay.jpg" alt="Lunaya first drop concept flatlay" fill className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
