import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { GlowButton } from "@/components/ui/GlowButton";

export function CustomAccessTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="glass-card grid gap-8 overflow-hidden rounded-none p-5 sm:p-8 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-none md:order-1">
          <Image src="/lunaya/moodboard/craft.jpg" alt="Custom crystal bikini concept detail" fill className="object-cover" />
        </div>
        <div className="md:order-2">
          <Badge tone="crystal">Limited Early Interest</Badge>
          <h2 className="mt-4 font-display text-3xl text-pearl sm:text-4xl">
            Want a custom crystal bikini first?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-pearl/70 sm:text-base">
            Before the full drop launches, we&apos;ll be opening a limited number of custom request
            spots. Choose your shade, crystal energy, zodiac influence, and fit direction, then
            we&apos;ll review your request when custom spots open.
          </p>
          <div className="mt-6">
            <GlowButton href="/custom-access">Request Custom Access</GlowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
