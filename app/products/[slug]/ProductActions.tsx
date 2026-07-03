"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import type { ZodiacProduct } from "@/lib/types";
import { useCart } from "@/lib/cart-context";
import { crystalColors, sizes } from "@/lib/data/options";
import { GlowButton } from "@/components/ui/GlowButton";
import { cn } from "@/lib/utils";

export function ProductActions({ product }: { product: ZodiacProduct }) {
  const { addItem, openCart } = useCart();
  const [topSize, setTopSize] = useState("M");
  const [bottomSize, setBottomSize] = useState("M");
  const [crystalColor, setCrystalColor] = useState(product.crystals[0] ?? crystalColors[0]);
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    addItem({
      slug: product.slug,
      name: `${product.sign} ${product.name}`,
      sign: product.sign,
      price: product.price,
      image: product.image,
      topSize,
      bottomSize,
      quantity,
    });
  };

  const buyNow = () => {
    addToCart();
    openCart();
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-xs uppercase tracking-wider text-pearl/60">Top Size</p>
        <div className="flex gap-2">
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => setTopSize(s)}
              className={cn(
                "h-9 w-9 rounded-full border text-xs transition-colors",
                topSize === s ? "border-gold bg-gold/10 text-gold" : "border-pearl/15 text-pearl/70 hover:border-gold/40"
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs uppercase tracking-wider text-pearl/60">Bottom Size</p>
        <div className="flex gap-2">
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => setBottomSize(s)}
              className={cn(
                "h-9 w-9 rounded-full border text-xs transition-colors",
                bottomSize === s ? "border-gold bg-gold/10 text-gold" : "border-pearl/15 text-pearl/70 hover:border-gold/40"
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs uppercase tracking-wider text-pearl/60">Crystal Option</p>
        <div className="flex flex-wrap gap-2">
          {[...new Set([...product.crystals, ...crystalColors])].slice(0, 6).map((c) => (
            <button
              key={c}
              onClick={() => setCrystalColor(c)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs capitalize transition-colors",
                crystalColor === c ? "border-gold bg-gold/10 text-gold" : "border-pearl/15 text-pearl/70 hover:border-gold/40"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-wider text-pearl/60">Quantity</p>
        <div className="flex items-center gap-3 rounded-full border border-pearl/15 px-3 py-1.5">
          <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="text-pearl/70 hover:text-pearl">
            <Minus size={13} />
          </button>
          <span className="w-4 text-center text-sm">{quantity}</span>
          <button onClick={() => setQuantity((q) => q + 1)} className="text-pearl/70 hover:text-pearl">
            <Plus size={13} />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <GlowButton variant="secondary" onClick={addToCart} className="flex-1">
          Add to Cart
        </GlowButton>
        <GlowButton onClick={buyNow} className="flex-1">
          Buy Now
        </GlowButton>
      </div>
      <p className="text-center text-[11px] text-pearl/40">
        {/* TODO: connect checkout to Shopify Storefront API once SHOPIFY_STOREFRONT_ACCESS_TOKEN is set */}
        Checkout opens with our next drop — add to cart to save your size.
      </p>
    </div>
  );
}
