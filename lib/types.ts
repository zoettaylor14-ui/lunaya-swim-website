export type ZodiacProduct = {
  sign: string;
  symbol: string;
  name: string;
  slug: string;
  colors: string[];
  crystals: string[];
  description: string;
  price: number;
  badges: string[];
  image: string;
  /** "zodiac" = one of the 12 sign pieces, "color-story" = Drop 001 color story piece */
  collection?: "zodiac" | "color-story";
  /** Zodiac signs this color story's energy is drawn to (color-story pieces only) */
  energy?: string[];
  /** Shop filter chip label, e.g. "Green" (color-story pieces only) */
  filterLabel?: string;
};

export type Crystal = {
  name: string;
  meaning: string;
  bestFor: string;
  color: string;
};

export type InstagramPost = {
  image: string;
  caption: string;
  link?: string;
  type: "reel" | "post" | "story" | "behind-the-scenes";
};

export type CartItem = {
  slug: string;
  name: string;
  sign: string;
  price: number;
  image: string;
  topSize: string;
  bottomSize: string;
  quantity: number;
};
