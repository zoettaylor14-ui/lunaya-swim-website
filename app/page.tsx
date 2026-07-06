import { Suspense } from "react";
import { Hero } from "@/components/Hero";
import { ColorStories } from "@/components/ColorStories";
import { FirstDropSection } from "@/components/FirstDropSection";
import { CustomAccessTeaser } from "@/components/CustomAccessTeaser";
import { InstagramShowcase } from "@/components/InstagramShowcase";
import { WaitlistForm } from "@/components/WaitlistForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    <>
      <Hero />
      <ColorStories />
      <FirstDropSection />
      <CustomAccessTeaser />
      <InstagramShowcase />
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
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
