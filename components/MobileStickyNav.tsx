"use client";

import Link from "next/link";
import { ShoppingBag, Sparkles, Wand2, Store } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export function MobileStickyNav() {
  const { openCart, count } = useCart();

  const items = [
    { label: "Shop", href: "/shop", icon: Store },
    { label: "Quiz", href: "/zodiac-collection#quiz", icon: Sparkles },
    { label: "Custom", href: "/custom-bikinis", icon: Wand2 },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-around border-t border-pearl/10 bg-midnight/95 py-2 backdrop-blur-xl lg:hidden">
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="flex flex-col items-center gap-1 px-4 py-1 text-[11px] text-pearl/70"
        >
          <item.icon size={18} strokeWidth={1.5} />
          {item.label}
        </Link>
      ))}
      <button
        onClick={openCart}
        className="relative flex flex-col items-center gap-1 px-4 py-1 text-[11px] text-pearl/70"
      >
        <ShoppingBag size={18} strokeWidth={1.5} />
        Cart
        {count > 0 && (
          <span className="absolute right-2 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-semibold text-midnight">
            {count}
          </span>
        )}
      </button>
    </nav>
  );
}
