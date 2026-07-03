import Image from "next/image";

const icons = [
  { symbol: "✦", label: "Hand-Applied Crystals" },
  { symbol: "☼", label: "Limited Quantities" },
  { symbol: "♢", label: "Custom Details" },
  { symbol: "☾", label: "Zodiac Energy" },
];

export function Craftsmanship() {
  return (
    <section className="grid overflow-hidden md:grid-cols-3">
      <div className="relative hidden min-h-[280px] md:block">
        <Image src="/lunaya/moodboard/craft.jpg" alt="Hand-finished Lunaya crystal detail" fill className="object-cover" />
      </div>
      <div className="bg-navy px-6 py-14 text-center sm:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Handmade. Heartmade.</p>
        <h2 className="mt-3 font-display text-3xl leading-tight text-pearl sm:text-4xl">
          Crafted Like Jewelry, Made for Sunshine
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-pearl/70">
          Every Lunaya piece is hand-finished with premium crystals, soft swim fabrics, and detail that
          makes each suit feel personal.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4">
          {icons.map((icon) => (
            <div key={icon.label} className="text-center">
              <p className="font-display text-xl text-gold">{icon.symbol}</p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-pearl/70">{icon.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative min-h-[280px]">
        <Image src="/lunaya/moodboard/flatlay.jpg" alt="Lunaya crystal bikini flatlay" fill className="object-cover" />
      </div>
    </section>
  );
}
