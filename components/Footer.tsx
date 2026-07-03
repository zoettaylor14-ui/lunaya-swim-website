import Link from "next/link";
import Image from "next/image";
import { InstagramIcon } from "@/components/ui/InstagramIcon";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "The Drop", href: "/drop" },
      { label: "Color Stories", href: "/color-stories" },
      { label: "Moodboard", href: "/moodboard" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Join the Waitlist", href: "/waitlist" },
      { label: "Request Custom Access", href: "/custom-access" },
      { label: "Crystal Guide", href: "/crystal-guide" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-pearl/10 bg-navy/60">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-2">
            <Image
              src="/lunaya/logo-primary.svg"
              alt="Lunaya Swim"
              width={140}
              height={38}
              className="mb-4 h-9 w-auto"
            />
            <p className="max-w-xs text-sm text-pearl/60">
              Crystal swimwear is coming. Built for your sign, your shade, and your sun-soaked alter
              ego.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-gold">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-pearl/70 hover:text-pearl">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-gold">Follow</p>
            <div className="mb-5 flex gap-4">
              <a href="https://www.instagram.com/lunaya.swimm/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon size={18} className="text-pearl/70 hover:text-gold" />
              </a>
            </div>
            <p className="mb-2 text-xs text-pearl/50">Get first access when we launch.</p>
            <Link
              href="/waitlist"
              className="inline-block rounded-none border border-gold/40 px-4 py-2 text-xs text-gold hover:bg-gold/10"
            >
              Join the Waitlist
            </Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-pearl/10 pt-6 text-xs text-pearl/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Lunaya Swim. Made by Zoe + Lilly.</p>
          <p>Crystal swimwear, coming soon.</p>
        </div>
      </div>
    </footer>
  );
}
