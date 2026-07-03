import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyNav } from "@/components/MobileStickyNav";
import { WelcomePopup } from "@/components/WelcomePopup";

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
  title: "Lunaya Swim | Crystal Swimwear Coming Soon",
  description:
    "Lunaya Swim is a crystal-based, Brazilian-inspired swimwear brand by Zoe + Lilly. Join the waitlist for limited drops, custom access, and the first color story reveal.",
  keywords: [
    "crystal bikini",
    "coming soon swimwear",
    "astrology swimwear",
    "handmade crystal bikini",
    "custom crystal bikini",
    "Brazilian-inspired swimwear",
    "zodiac swimwear",
    "swimwear waitlist",
    "beach goddess swimwear",
    "crystal swimwear",
  ],
  openGraph: {
    title: "Lunaya Swim | Crystal Swimwear Coming Soon",
    description:
      "Lunaya Swim is a crystal-based, Brazilian-inspired swimwear brand by Zoe + Lilly. Join the waitlist for limited drops, custom access, and the first color story reveal.",
    images: ["/lunaya/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lunaya Swim | Crystal Swimwear Coming Soon",
    description:
      "Lunaya Swim is a crystal-based, Brazilian-inspired swimwear brand by Zoe + Lilly. Join the waitlist for limited drops, custom access, and the first color story reveal.",
    images: ["/lunaya/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div className="site-background" aria-hidden="true" />
        <Header />
        <main className="relative z-10 flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileStickyNav />
        <WelcomePopup />
      </body>
    </html>
  );
}
