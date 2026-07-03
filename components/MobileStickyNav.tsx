"use client";

import Link from "next/link";
import { Sparkles, Wand2, Home, Palette, Mail } from "lucide-react";

const items = [
  { label: "Home", href: "/", icon: Home },
  { label: "The Drop", href: "/drop", icon: Sparkles },
  { label: "Colors", href: "/color-stories", icon: Palette },
  { label: "Custom", href: "/custom-access", icon: Wand2 },
];

export function MobileStickyNav() {
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
      <Link
        href="/waitlist"
        className="flex flex-col items-center gap-1 px-4 py-1 text-[11px] text-gold"
      >
        <Mail size={18} strokeWidth={1.5} className="text-gold" />
        Waitlist
      </Link>
    </nav>
  );
}
