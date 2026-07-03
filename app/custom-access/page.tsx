import type { Metadata } from "next";
import { Palette, Gem, Star, Send, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CustomRequestForm } from "@/components/CustomRequestForm";

export const metadata: Metadata = {
  title: "Custom Access | Lunaya Swim",
  description:
    "Request early access to a custom crystal bikini from Zoe + Lilly. Choose your shade, crystal energy, and zodiac influence before the full drop launches.",
};

const steps = [
  { icon: Palette, title: "Pick Your Shade", copy: "Choose the dream bikini shade and fit direction you're drawn to." },
  { icon: Gem, title: "Choose Your Crystals", copy: "Pick a crystal color and energy that matches your vision." },
  { icon: Star, title: "Share Your Sign", copy: "Tell us your zodiac sign so we can weave in that energy." },
  { icon: Send, title: "Submit Your Request", copy: "Tell us your sizing direction, timeline, and any notes." },
  { icon: CheckCircle2, title: "We Review", copy: "Zoe + Lilly review every request when custom spots open." },
];

export default function CustomAccessPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <SectionHeading
        eyebrow="Limited Early Interest"
        title="Want a custom crystal bikini first?"
        subtitle="Before the full drop launches, we'll be opening a limited number of custom request spots. Choose your shade, crystal energy, zodiac influence, and fit direction, then we'll review your request when custom spots open."
      />

      <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5">
        {steps.map((step, i) => (
          <div key={step.title} className="glass-card rounded-none p-4 text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-none bg-gold/10 text-gold">
              <step.icon size={18} strokeWidth={1.5} />
            </div>
            <p className="text-[11px] text-gold/70">Step {i + 1}</p>
            <p className="mt-1 font-display text-sm text-pearl">{step.title}</p>
            <p className="mt-1 text-[11px] leading-relaxed text-pearl/50">{step.copy}</p>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <CustomRequestForm />
      </div>
    </div>
  );
}
