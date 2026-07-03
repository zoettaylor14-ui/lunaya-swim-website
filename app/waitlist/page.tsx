import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WaitlistForm } from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Waitlist | Lunaya Swim",
  description: "Get early access to the next Lunaya Swim drop, custom openings, and behind-the-scenes previews.",
};

export default function WaitlistPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Early Access"
        title="Get Early Access to the Next Drop"
        subtitle="Join the Lunaya list for first access to crystal zodiac bikinis, custom openings, drop dates, and behind-the-scenes previews from Zoe + Lilly."
      />
      <div className="mt-12">
        <WaitlistForm />
      </div>
    </div>
  );
}
