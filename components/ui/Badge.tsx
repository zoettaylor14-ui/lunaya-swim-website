import { cn } from "@/lib/utils";

const badgeStyles: Record<string, string> = {
  default: "bg-pearl/10 text-pearl border-pearl/20",
  gold: "bg-gold/15 text-gold border-gold/30",
  blush: "bg-blush/15 text-blush border-blush/30",
  crystal: "bg-crystal/15 text-crystal border-crystal/30",
};

export function Badge({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  tone?: keyof typeof badgeStyles;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-none border px-3 py-1 text-[11px] font-medium uppercase tracking-wider",
        badgeStyles[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
