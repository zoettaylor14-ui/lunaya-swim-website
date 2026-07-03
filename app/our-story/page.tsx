import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InstagramShowcase } from "@/components/InstagramShowcase";

export const metadata: Metadata = {
  title: "Our Story | Lunaya Swim",
  description: "Made by Zoe + Lilly — the story behind Lunaya Swim's crystal astrology swimwear.",
};

const sections = [
  {
    title: "The Idea",
    copy: "Lunaya started as an idea between two girls who wanted swimwear to feel more personal, more feminine, and more connected to energy. We were tired of bikinis that felt mass-produced and forgettable.",
  },
  {
    title: "Why Astrology",
    copy: "Your sign says something about how you move through the world — bold, soft, magnetic, dreamy. We wanted swimwear that speaks that same language, piece by piece.",
  },
  {
    title: "Why Crystals",
    copy: "Crystals have always felt personal to us — a little bit of energy you can wear. Every Lunaya piece uses hand-placed crystal detail instead of cheap rhinestone shortcuts.",
  },
  {
    title: "How Each Piece Is Made",
    copy: "Every suit is finished by hand in small batches. We place each crystal ourselves, which means small differences happen — and that's what makes every piece unique.",
  },
  {
    title: "Behind the Scenes",
    copy: "Most days it's just the two of us, a table covered in crystals, and a playlist. We build Lunaya between real jobs, real school, and real life — one drop at a time.",
  },
  {
    title: "Limited Drop Philosophy",
    copy: "We don't want a warehouse of swimwear. We want pieces that feel special. When a drop sells out, it may not come back in the same design — that's intentional.",
  },
  {
    title: "Follow the Journey",
    copy: "We're building this in public — the wins, the chaos, the late nights finishing a custom order before a deadline. Follow along on Instagram for the real behind-the-scenes.",
  },
];

export default function OurStoryPage() {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <SectionHeading eyebrow="Our Story" title="Made by Zoe + Lilly" />
        <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-3xl glass-card">
          <Image
            src="/lunaya/founders/zoe-lilly-placeholder.jpg"
            alt="Zoe and Lilly, founders of Lunaya Swim"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-pearl/75">
          Lunaya started as an idea between two girls who wanted swimwear to feel more personal, more
          feminine, and more connected to energy. Every piece is inspired by astrology, crystals, beach
          confidence, and the feeling of becoming the version of yourself you see in your head.
        </p>

        <div className="mt-16 space-y-12">
          {sections.map((s) => (
            <div key={s.title} className="border-b border-pearl/10 pb-12 last:border-none">
              <h2 className="font-display text-2xl text-gold sm:text-3xl">{s.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-pearl/70 sm:text-base">{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
      <InstagramShowcase />
    </div>
  );
}
