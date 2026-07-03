import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { GlowButton } from "@/components/ui/GlowButton";

export function FirstDropSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="glass-card grid gap-8 overflow-hidden rounded-none p-5 sm:p-8 md:grid-cols-2 md:items-center">
        <div>
          <Badge tone="blush">Coming Soon</Badge>
          <h2 className="mt-4 font-display text-3xl text-pearl sm:text-4xl">
            Drop 001: The First Lunaya Collection
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-pearl/70 sm:text-base">
            Our first crystal swimwear drop is being shaped now. Expect limited pieces, hand-finished
            crystal details, Brazilian-inspired silhouettes, tropical colors, and designs made to feel
            like wearable sunlight.
          </p>
          <p className="mt-5 text-xs uppercase tracking-widest text-gold">Drop date coming soon.</p>
          <div className="mt-6">
            <GlowButton href="/waitlist">Get Early Access</GlowButton>
          </div>
        </div>
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-none">
          <Image src="/lunaya/moodboard/flatlay.jpg" alt="Lunaya first drop concept flatlay" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
