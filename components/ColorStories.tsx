"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="colors" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-6">
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="relative mt-10">
        <div
          ref={scrollerRef}
          className="scrollbar-hide flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-1"
        >
          {colorStories.map((shade) => (
            <div
              key={shade.slug}
              className="w-[42%] shrink-0 snap-start sm:w-[28%] md:w-[22%] lg:w-[17%]"
            >
              <ShadeCard shade={shade} />
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll to previous color stories"
          className="glass-card absolute left-1 top-1/2 hidden -translate-y-1/2 p-2 text-pearl/80 transition-colors hover:text-gold sm:flex"
        >
          <ChevronLeft size={20} strokeWidth={1.5} />
        </button>
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll to next color stories"
          className="glass-card absolute right-1 top-1/2 hidden -translate-y-1/2 p-2 text-pearl/80 transition-colors hover:text-gold sm:flex"
        >
          <ChevronRight size={20} strokeWidth={1.5} />
        </button>
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
