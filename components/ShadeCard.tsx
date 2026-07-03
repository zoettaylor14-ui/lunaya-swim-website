import Image from "next/image";
import Link from "next/link";
import type { ShadeStory } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { GlowButton } from "@/components/ui/GlowButton";

export function ShadeCard({ shade }: { shade: ShadeStory }) {
  return (
    <div className="group glass-card flex flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1">
      <Link href={`/color-stories/${shade.slug}`} className="relative block aspect-[4/5] w-full overflow-hidden">
        <Image
          src={shade.image}
          alt={shade.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <Badge tone="gold" className="absolute left-3 top-3">
          Coming Soon
        </Badge>
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <Link href={`/color-stories/${shade.slug}`}>
          <h3 className="font-display text-lg text-pearl">{shade.name}</h3>
        </Link>
        <p className="mt-1 text-xs text-pearl/55">
          <span className="text-gold/80">Mood:</span> {shade.moodWords.join(", ").toLowerCase()}
        </p>
        <p className="mt-1 text-xs text-pearl/55">
          <span className="text-gold/80">Crystals:</span> {shade.crystals.join(", ")}
        </p>
        <div className="mt-4">
          <GlowButton href={`/waitlist?shade=${shade.slug}`} variant="secondary" className="w-full">
            Join Waitlist for {shade.shortLabel}
          </GlowButton>
        </div>
      </div>
    </div>
  );
}
