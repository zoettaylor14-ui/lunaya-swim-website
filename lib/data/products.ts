import type { ZodiacProduct } from "@/lib/types";
import { zodiacProducts } from "@/lib/data/zodiac-products";
import { colorStoryProducts } from "@/lib/data/color-stories";

// Combined catalog: the 7 Drop 001 color stories plus the 12 zodiac-sign pieces,
// all addressable at /products/[slug].
export const allProducts: ZodiacProduct[] = [
  ...colorStoryProducts,
  ...zodiacProducts.map((p) => ({ ...p, collection: p.collection ?? ("zodiac" as const) })),
];

export function getProductBySlug(slug: string): ZodiacProduct | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, count = 4): ZodiacProduct[] {
  const current = getProductBySlug(slug);
  const pool = current?.collection === "zodiac" ? zodiacProducts : colorStoryProducts;
  return pool.filter((p) => p.slug !== slug).slice(0, count);
}
