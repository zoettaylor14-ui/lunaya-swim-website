"use client";

import Image from "next/image";
import { useState } from "react";
import { Film } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductGallery({ image, name }: { image: string; name: string }) {
  const slots = [
    { label: "Front", image },
    { label: "Back", image },
    { label: "Side", image },
    { label: "Crystal Detail", image },
  ];
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl glass-card">
        <Image src={slots[active].image} alt={`${name} — ${slots[active].label}`} fill className="object-cover" priority />
        <div className="absolute bottom-3 left-3 rounded-full glass-card px-3 py-1 text-[11px] text-pearl/80">
          {slots[active].label}
        </div>
      </div>
      <div className="mt-3 grid grid-cols-5 gap-2">
        {slots.map((slot, i) => (
          <button
            key={slot.label}
            onClick={() => setActive(i)}
            className={cn(
              "relative aspect-square overflow-hidden rounded-xl border transition-colors",
              active === i ? "border-gold" : "border-pearl/15 opacity-70 hover:opacity-100"
            )}
          >
            <Image src={slot.image} alt={slot.label} fill className="object-cover" />
          </button>
        ))}
        <div className="relative flex aspect-square items-center justify-center rounded-xl border border-dashed border-pearl/20 text-pearl/40">
          <Film size={16} />
        </div>
      </div>
    </div>
  );
}
