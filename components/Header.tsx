"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { cn } from "@/lib/utils";
import { PinterestIcon } from "@/components/ui/PinterestIcon";
import { InstagramIcon } from "@/components/ui/InstagramIcon";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Zodiac Collection", href: "/zodiac-collection" },
  { label: "Custom Bikinis", href: "/custom-bikinis" },
  { label: "Crystal Guide", href: "/crystal-guide" },
  { label: "Size Guide", href: "/size-guide" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openCart, count } = useCart();

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-pearl/10 bg-midnight/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/lunaya/logo-primary.svg"
              alt="Lunaya Swim"
              width={132}
              height={36}
              priority
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-pearl/80 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/lunaya.swimm/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lunaya on Instagram"
              className="hidden text-pearl/70 transition-colors hover:text-gold sm:block"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="https://pin.it/43ne08NLd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lilly's Pinterest moodboard"
              className="hidden text-pearl/70 transition-colors hover:text-gold sm:block"
            >
              <PinterestIcon size={18} />
            </a>
            <button
              onClick={openCart}
              aria-label="Open cart"
              className="relative text-pearl/70 transition-colors hover:text-gold"
            >
              <ShoppingBag size={19} strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-midnight">
                  {count}
                </span>
              )}
            </button>
            <Link
              href="/waitlist"
              className="hidden rounded-full bg-gradient-to-r from-gold to-peach px-4 py-2 text-xs font-medium text-midnight transition hover:brightness-110 md:inline-flex"
            >
              Join Waitlist
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="text-pearl/80 lg:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* mobile slide-out menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 transition-opacity lg:hidden",
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div
          className="absolute inset-0 bg-midnight/70 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[82%] max-w-sm bg-navy transition-transform duration-300 glass-card",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-6 py-5">
            <Image
              src="/lunaya/logo-primary.svg"
              alt="Lunaya Swim"
              width={120}
              height={32}
              className="h-7 w-auto"
            />
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="text-pearl">
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-pearl/10 py-3.5 text-lg font-display text-pearl/90 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-5 px-6 py-4">
            <a href="https://www.instagram.com/lunaya.swimm/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon size={20} className="text-pearl/70" />
            </a>
            <a href="https://pin.it/43ne08NLd" target="_blank" rel="noopener noreferrer">
              <PinterestIcon size={20} className="text-pearl/70" />
            </a>
          </div>
          <div className="px-6 pt-2">
            <Link
              href="/waitlist"
              onClick={() => setMobileOpen(false)}
              className="block w-full rounded-full bg-gradient-to-r from-gold to-peach px-4 py-3 text-center text-sm font-medium text-midnight"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
