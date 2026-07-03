import { GlowButton } from "@/components/ui/GlowButton";

const zodiacSymbols = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];

export function ZodiacStrip() {
  return (
    <section className="bg-[#090b08] px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1.5fr_1fr] md:items-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Zodiac Collection</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-pearl sm:text-4xl">
            Your Sign. Your Energy. Your Lunaya.
          </h2>
        </div>
        <div className="grid grid-cols-6 gap-3">
          {zodiacSymbols.map((symbol, i) => (
            <span
              key={i}
              className="flex h-14 w-14 items-center justify-center justify-self-center rounded-full border border-gold/50 bg-gold/5 text-2xl text-gold"
            >
              {symbol}
            </span>
          ))}
        </div>
        <div>
          <p className="text-sm text-pearl/70">
            Crystal-charged pieces inspired by the cosmos. Find the shade, cut, and crystal energy that
            feels like you.
          </p>
          <div className="mt-5">
            <GlowButton href="/zodiac-collection" variant="secondary">
              Explore Zodiac
            </GlowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
