import type { InstagramPost } from "@/lib/types";

export const instagram = {
  handle: process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || "lunaya.swimm",
  url: "https://www.instagram.com/lunaya.swimm/",
  // Real posts to embed via Instagram's official oEmbed widget. Add more permalinks here
  // as Zoe + Lilly post — no scraping, just Instagram's own embed.js script.
  postUrls: [
    "https://www.instagram.com/p/DaQxup0PT_C/",
    "https://www.instagram.com/p/DaQvCXcxRiL/",
    "https://www.instagram.com/p/DaQvNdRx4NB/",
  ],
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

