import Image from "next/image";
import Link from "next/link";
import { brazilianCutStyles } from "@/lib/data/brazilian-cuts";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";
import { Badge } from "@/components/ui/Badge";

function StyleCard({ style }: { style: (typeof brazilianCutStyles)[number] }) {
  const content = (
    <>
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={style.image}
          alt={style.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 text-center">
        <h3 className="font-display text-lg text-pearl">{style.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs text-pearl/55">{style.description}</p>
        <span className="mt-3 text-gold">{style.price}</span>
      </div>
    </>
  );

  return (
    <Link
      href={style.href ?? "/shop"}
      className="group glass-card flex flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1"
    >
      {content}
    </Link>
  );
}

export function BrazilianCutsTeaser() {
  const preview = brazilianCutStyles.slice(0, 4);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="grid gap-10 md:grid-cols-[0.85fr_1.45fr] md:items-center">
        <div>
          <Badge tone="gold">Brazilian Cut Studio</Badge>
          <h2 className="mt-4 font-display text-3xl text-pearl sm:text-4xl">Iconic Brazilian Cuts</h2>
          <p className="mt-4 text-sm leading-relaxed text-pearl/70 sm:text-base">
            Crafted to flatter. Designed to stand out. Tie-side silhouettes, crystal triangle tops,
            cheeky bottoms, and micro-glam moments made for confident beach days.
          </p>
          <div className="mt-6">
            <GlowButton href="/brazilian-cuts">Shop All Styles</GlowButton>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {preview.map((style) => (
            <StyleCard key={style.name} style={style} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function BrazilianCutsGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Fit Studio"
        title="Iconic Brazilian Cuts"
        subtitle="Tie-side, cheeky, micro glam, and adjustable silhouettes designed to flatter and shine."
      />
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {brazilianCutStyles.map((style) => (
          <StyleCard key={style.name} style={style} />
        ))}
      </div>
    </section>
  );
}
