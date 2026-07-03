import Image from "next/image";
import { GlowButton } from "@/components/ui/GlowButton";
import { Badge } from "@/components/ui/Badge";

export function FoundersSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="glass-card grid gap-8 overflow-hidden rounded-3xl p-6 sm:p-10 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
          <Image
            src="/lunaya/founders/zoe-lilly-placeholder.jpg"
            alt="Zoe and Lilly, founders of Lunaya Swim"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <Badge tone="gold">Made by Zoe + Lilly</Badge>
          <h2 className="mt-4 font-display text-3xl text-pearl sm:text-4xl">
            Two girls. One idea. A summer of crystal energy.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-pearl/70 sm:text-base">
            Lunaya started as an idea between two girls who wanted swimwear to feel more personal,
            more feminine, and more connected to energy. Every piece is inspired by astrology,
            crystals, beach confidence, and the feeling of becoming the version of yourself you see
            in your head.
          </p>
          <div className="mt-6">
            <GlowButton href="/our-story" variant="secondary">
              Read Our Story
            </GlowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
