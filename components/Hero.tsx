import Image from "next/image";
import { GlowButton } from "@/components/ui/GlowButton";

const badges = ["Hand-Applied Crystals", "Brazilian Cuts", "Zodiac Inspired", "Made by Zoe + Lilly"];

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden sm:min-h-[95vh]">
      <Image
        src="/lunaya/backgrounds/hero.jpg"
        alt="Golden hour ocean, crystal swimwear mood"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-midnight/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-plum/40 via-transparent to-navy/40" />
      <div className="sparkle-overlay absolute inset-0 opacity-40" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-16 pt-32 text-center sm:px-6 sm:pb-24">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold">
          Limited Drop 001 · Zodiac Heat
        </p>
        <h1 className="text-gradient-gold font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
          Elite Brazilian Bikinis for <em className="not-italic text-peach">Sun-Drenched</em> Goddesses
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-pearl/80 sm:text-lg">
          Hand-finished crystal swimwear, iconic Brazilian cuts, and color stories made for your sign,
          your skin, and your summer alter ego.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <GlowButton href="/shop" variant="primary">
            Shop the Drop
          </GlowButton>
          <GlowButton href="/shop#colors" variant="secondary">
            Explore Colors
          </GlowButton>
          <GlowButton href="/custom-bikinis" variant="secondary">
            Build Custom
          </GlowButton>
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-2.5">
          {badges.map((b) => (
            <span
              key={b}
              className="glass-card rounded-full px-3.5 py-1.5 text-[11px] text-pearl/80"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
