import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-gold to-peach text-midnight hover:brightness-110 glow-gold",
  secondary:
    "glass-card text-pearl hover:border-gold/40",
  ghost: "text-pearl/80 hover:text-pearl underline underline-offset-4 decoration-gold/50",
};

export function GlowButton({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  type = "button",
}: {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-none px-5 py-2.5 text-xs font-medium tracking-wide transition-all duration-300",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
