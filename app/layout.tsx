import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { MobileStickyNav } from "@/components/MobileStickyNav";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Lunaya Swim | Crystal Astrology Swimwear",
  description:
    "Handmade crystal swimwear inspired by zodiac energy, limited drops, and custom beach-goddess bikinis by Zoe + Lilly.",
  keywords: [
    "crystal bikini",
    "zodiac bikini",
    "astrology swimwear",
    "handmade crystal bikini",
    "custom crystal bikini",
    "rhinestone bikini",
    "zodiac swimwear",
    "festival bikini",
    "beach goddess swimwear",
    "custom swimwear",
    "crystal swimwear",
  ],
  openGraph: {
    title: "Lunaya Swim | Crystal Astrology Swimwear",
    description:
      "Handmade crystal swimwear inspired by zodiac energy, limited drops, and custom beach-goddess bikinis by Zoe + Lilly.",
    images: ["/lunaya/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lunaya Swim | Crystal Astrology Swimwear",
    description:
      "Handmade crystal swimwear inspired by zodiac energy, limited drops, and custom beach-goddess bikinis by Zoe + Lilly.",
    images: ["/lunaya/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Header />
          <main className="relative z-10 flex-1 pb-16 lg:pb-0">{children}</main>
          <Footer />
          <CartDrawer />
          <MobileStickyNav />
        </CartProvider>
      </body>
    </html>
  );
}
