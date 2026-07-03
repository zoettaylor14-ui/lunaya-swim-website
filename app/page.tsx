import { Hero } from "@/components/Hero";
import { ColorStories } from "@/components/ColorStories";
import { BrazilianCutsTeaser } from "@/components/BrazilianCuts";
import { Craftsmanship } from "@/components/Craftsmanship";
import { ZodiacStrip } from "@/components/ZodiacStrip";
import { InstagramShowcase } from "@/components/InstagramShowcase";
import { PinterestMoodboard } from "@/components/PinterestMoodboard";
import { WaitlistForm } from "@/components/WaitlistForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    <>
      <Hero />
      <ColorStories />
      <BrazilianCutsTeaser />
      <Craftsmanship />
      <ZodiacStrip />
      <InstagramShowcase />
      <PinterestMoodboard />
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Early Access"
          title="Get Early Access to the Next Drop"
          subtitle="Join the Lunaya list for first access to crystal zodiac bikinis, custom openings, drop dates, and behind-the-scenes previews from Zoe + Lilly."
        />
        <div className="mt-10">
          <WaitlistForm />
        </div>
      </section>
    </>
  );
}
