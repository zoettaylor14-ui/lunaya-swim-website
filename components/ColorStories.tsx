import { colorStories } from "@/lib/data/color-stories";
import { ShadeCard } from "@/components/ShadeCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";

export function ColorStories({
  eyebrow = "Color Concepts",
  title = "Color Stories",
  subtitle = "The shades taking shape for the first Lunaya drop — each one a mood, a crystal direction, and a piece still being built.",
  cta = true,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  cta?: boolean;
}) {
  return (
    <section id="colors" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-6">
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        {colorStories.map((shade) => (
          <ShadeCard key={shade.slug} shade={shade} />
        ))}
      </div>
      {cta && (
        <div className="mt-8 flex justify-center">
          <GlowButton href="/color-stories" variant="secondary">
            See All Color Stories
          </GlowButton>
        </div>
      )}
    </section>
  );
}
