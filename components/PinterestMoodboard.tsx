import Image from "next/image";
import { pinterest } from "@/lib/data/social-links";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";
import { PinterestIcon } from "@/components/ui/PinterestIcon";

// Do not scrape Pinterest. Only use Pinterest images publicly if they are owned,
// licensed, or approved by Zoe and Lilly — otherwise these render as labeled
// placeholder mood cards that link out to Lilly's board.
export function PinterestMoodboard() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Moodboard"
        title="Lilly's Moodboard"
        subtitle="The visual energy behind Lunaya: tropical heat, crystal details, beach goddess styling, fruit tones, jungle greens, and golden skin."
      />
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
        {pinterest.fallbackCards.map((card) => (
          <a
            key={card.label}
            href={pinterest.boardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl glass-card"
          >
            <Image
              src={card.image}
              alt={card.label}
              fill
              className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/10 to-transparent" />
            <p className="absolute bottom-4 left-4 font-display text-lg text-pearl">{card.label}</p>
          </a>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <GlowButton href={pinterest.boardUrl} variant="secondary">
          <PinterestIcon size={16} />
          View Lilly&apos;s Pinterest Board
        </GlowButton>
      </div>
    </section>
  );
}
