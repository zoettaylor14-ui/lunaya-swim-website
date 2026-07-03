import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      )}
      <h2 className="text-2xl leading-tight text-pearl sm:text-3xl md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-sm leading-relaxed text-pearl/70">{subtitle}</p>}
    </div>
  );
}
