import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";

export const metadata: Metadata = {
  title: "Size Guide | Lunaya Swim",
  description: "Top and bottom sizing, coverage notes, and custom sizing help for Lunaya Swim crystal bikinis.",
};

const topSizes = [
  { size: "XS", bust: "30–31\"", cup: "A/B" },
  { size: "S", bust: "32–33\"", cup: "B/C" },
  { size: "M", bust: "34–35\"", cup: "C/D" },
  { size: "L", bust: "36–38\"", cup: "D/DD" },
  { size: "XL", bust: "39–41\"", cup: "DD/E" },
];

const bottomSizes = [
  { size: "XS", waist: "24–25\"", hip: "34–35\"" },
  { size: "S", waist: "26–27\"", hip: "36–37\"" },
  { size: "M", waist: "28–29\"", hip: "38–39\"" },
  { size: "L", waist: "30–32\"", hip: "40–42\"" },
  { size: "XL", waist: "33–35\"", hip: "43–45\"" },
];

export default function SizeGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <SectionHeading eyebrow="Fit Help" title="Size Guide" subtitle="Find your fit before your next drop or custom order." />

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        <div className="glass-card overflow-hidden rounded-2xl">
          <p className="border-b border-pearl/10 px-5 py-3 text-xs uppercase tracking-wider text-gold">Top Sizing</p>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-pearl/50">
                <th className="px-5 py-2 font-normal">Size</th>
                <th className="px-5 py-2 font-normal">Bust</th>
                <th className="px-5 py-2 font-normal">Cup</th>
              </tr>
            </thead>
            <tbody>
              {topSizes.map((row) => (
                <tr key={row.size} className="border-t border-pearl/5">
                  <td className="px-5 py-2.5 text-pearl">{row.size}</td>
                  <td className="px-5 py-2.5 text-pearl/70">{row.bust}</td>
                  <td className="px-5 py-2.5 text-pearl/70">{row.cup}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="glass-card overflow-hidden rounded-2xl">
          <p className="border-b border-pearl/10 px-5 py-3 text-xs uppercase tracking-wider text-gold">Bottom Sizing</p>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-pearl/50">
                <th className="px-5 py-2 font-normal">Size</th>
                <th className="px-5 py-2 font-normal">Waist</th>
                <th className="px-5 py-2 font-normal">Hip</th>
              </tr>
            </thead>
            <tbody>
              {bottomSizes.map((row) => (
                <tr key={row.size} className="border-t border-pearl/5">
                  <td className="px-5 py-2.5 text-pearl">{row.size}</td>
                  <td className="px-5 py-2.5 text-pearl/70">{row.waist}</td>
                  <td className="px-5 py-2.5 text-pearl/70">{row.hip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-10 space-y-4 text-sm leading-relaxed text-pearl/70">
        <p>
          <span className="text-gold">Coverage notes: </span>
          Most Lunaya bottoms run cheeky-to-moderate coverage. Full coverage is available on request for
          most styles.
        </p>
        <p>
          <span className="text-gold">Adjustable fit: </span>
          Triangle tops and tie-side bottoms adjust several inches in either direction — when between
          sizes, we recommend sizing down.
        </p>
        <p>
          <span className="text-gold">Custom sizing: </span>
          Every custom bikini is made to your exact measurements. You&apos;ll be asked for detailed
          measurements during the custom request process.
        </p>
      </div>

      <div className="glass-card mt-10 flex flex-col items-center gap-4 rounded-2xl p-8 text-center">
        <p className="font-display text-xl text-pearl">Between sizes?</p>
        <p className="max-w-md text-sm text-pearl/60">
          We&apos;re happy to help you find the right fit — reach out and we&apos;ll walk you through it.
        </p>
        <GlowButton href="/contact">Get Sizing Help</GlowButton>
      </div>
    </div>
  );
}
