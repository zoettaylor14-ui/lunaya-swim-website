import type { Metadata } from "next";
import { Palette, Gem, MapPin, Send, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CustomRequestForm } from "@/components/CustomRequestForm";

export const metadata: Metadata = {
  title: "Custom Bikinis | Lunaya Swim",
  description:
    "Build your own crystal astrology bikini with Zoe + Lilly. Choose your color, crystal energy, and zodiac detail.",
};

const steps = [
  { icon: Palette, title: "Pick Your Base", copy: "Choose your bikini color, top style, and bottom style." },
  { icon: Gem, title: "Choose Your Crystals", copy: "Pick a crystal color and energy that matches your vision." },
  { icon: MapPin, title: "Choose Your Placement", copy: "Center chest, straps, hip detail, zodiac symbol, or fully custom." },
  { icon: Send, title: "Submit Your Request", copy: "Tell us your sizing, budget, and timeline." },
  { icon: CheckCircle2, title: "We Review + Confirm", copy: "Zoe + Lilly review every detail and confirm before we begin." },
];

export default function CustomBikinisPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Custom Available"
        title="Build Your Crystal Bikini"
        subtitle="Choose your color, your crystal energy, and your zodiac detail. We'll create a piece that feels like it was made for your summer story."
      />

      <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5">
        {steps.map((step, i) => (
          <div key={step.title} className="glass-card rounded-2xl p-4 text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold">
              <step.icon size={18} strokeWidth={1.5} />
            </div>
            <p className="text-[11px] text-gold/70">Step {i + 1}</p>
            <p className="mt-1 font-display text-sm text-pearl">{step.title}</p>
            <p className="mt-1 text-[11px] leading-relaxed text-pearl/50">{step.copy}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center text-sm text-pearl/50">
        Custom requests start at <span className="text-gold">$150</span>.
      </div>

      <div className="mt-14">
        <CustomRequestForm />
      </div>
    </div>
  );
}
