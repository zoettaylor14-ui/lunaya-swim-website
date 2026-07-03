import Image from "next/image";
import { GlowButton } from "@/components/ui/GlowButton";
import { Badge } from "@/components/ui/Badge";

export function CustomCrystalSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="glass-card grid gap-8 overflow-hidden rounded-3xl p-6 sm:p-10 md:grid-cols-2 md:items-center">
        <div>
          <Badge tone="crystal">Custom Available</Badge>
          <h2 className="mt-4 font-display text-3xl text-pearl sm:text-4xl">Build Your Crystal Bikini</h2>
          <p className="mt-4 text-sm leading-relaxed text-pearl/70 sm:text-base">
            Choose your color, your crystal energy, and your zodiac detail. We&apos;ll create a piece
            that feels like it was made for your summer story.
          </p>
          <p className="mt-3 text-sm text-gold">Custom requests start at $150.</p>
          <div className="mt-6">
            <GlowButton href="/custom-bikinis">Request My Custom Bikini</GlowButton>
          </div>
        </div>
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
          <Image
            src="/lunaya/moodboard/crystal-details-placeholder.jpg"
            alt="Custom crystal bikini detail"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
