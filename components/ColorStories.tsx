import { colorStoryProducts } from "@/lib/data/color-stories";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";

export function ColorStories({
  eyebrow = "Drop 001 · Zodiac Heat",
  title = "Color Stories",
  subtitle = "Seven shades. Endless energy. Choose the color that matches your mood, your sign, or the beach version of you.",
  cta = true,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  cta?: boolean;
}) {
  return (
    <section id="colors" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6">
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        {colorStoryProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
      {cta && (
        <div className="mt-8 flex justify-center">
          <GlowButton href="/shop" variant="secondary">
            View All Colors
          </GlowButton>
        </div>
      )}
    </section>
  );
}
