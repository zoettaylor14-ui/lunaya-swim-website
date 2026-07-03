import type { InstagramPost } from "@/lib/types";

export const instagram = {
  handle: process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || "lunaya.swimm",
  url: "https://www.instagram.com/lunaya.swimm/",
  fallbackPosts: [
    {
      image: "/lunaya/social/instagram-placeholder-1.jpg",
      caption: "Behind the scenes and first drop previews",
      type: "behind-the-scenes",
    },
    {
      image: "/lunaya/social/instagram-placeholder-2.jpg",
      caption: "Crystal swimwear made for your sign",
      type: "post",
    },
    {
      image: "/lunaya/social/instagram-placeholder-1.jpg",
      caption: "Custom crystal placement, up close",
      type: "reel",
    },
    {
      image: "/lunaya/social/instagram-placeholder-2.jpg",
      caption: "Zoe + Lilly, mid-drop chaos",
      type: "behind-the-scenes",
    },
  ] satisfies InstagramPost[],
};

export const pinterest = {
  boardUrl: process.env.NEXT_PUBLIC_PINTEREST_BOARD_URL || "https://pin.it/43ne08NLd",
  fallbackCards: [
    { label: "Crystal Details", image: "/lunaya/crystals/crystal-detail-closeup.png" },
    { label: "Moonlit Beach", image: "/lunaya/moodboard/moonlit-beach-placeholder.jpg" },
    { label: "Goddess Swim", image: "/lunaya/moodboard/crystal-details-placeholder.jpg" },
    { label: "Zodiac Energy", image: "/lunaya/moodboard/moonlit-beach-placeholder.jpg" },
    { label: "Golden Hour", image: "/lunaya/moodboard/shoreline-walk-ai.png" },
    { label: "Custom Sparkle", image: "/lunaya/moodboard/crystal-details-placeholder.jpg" },
  ],
};

// Only use Pinterest images publicly if they are owned, licensed, or approved by Zoe and Lilly.
