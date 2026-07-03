export function PinterestIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.5 18c.5-2 1.5-5.5 1.5-5.5m0 0c-.3-.6-.5-1.4-.5-2.2 0-1.6.9-2.8 2.1-2.8 1 0 1.5.7 1.5 1.6 0 1-.6 2.4-.9 3.8-.3 1.1.6 2 1.7 2 2 0 3.3-2.5 3.3-5.5 0-2.3-1.6-4-4.5-4-3.3 0-5.3 2.4-5.3 5.1 0 .9.3 1.6.7 2.1" />
    </svg>
  );
}
