import type { Crystal } from "@/lib/types";

export function CrystalCard({ crystal }: { crystal: Crystal }) {
  return (
    <div className="glass-card flex flex-col gap-3 rounded-none p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-3">
        <span
          className="h-9 w-9 shrink-0 rounded-none border border-pearl/30 sparkle-overlay"
          style={{ backgroundColor: crystal.color }}
        />
        <h3 className="font-display text-xl text-pearl">{crystal.name}</h3>
      </div>
      <p className="text-sm text-pearl/70">
        <span className="text-gold">Meaning: </span>
        {crystal.meaning}
      </p>
      <p className="text-sm text-pearl/60">
        <span className="text-gold">Best for: </span>
        {crystal.bestFor}
      </p>
    </div>
  );
}
