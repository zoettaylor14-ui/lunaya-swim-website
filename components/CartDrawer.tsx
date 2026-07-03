"use client";

import Image from "next/image";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { cn, formatPrice } from "@/lib/utils";
import { GlowButton } from "@/components/ui/GlowButton";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-opacity",
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <div className="absolute inset-0 bg-midnight/70 backdrop-blur-sm" onClick={closeCart} />
      <div
        className={cn(
          "glass-card absolute right-0 top-0 flex h-full w-[88%] max-w-md flex-col bg-navy transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-pearl/10 px-6 py-5">
          <h3 className="font-display text-xl text-pearl">Your Bag</h3>
          <button onClick={closeCart} aria-label="Close cart" className="text-pearl/70 hover:text-pearl">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="text-pearl/60">Your bag is dreaming of the beach — empty for now.</p>
              <GlowButton href="/shop" onClick={closeCart} className="mt-5">
                Shop the Drop
              </GlowButton>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={`${item.slug}-${item.topSize}-${item.bottomSize}`} className="flex gap-4">
                  <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-xl">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-display text-base text-pearl">{item.name}</p>
                        <p className="text-xs text-pearl/50">{item.sign}</p>
                        <p className="text-xs text-pearl/50">
                          Top {item.topSize} · Bottom {item.bottomSize}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.slug, item.topSize, item.bottomSize)}
                        aria-label="Remove item"
                        className="text-pearl/40 hover:text-blush"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-full border border-pearl/15 px-2 py-1">
                        <button
                          onClick={() =>
                            updateQuantity(item.slug, item.topSize, item.bottomSize, item.quantity - 1)
                          }
                          className="text-pearl/70 hover:text-pearl"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-4 text-center text-xs">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.slug, item.topSize, item.bottomSize, item.quantity + 1)
                          }
                          className="text-pearl/70 hover:text-pearl"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="text-sm text-gold">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-pearl/10 px-6 py-5">
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="text-pearl/70">Subtotal</span>
              <span className="text-lg text-gold">{formatPrice(subtotal)}</span>
            </div>
            {/* TODO: connect checkout to Shopify Storefront API once SHOPIFY_STOREFRONT_ACCESS_TOKEN is set */}
            <GlowButton href="/waitlist" onClick={closeCart} className="w-full">
              Checkout — Join Waitlist for Access
            </GlowButton>
            <p className="mt-3 text-center text-[11px] text-pearl/40">
              Checkout opens with our next drop. Join the waitlist to be first in line.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
