import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";

export const metadata: Metadata = {
  title: "Story | Lunaya Swim",
  description:
    "Swimwear that feels like energy — the story behind Lunaya Swim, still being built by Zoe + Lilly.",
};

export default function StoryPage() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 pt-16 sm:px-6">
        <SectionHeading
          eyebrow="Made by Zoe + Lilly"
          title="Swimwear That Feels Like Energy"
          subtitle="Lunaya started as an idea between two girls who wanted swimwear to feel more personal, more feminine, and more connected to the woman wearing it."
        />
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-2xl text-gold sm:text-3xl">The Idea</h2>
            <p className="mt-4 text-sm leading-relaxed text-pearl/70 sm:text-base">
              Lunaya Swim was built around the feeling of becoming the version of yourself you see in
              your head: confident, sun-kissed, crystal-covered, and completely in your own energy.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-pearl/70 sm:text-base">
              Each piece is inspired by tropical color, astrology, crystal detail, and the kind of
              bikini that turns a beach day into a moment.
            </p>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl glass-card">
            <Image src="/lunaya/moodboard/moodboard.jpg" alt="Lunaya moodboard" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#07120d] to-[#12271a] px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div className="relative aspect-square overflow-hidden rounded-3xl glass-card md:order-1">
            <Image src="/lunaya/moodboard/craft.jpg" alt="Handmade Lunaya swimwear" fill className="object-cover" />
          </div>
          <div className="md:order-2">
            <h2 className="font-display text-2xl text-gold sm:text-3xl">Why Crystals</h2>
            <p className="mt-4 text-sm leading-relaxed text-pearl/70 sm:text-base">
              Because the details are what make the suit feel personal. Lunaya pieces are designed to
              catch sunlight, flash, and water from every angle.
            </p>
            <h2 className="mt-8 font-display text-2xl text-gold sm:text-3xl">Why Limited Drops</h2>
            <p className="mt-4 text-sm leading-relaxed text-pearl/70 sm:text-base">
              Small batches keep the designs special. Once a piece sells out, it may not come back in
              the same way.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 text-center sm:px-6">
        <h2 className="font-display text-2xl text-pearl sm:text-3xl">Made by Zoe + Lilly</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-pearl/70 sm:text-base">
          The brand is still in its first chapter, and every detail is being shaped with intention —
          from the colors to the crystal placements to the way each piece will make someone feel.
        </p>
        <div className="mt-6">
          <GlowButton href="https://www.instagram.com/lunaya.swimm/" variant="secondary">
            Follow the Build
          </GlowButton>
        </div>
      </section>
    </>
  );
}
