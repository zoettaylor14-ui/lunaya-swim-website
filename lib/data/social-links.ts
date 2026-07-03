import type { InstagramPost } from "@/lib/types";

export const instagram = {
  handle: process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || "lunaya.swimm",
  url: "https://www.instagram.com/lunaya.swimm/",
  // Real posts to embed via Instagram's official oEmbed widget. Add more permalinks here
  // as Zoe + Lilly post — no scraping, just Instagram's own embed.js script.
  postUrls: ["https://www.instagram.com/p/DaQyQHPPtJK/"],
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
  // Real, approved photos used purely as ambient decoration — not clickable tiles.
  decorativeImages: [
    "/lunaya/crystals/crystal-detail-closeup.png",
    "/lunaya/social/social-3.jpg",
    "/lunaya/social/social-6.jpg",
  ],
};

// Only use Pinterest images publicly if they are owned, licensed, or approved by Zoe and Lilly.
