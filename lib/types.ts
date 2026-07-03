export type ShadeStory = {
  slug: string;
  name: string;
  shortLabel: string;
  moodWords: string[];
  crystals: string[];
  description: string;
  image: string;
  moodImages: string[];
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
