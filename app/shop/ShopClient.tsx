"use client";

import { useMemo, useState } from "react";
import { colorStoryProducts } from "@/lib/data/color-stories";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const filterLabels = ["All", "Green", "Purple", "Blue", "Pink", "Brown", "Nude", "White"];
const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low"] as const;

export default function ShopClient() {
  const [color, setColor] = useState<string>("All");
  const [sort, setSort] = useState<(typeof sortOptions)[number]>("Featured");

  const filtered = useMemo(() => {
    let list = colorStoryProducts.filter((p) => color === "All" || p.filterLabel === color);
    if (sort === "Price: Low to High") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "Price: High to Low") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [color, sort]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Shop the Drop"
        title="Crystal Brazilian Swimwear"
        subtitle="Explore Lunaya's color stories, zodiac shades, and crystal-detailed bikinis in limited quantities."
        align="left"
      />

      <div id="colors" className="mt-8 flex scroll-mt-24 flex-wrap items-center gap-2">
        {filterLabels.map((label) => (
          <button
            key={label}
            onClick={() => setColor(label)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-xs transition-colors",
              color === label ? "border-gold bg-gold/10 text-gold" : "border-pearl/15 text-pearl/70 hover:border-gold/40"
            )}
          >
            {label}
          </button>
        ))}

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as (typeof sortOptions)[number])}
          className="ml-auto rounded-full border border-pearl/15 bg-pearl/5 px-4 py-2 text-xs text-pearl outline-none"
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
