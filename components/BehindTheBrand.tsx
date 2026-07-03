import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";

export function BehindTheBrand() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl glass-card">
          <Image src="/lunaya/founders/zoe-lilly-placeholder.jpg" alt="Zoe + Lilly, building Lunaya Swim" fill className="object-cover" />
        </div>
        <div>
          <SectionHeading
            eyebrow="Founders"
            title="Made by Zoe + Lilly"
            subtitle="Lunaya started as an idea between two girls building a swimwear world that feels personal, feminine, tropical, and full of energy. The brand is still in its first chapter, and every detail is being shaped with intention, from the colors to the crystal placements to the way each piece will make someone feel."
            align="left"
          />
          <div className="mt-6">
            <GlowButton href="https://www.instagram.com/lunaya.swimm/" variant="secondary">
              Follow the Build
            </GlowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
