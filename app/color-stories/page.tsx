import type { Metadata } from "next";
import { colorStories } from "@/lib/data/color-stories";
import { ShadeCard } from "@/components/ShadeCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Color Stories | Lunaya Swim",
  description:
    "Seven color story concepts taking shape for Lunaya Swim's first crystal bikini drop. Coming soon — join the waitlist for the shade that speaks to you.",
};

export default function ColorStoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <SectionHeading
        eyebrow="Color Concepts"
        title="Color Stories"
        subtitle="The shades taking shape for the first Lunaya drop — each one a mood, a crystal direction, and a piece still being built. Nothing here is available to buy yet."
        align="left"
      />
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {colorStories.map((shade) => (
          <ShadeCard key={shade.slug} shade={shade} />
        ))}
      </div>
    </div>
  );
}
