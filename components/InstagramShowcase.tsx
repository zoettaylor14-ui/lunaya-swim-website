import Image from "next/image";
import { instagram } from "@/lib/data/social-links";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";
import { Badge } from "@/components/ui/Badge";
import { InstagramIcon } from "@/components/ui/InstagramIcon";

// If INSTAGRAM_ACCESS_TOKEN is set, real posts could be fetched server-side here via
// an authenticated API route. Until then this renders local fallback cards so the
// build never depends on, or breaks from, a missing token.
export function InstagramShowcase() {
  const posts = instagram.fallbackPosts;

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow={`@${instagram.handle}`}
        title="The Lunaya World"
        subtitle="Follow the mood, the making, the first samples, and the launch journey."
      />
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {posts.map((post, i) => (
          <a
            key={i}
            href={instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-2xl glass-card"
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
      <div className="mt-8 flex justify-center">
        <GlowButton href={instagram.url} variant="secondary">
          <InstagramIcon size={16} />
          Follow @{instagram.handle}
        </GlowButton>
      </div>
    </section>
  );
}
