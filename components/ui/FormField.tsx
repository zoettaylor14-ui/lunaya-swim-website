import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-none border border-pearl/15 bg-pearl/5 px-4 py-3 text-sm text-pearl placeholder:text-pearl/35 outline-none transition-colors focus:border-gold/50";

export function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="mb-1.5 block text-xs uppercase tracking-wider text-pearl/60">
      {children} {required && <span className="text-gold">*</span>}
    </label>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(fieldClass, props.className)} />;
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn(fieldClass, "resize-none", props.className)} rows={props.rows ?? 4} />;
}

export function Select({
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select {...props} className={cn(fieldClass, "appearance-none")}>
      {children}
    </select>
  );
}

export function ChipGroup({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          type="button"
          key={opt}
          onClick={() => onChange(opt)}
          className={cn(
            "rounded-none border px-3.5 py-1.5 text-xs transition-colors",
            value === opt ? "border-gold bg-gold/10 text-gold" : "border-pearl/15 text-pearl/70 hover:border-gold/40"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
