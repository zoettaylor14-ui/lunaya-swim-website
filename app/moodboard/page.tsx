import type { Metadata } from "next";
import { InstagramShowcase } from "@/components/InstagramShowcase";
import { PinterestMoodboard } from "@/components/PinterestMoodboard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Moodboard | Lunaya Swim",
  description:
    "The visual energy behind Lunaya Swim — tropical heat, crystal details, beach goddess styling, and the journey from @lunaya.swimm and Lilly's Pinterest board.",
};

export default function MoodboardPage() {
  return (
    <div className="pt-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <SectionHeading
          eyebrow="The Brand World"
          title="The Lunaya Moodboard"
          subtitle="Tropical heat, crystal details, beach goddess styling, fruit tones, jungle greens, and golden skin — the world Lunaya is being built inside of."
        />
      </div>
      <InstagramShowcase />
      <PinterestMoodboard />
    </div>
  );
}
