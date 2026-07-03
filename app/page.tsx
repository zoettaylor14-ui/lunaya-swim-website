import { Suspense } from "react";
import { Hero } from "@/components/Hero";
import { BrandTeaser } from "@/components/BrandTeaser";
import { ColorStories } from "@/components/ColorStories";
import { FirstDropSection } from "@/components/FirstDropSection";
import { CustomAccessTeaser } from "@/components/CustomAccessTeaser";
import { BehindTheBrand } from "@/components/BehindTheBrand";
import { InstagramShowcase } from "@/components/InstagramShowcase";
import { PinterestMoodboard } from "@/components/PinterestMoodboard";
import { WaitlistForm } from "@/components/WaitlistForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandTeaser />
      <ColorStories />
      <FirstDropSection />
      <CustomAccessTeaser />
      <BehindTheBrand />
      <InstagramShowcase />
      <PinterestMoodboard />
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Early Access"
          title="Be First to Enter the Lunaya World"
          subtitle="Join the early list for first access to drop previews, shade voting, sample reveals, custom openings, and launch-day access."
        />
        <div className="mt-10">
          <Suspense>
            <WaitlistForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
