import { Hero } from "@/components/Hero";
import { ZodiacPreview } from "@/components/ZodiacPreview";
import { QuizSection } from "@/components/QuizSection";
import { DropSection } from "@/components/DropSection";
import { CustomCrystalSection } from "@/components/CustomCrystalSection";
import { CrystalGuidePreview } from "@/components/CrystalGuidePreview";
import { InstagramShowcase } from "@/components/InstagramShowcase";
import { PinterestMoodboard } from "@/components/PinterestMoodboard";
import { FoundersSection } from "@/components/FoundersSection";
import { WaitlistForm } from "@/components/WaitlistForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    <>
      <Hero />
      <ZodiacPreview />
      <QuizSection />
      <DropSection />
      <CustomCrystalSection />
      <CrystalGuidePreview />
      <InstagramShowcase />
      <PinterestMoodboard />
      <FoundersSection />
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
