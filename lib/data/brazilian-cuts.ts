export type BrazilianCutStyle = {
  name: string;
  description: string;
  price: string;
  image: string;
  href?: string;
};

// Fit Studio styles from the approved Lunaya Swim HTML pack (brazilian-cuts.html).
export const brazilianCutStyles: BrazilianCutStyle[] = [
  {
    name: "Crystal Triangle",
    description: "Classic triangle top with hand-applied sparkle.",
    price: "$179",
    image: "/lunaya/social/social-1.jpg",
  },
  {
    name: "Tie-Side Cheeky",
    description: "Adjustable ties and a flattering Brazilian-inspired cheeky fit.",
    price: "$169",
    image: "/lunaya/social/social-2.jpg",
  },
  {
    name: "Micro Glam",
    description: "Minimal coverage with maximum shine.",
    price: "$189",
    image: "/lunaya/social/social-3.jpg",
  },
  {
    name: "Adjustable Ties",
    description: "Made to move, tie, and fit your body.",
    price: "$169",
    image: "/lunaya/social/social-4.jpg",
  },
  {
    name: "Pearl Halter",
    description: "Soft lift with an angelic crystal finish.",
    price: "$179",
    image: "/lunaya/social/social-5.jpg",
  },
  {
    name: "Cocoa Muse Bottom",
    description: "Bronze-toned crystal detail and beach club energy.",
    price: "$169",
    image: "/lunaya/social/social-6.jpg",
  },
  {
    name: "Ocean String",
    description: "Aqua crystal accents for mermaid moments.",
    price: "$169",
    image: "/lunaya/social/social-7.jpg",
  },
  {
    name: "Custom Cut",
    description: "Request your own color, cut, and crystal placement.",
    price: "Starts at $150",
    image: "/lunaya/social/social-8.jpg",
    href: "/custom-bikinis",
  },
];
