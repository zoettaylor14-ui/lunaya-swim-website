import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, getRelatedProducts, zodiacProducts } from "@/lib/data/zodiac-products";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductActions } from "./ProductActions";
import { ProductCard } from "@/components/ProductCard";

export function generateStaticParams() {
  return zodiacProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.sign} ${product.name} Crystal Bikini | Lunaya Swim`,
    description: product.description,
    openGraph: {
      title: `${product.sign} ${product.name} Crystal Bikini | Lunaya Swim`,
      description: product.description,
      images: [product.image],
    },
  };
}

const detailBlocks = (product: NonNullable<ReturnType<typeof getProductBySlug>>) => [
  {
    title: "The Energy",
    copy: `${product.name} was made for ${product.sign} energy — ${product.description.toLowerCase()}`,
  },
  {
    title: "The Fit",
    copy: "Adjustable triangle top with tie-side bottoms. Designed for flexible sizing and a cheeky Brazilian-inspired fit.",
  },
  {
    title: "The Crystals",
    copy: `Hand-placed ${product.crystals.join(", ")} crystal details. Each suit is made in small batches, so every piece has its own finish.`,
  },
  {
    title: "The Details",
    copy: "Each Lunaya piece is finished by hand. Small differences in crystal placement may happen and make every suit unique.",
  },
];

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(slug, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-10 md:grid-cols-2">
        <ProductGallery image={product.image} name={product.name} />

        <div>
          <p className="text-xs uppercase tracking-widest text-gold/80">
            {product.symbol} {product.sign}
          </p>
          <h1 className="mt-2 font-display text-4xl text-pearl">{product.name} Crystal Bikini</h1>
          <p className="mt-3 text-base text-pearl/70">{product.description}</p>
          <p className="mt-4 font-display text-2xl text-gold">{formatPrice(product.price)}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {product.badges.map((b) => (
              <Badge key={b} tone={b === "Low Stock" ? "blush" : "gold"}>
                {b}
              </Badge>
            ))}
          </div>

          <div className="mt-8">
            <ProductActions product={product} />
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-8 border-t border-pearl/10 pt-12 sm:grid-cols-2">
        {detailBlocks(product).map((block) => (
          <div key={block.title}>
            <h2 className="font-display text-xl text-gold">{block.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-pearl/70">{block.copy}</p>
          </div>
        ))}
        <div>
          <h2 className="font-display text-xl text-gold">Care Instructions</h2>
          <p className="mt-2 text-sm leading-relaxed text-pearl/70">
            Hand wash cold, lay flat to dry, and keep crystal areas away from rough surfaces. Full
            details on our{" "}
            <a href="/care-guide" className="text-gold underline underline-offset-2">
              Care Guide
            </a>
            .
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-gold">Shipping + Handmade Timing</h2>
          <p className="mt-2 text-sm leading-relaxed text-pearl/70">
            Ready-to-ship pieces ship in 3–5 business days. Made-to-order pieces take 2–3 weeks — see
            our{" "}
            <a href="/care-guide#shipping" className="text-gold underline underline-offset-2">
              shipping details
            </a>
            .
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-gold">Return Policy</h2>
          <p className="mt-2 text-sm leading-relaxed text-pearl/70">
            Ready-to-ship pieces may be exchanged within 7 days if unworn. Custom pieces are final
            sale. Full policy on our{" "}
            <a href="/care-guide#returns" className="text-gold underline underline-offset-2">
              Care Guide
            </a>
            .
          </p>
        </div>
      </div>

      <div className="mt-16 border-t border-pearl/10 pt-12">
        <h2 className="font-display text-2xl text-pearl">You May Also Like</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
