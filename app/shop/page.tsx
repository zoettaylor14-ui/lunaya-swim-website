import type { Metadata } from "next";
import ShopClient from "./ShopClient";

export const metadata: Metadata = {
  title: "Shop All | Lunaya Swim",
  description: "Shop handmade crystal swimwear inspired by zodiac energy. Filter by sign, crystal color, and more.",
};

export default function ShopPage() {
  return <ShopClient />;
}
