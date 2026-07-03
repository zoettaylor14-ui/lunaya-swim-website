"use client";

import { useMemo, useState } from "react";
import { zodiacProducts } from "@/lib/data/zodiac-products";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const allCrystals = Array.from(new Set(zodiacProducts.flatMap((p) => p.crystals)));
const allSigns = zodiacProducts.map((p) => p.sign);
const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low"] as const;

export default function ShopClient() {
  const [sign, setSign] = useState<string | null>(null);
  const [crystal, setCrystal] = useState<string | null>(null);
  const [customOnly, setCustomOnly] = useState(false);
  const [sort, setSort] = useState<(typeof sortOptions)[number]>("Featured");

  const filtered = useMemo(() => {
    let list = zodiacProducts.filter((p) => {
      if (sign && p.sign !== sign) return false;
      if (crystal && !p.crystals.includes(crystal)) return false;
      if (customOnly && !p.badges.includes("Custom Available")) return false;
      return true;
    });
    if (sort === "Price: Low to High") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "Price: High to Low") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [sign, crystal, customOnly, sort]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Shop All"
        title="Every Piece, One Place"
        subtitle="Filter by sign, crystal color, or find the pieces open for custom orders."
        align="left"
      />

      <div className="mt-8 flex flex-wrap items-center gap-2">
        <FilterChip active={sign === null} onClick={() => setSign(null)}>
          All Signs
        </FilterChip>
        {allSigns.map((s) => (
          <FilterChip key={s} active={sign === s} onClick={() => setSign(sign === s ? null : s)}>
            {s}
          </FilterChip>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <FilterChip active={crystal === null} onClick={() => setCrystal(null)}>
            All Crystals
          </FilterChip>
          {allCrystals.map((c) => (
            <FilterChip key={c} active={crystal === c} onClick={() => setCrystal(crystal === c ? null : c)}>
              {c}
            </FilterChip>
          ))}
          <FilterChip active={customOnly} onClick={() => setCustomOnly((v) => !v)}>
            Custom Available
          </FilterChip>
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as (typeof sortOptions)[number])}
          className="rounded-full border border-pearl/15 bg-pearl/5 px-4 py-2 text-xs text-pearl outline-none"
        >
          {sortOptions.map((opt) => (
            <option key={opt} value={opt} className="bg-navy">
              {opt}
            </option>
          ))}
        </select>
      </div>

      <p className="mt-6 text-xs text-pearl/40">{filtered.length} pieces</p>

      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-pearl/50">No pieces match those filters yet.</p>
      )}
    </div>
  );
}

function FilterChip({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-xs transition-colors",
        active ? "border-gold bg-gold/10 text-gold" : "border-pearl/15 text-pearl/70 hover:border-gold/40"
      )}
    >
      {children}
    </button>
  );
}
