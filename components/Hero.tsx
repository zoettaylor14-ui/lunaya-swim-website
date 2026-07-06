import Image from "next/image";
import { GlowButton } from "@/components/ui/GlowButton";

const badges = ["Crystal Details Coming Soon", "Brazilian-Inspired Cuts", "Zodiac Energy"];

export function Hero() {
  return (
    <section className="relative flex min-h-[68vh] items-end overflow-hidden sm:min-h-[74vh]">
      <Image
        src="/lunaya-swim-banner.png"
        alt="Golden hour ocean, crystal swimwear mood"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-midnight/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-plum/30 via-transparent to-navy/30" />
      <div className="sparkle-overlay absolute inset-0 opacity-40" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pb-10 pt-20 text-center sm:px-6 sm:pb-14">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-gold">
          Coming Soon
        </p>
        <h1 className="text-gradient-gold font-display text-3xl leading-[1.05] sm:text-4xl md:text-5xl">
          Lunaya Swim Is Coming.
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-pearl/80 sm:text-base">
          Crystal-detailed, Brazilian-inspired swimwear designed around sun, skin, signs, and the
          energy you bring to the water.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
          <GlowButton href="/waitlist" variant="primary">
            Join the Waitlist
          </GlowButton>
          <GlowButton href="https://www.instagram.com/lunaya.swimm/" variant="secondary">
            Follow on Instagram
          </GlowButton>
          <GlowButton href="/moodboard" variant="secondary">
            Explore the Moodboard
          </GlowButton>
        </div>

        <div className="mx-auto mt-7 flex max-w-xl flex-wrap items-center justify-center gap-2">
          {badges.map((b) => (
            <span
              key={b}
              className="glass-card rounded-none px-3 py-1 text-[10px] text-pearl/80"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
