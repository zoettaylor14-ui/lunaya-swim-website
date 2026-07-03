import type { Metadata } from "next";
import { Suspense } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WaitlistForm } from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Waitlist | Lunaya Swim",
  description:
    "Join the early list for first access to Lunaya Swim drop previews, shade voting, sample reveals, custom openings, and launch-day access.",
};

export default function WaitlistPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <SectionHeading
        eyebrow="Early Access"
        title="Be First to Enter the Lunaya World"
        subtitle="Join the early list for first access to drop previews, shade voting, sample reveals, custom openings, and launch-day access."
      />
      <div className="mt-12">
        <Suspense>
          <WaitlistForm />
        </Suspense>
      </div>
    </div>
  );
}
