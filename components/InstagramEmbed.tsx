"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

// Renders a real Instagram post via Instagram's own oEmbed widget (embed.js) —
// no scraping, just Instagram's official public embed markup.
export function InstagramEmbed({ url }: { url: string }) {
  useEffect(() => {
    window.instgrm?.Embeds.process();
  }, [url]);

  return (
    <>
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: 3,
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px auto",
          maxWidth: 540,
          minWidth: 326,
          padding: 0,
          width: "99.375%",
        }}
      />
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => window.instgrm?.Embeds.process()}
      />
    </>
  );
}
