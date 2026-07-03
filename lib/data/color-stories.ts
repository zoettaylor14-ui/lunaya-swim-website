import type { ShadeStory } from "@/lib/types";

// Color story concepts for Lunaya Swim's first drop — still in development.
// These are teaser shade concepts, not purchasable products: no prices, no stock.
export const colorStories: ShadeStory[] = [
  {
    slug: "emerald-jungle",
    name: "Emerald Jungle",
    shortLabel: "Emerald",
    moodWords: ["Lush", "Magnetic", "Tropical"],
    crystals: ["Emerald", "Gold", "Clear AB"],
    description:
      "A deep green shade concept inspired by jungle leaves, emerald crystals, and the feeling of stepping into warm water under palm shadows.",
    image: "/lunaya/products/emerald-jungle.jpg",
    moodImages: ["/lunaya/social/social-1.jpg", "/lunaya/social/social-2.jpg"],
  },
  {
    slug: "amethyst-dream",
    name: "Amethyst Dream",
    shortLabel: "Amethyst",
    moodWords: ["Soft", "Mystical", "Feminine"],
    crystals: ["Amethyst", "Clear AB"],
    description:
      "A purple shade concept inspired by twilight skies, amethyst crystals, and dreamy moonlit swim moments.",
    image: "/lunaya/products/amethyst-dream.jpg",
    moodImages: ["/lunaya/social/social-3.jpg", "/lunaya/social/social-4.jpg"],
  },
  {
    slug: "ocean-mystic",
    name: "Ocean Mystic",
    shortLabel: "Ocean",
    moodWords: ["Cool", "Reflective", "Magnetic"],
    crystals: ["Sapphire", "Clear AB"],
    description:
      "A blue shade concept inspired by clear water, sapphire crystals, and the glow of sun hitting the sea.",
    image: "/lunaya/products/ocean-mystic.jpg",
    moodImages: ["/lunaya/social/social-5.jpg", "/lunaya/social/social-6.jpg"],
  },
  {
    slug: "hibiscus-kiss",
    name: "Hibiscus Kiss",
    shortLabel: "Hibiscus",
    moodWords: ["Flirty", "Warm", "Soft"],
    crystals: ["Blush", "Champagne"],
    description:
      "A pink shade concept inspired by tropical flowers, blush sunsets, and crystal sparkle against glowing skin.",
    image: "/lunaya/products/hibiscus-kiss.jpg",
    moodImages: ["/lunaya/social/social-7.jpg", "/lunaya/social/social-8.jpg"],
  },
  {
    slug: "golden-earth",
    name: "Golden Earth",
    shortLabel: "Golden Earth",
    moodWords: ["Bronzed", "Grounded", "Radiant"],
    crystals: ["Champagne", "Gold"],
    description:
      "A brown and gold shade concept inspired by sun-warmed skin, cocoa tones, and champagne crystal shine.",
    image: "/lunaya/products/cocoa-muse.jpg",
    moodImages: ["/lunaya/social/social-1.jpg", "/lunaya/social/social-6.jpg"],
  },
  {
    slug: "nude-mirage",
    name: "Nude Mirage",
    shortLabel: "Nude",
    moodWords: ["Soft", "Clean", "Barely-there luxury"],
    crystals: ["Champagne", "Pearl"],
    description:
      "A nude shade concept inspired by sand, shell tones, champagne crystals, and effortless beach confidence.",
    image: "/lunaya/products/nude-sands.jpg",
    moodImages: ["/lunaya/social/social-2.jpg", "/lunaya/social/social-7.jpg"],
  },
  {
    slug: "lunaya-pearl",
    name: "Lunaya Pearl",
    shortLabel: "Pearl",
    moodWords: ["Clean", "Luminous", "Goddess-like"],
    crystals: ["Pearl", "Clear AB"],
    description:
      "A white shade concept inspired by pearls, moonlight, clear crystals, and bridal-level beach energy.",
    image: "/lunaya/products/lunaya-pearl.jpg",
    moodImages: ["/lunaya/social/social-3.jpg", "/lunaya/social/social-8.jpg"],
  },
];

export function getShadeBySlug(slug: string): ShadeStory | undefined {
  return colorStories.find((s) => s.slug === slug);
}

export function getRelatedShades(slug: string, count = 3): ShadeStory[] {
  return colorStories.filter((s) => s.slug !== slug).slice(0, count);
}
