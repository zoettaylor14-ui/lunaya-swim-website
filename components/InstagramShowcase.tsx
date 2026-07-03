import Image from "next/image";
import { instagram } from "@/lib/data/social-links";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";
import { Badge } from "@/components/ui/Badge";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { InstagramEmbed } from "@/components/InstagramEmbed";

// Real posts are embedded via Instagram's own oEmbed widget (see instagram.postUrls
// in lib/data/social-links.ts) — no scraping. Falls back to local placeholder cards
// when no real post URLs are configured yet.
export function InstagramShowcase() {
  const posts = instagram.fallbackPosts;
  const hasRealPosts = instagram.postUrls.length > 0;

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <SectionHeading
        eyebrow={`@${instagram.handle}`}
        title="The Lunaya World"
        subtitle="Follow the mood, the making, the first samples, and the launch journey."
      />

      {hasRealPosts ? (
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {instagram.postUrls.map((url) => (
            <div key={url} className="w-full max-w-[540px]">
              <InstagramEmbed url={url} />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {posts.map((post, i) => (
            <a
              key={i}
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-none glass-card"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-midnight/85 via-midnight/10 to-transparent p-3">
                <Badge tone="crystal" className="mb-1.5 w-fit capitalize">
                  {post.type.replace("-", " ")}
                </Badge>
                <p className="line-clamp-2 text-xs text-pearl/85">{post.caption}</p>
              </div>
            </a>
          ))}
        </div>
      )}

      <div className="mt-8 flex justify-center">
        <GlowButton href={instagram.url} variant="secondary">
          <InstagramIcon size={16} />
          Follow @{instagram.handle}
        </GlowButton>
      </div>
    </section>
  );
}
