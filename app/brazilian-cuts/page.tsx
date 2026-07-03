import type { Metadata } from "next";
import { BrazilianCutsGrid } from "@/components/BrazilianCuts";

export const metadata: Metadata = {
  title: "Brazilian Cuts | Lunaya Swim",
  description:
    "Tie-side, cheeky, micro glam, and adjustable Brazilian-cut swimwear silhouettes from Lunaya Swim.",
};

export default function BrazilianCutsPage() {
  return <BrazilianCutsGrid />;
}
