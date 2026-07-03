import type { Metadata } from "next";
import ShopClient from "./ShopClient";

export const metadata: Metadata = {
  title: "Shop | Lunaya Swim",
  description: "Crystal astrology swimwear by Zoe + Lilly. Shop Lunaya's color stories in limited quantities.",
};

export default function ShopPage() {
  return <ShopClient />;
}
