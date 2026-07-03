import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { colorStories, getShadeBySlug, getRelatedShades } from "@/lib/data/color-stories";
import { Badge } from "@/components/ui/Badge";
import { GlowButton } from "@/components/ui/GlowButton";
import { ShadeCard } from "@/components/ShadeCard";

export function generateStaticParams() {
  return colorStories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const shade = getShadeBySlug(slug);
  if (!shade) return {};
  return {
    title: `${shade.name} | Lunaya Swim`,
    description: shade.description,
    openGraph: {
      title: `${shade.name} | Lunaya Swim`,
      description: shade.description,
      images: [shade.image],
    },
  };
}

export default async function ShadePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const shade = getShadeBySlug(slug);
  if (!shade) notFound();

  const related = getRelatedShades(slug, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl glass-card">
          <Image src={shade.image} alt={shade.name} fill className="object-cover" priority />
          <Badge tone="gold" className="absolute left-4 top-4">
            Coming Soon
          </Badge>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-gold/80">Color Story Concept</p>
          <h1 className="mt-2 font-display text-4xl text-pearl">{shade.name}</h1>
          <p className="mt-2 text-sm uppercase tracking-wider text-gold">
            {shade.moodWords.join(" · ")}
          </p>
          <p className="mt-4 text-base leading-relaxed text-pearl/70">{shade.description}</p>

          <div className="mt-5">
            <p className="text-xs uppercase tracking-wider text-pearl/50">Crystal Direction</p>
            <p className="mt-1 text-sm text-pearl/80">{shade.crystals.join(" · ")}</p>
          </div>

          <div className="mt-5">
            <p className="text-xs uppercase tracking-wider text-pearl/50">Bikini Concept</p>
            <p className="mt-1 text-sm leading-relaxed text-pearl/70">
              A Brazilian-inspired silhouette — triangle top, tie-side bottoms — with hand-applied
              crystal detail. The exact cut is still being finalized as we build this piece.
            </p>
          </div>

          <div className="mt-8">
            <GlowButton href={`/waitlist?shade=${shade.slug}`} className="w-full sm:w-auto">
              Join Waitlist for {shade.shortLabel}
            </GlowButton>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-pearl/10 pt-12">
        <h2 className="font-display text-xl text-gold">Moodboard</h2>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:max-w-lg">
          {shade.moodImages.map((img) => (
            <div key={img} className="relative aspect-square overflow-hidden rounded-2xl glass-card">
              <Image src={img} alt={`${shade.name} mood`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 border-t border-pearl/10 pt-12">
        <h2 className="font-display text-2xl text-pearl">More Color Concepts</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {related.map((s) => (
            <ShadeCard key={s.slug} shade={s} />
          ))}
        </div>
      </div>
    </div>
  );
}
