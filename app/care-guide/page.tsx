import type { Metadata } from "next";
import { Droplets, Hand, Ban, Sun, Wind, Gem, Package } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Care Guide | Lunaya Swim",
  description: "How to care for your handmade crystal bikini — washing, drying, and storage instructions.",
};

const careSteps = [
  { icon: Droplets, title: "Rinse After Every Swim", copy: "Rinse with cool water after chlorine, salt water, or sunscreen." },
  { icon: Hand, title: "Hand Wash Only", copy: "Use a gentle, cold hand wash to protect crystal placement." },
  { icon: Ban, title: "No Machine Wash", copy: "Machine washing loosens hand-placed crystals over time." },
  { icon: Ban, title: "No Tumble Dry", copy: "Heat can warp fabric and loosen crystal adhesive." },
  { icon: Wind, title: "Lay Flat to Dry", copy: "Always lay flat in the shade rather than hanging or wringing." },
  { icon: Sun, title: "Avoid Rough Surfaces", copy: "Rough pool edges and sand can snag crystal detail." },
  { icon: Gem, title: "Avoid Oils on Crystals", copy: "Keep sunscreen and oils off crystal areas when possible." },
  { icon: Package, title: "Store Flat or in a Garment Bag", copy: "Be gentle with hand-placed crystals during storage." },
];

export default function CareGuidePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Care Guide"
        title="How to Care for Your Crystal Bikini"
        subtitle="Each Lunaya piece is finished by hand — a little care keeps the sparkle intact all season."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {careSteps.map((step) => (
          <div key={step.title} className="glass-card rounded-2xl p-5">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold">
              <step.icon size={18} strokeWidth={1.5} />
            </div>
            <p className="font-display text-base text-pearl">{step.title}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-pearl/55">{step.copy}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 glass-card rounded-2xl p-6 text-center">
        <h2 className="font-display text-xl text-gold">Shipping &amp; Returns</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-pearl/70">
          Full shipping, timing, and return details will be announced when Drop 001 launches. Join the{" "}
          <a href="/waitlist" className="text-gold underline underline-offset-2">
            waitlist
          </a>{" "}
          to be the first to hear.
        </p>
      </div>
    </div>
  );
}
