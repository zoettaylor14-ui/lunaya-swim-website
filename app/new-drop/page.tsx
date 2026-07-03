import type { Metadata } from "next";
import Image from "next/image";
import { ColorStories } from "@/components/ColorStories";
import { GlowButton } from "@/components/ui/GlowButton";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "New Drop | Lunaya Swim",
  description:
    "Drop 001: Zodiac Heat — the first limited crystal bikini collection from Lunaya Swim. Hand-finished pieces, tropical color stories, and Brazilian cuts.",
};

export default function NewDropPage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
        <Image
          src="/lunaya/moodboard/moodboard.jpg"
          alt="Lunaya Swim moodboard"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-midnight/40" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <Badge tone="blush">Coming Soon</Badge>
          <h1 className="mt-4 font-display text-4xl leading-tight text-pearl sm:text-6xl">
            Drop 001: Zodiac Heat
          </h1>
          <p className="mt-4 max-w-xl text-base text-pearl/80 sm:text-lg">
            The first limited crystal bikini collection inspired by the signs. Hand-finished pieces,
            tropical color stories, and Brazilian cuts made for sun-drenched moments.
          </p>
          <p className="mt-6 font-display text-3xl text-gold">-- : -- : --</p>
          <div className="mt-6">
            <GlowButton href="/waitlist">Join Early Access</GlowButton>
          </div>
        </div>
      </section>

      <ColorStories
        eyebrow="Preview the Drop"
        title="Preview the Drop"
        subtitle="Seven shades launch first, then zodiac customs open by request."
        cta={false}
      />

      <section className="bg-[#07120d] px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl leading-tight text-pearl sm:text-4xl">
              Limited Pieces. Big Energy.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-pearl/70 sm:text-base">
              Once a drop sells out, it may not return in the same design. This keeps the pieces
              personal and the brand special.
            </p>
            <div className="mt-6">
              <GlowButton href="/waitlist">Get on the List</GlowButton>
            </div>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl glass-card">
            <Image src="/lunaya/moodboard/flatlay.jpg" alt="Lunaya first drop flatlay" fill className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
