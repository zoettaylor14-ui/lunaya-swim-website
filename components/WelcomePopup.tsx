"use client";

import { useEffect, useState } from "react";
import { X, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/FormField";
import { GlowButton } from "@/components/ui/GlowButton";

const STORAGE_KEY = "lunaya-welcome-popup-seen";
const SHOW_DELAY_MS = 2500;

export function WelcomePopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, "1");
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "welcome-popup-10-off" }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      setStatus("error");
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-midnight/80 p-4 backdrop-blur-sm"
      onClick={dismiss}
    >
      <div
        className="glass-card relative w-full max-w-md rounded-none p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-4 top-4 text-pearl/60 transition-colors hover:text-pearl"
        >
          <X size={18} />
        </button>

        {status === "success" ? (
          <div className="py-4 text-center">
            <Sparkles className="mx-auto mb-3 text-gold" size={26} />
            <h3 className="font-display text-xl text-pearl">You&apos;re on the list.</h3>
            <p className="mt-2 text-sm text-pearl/60">
              Your 10% off code will land in your inbox the day Lunaya launches.
            </p>
          </div>
        ) : (
          <>
            <p className="pr-6 text-xs uppercase tracking-[0.3em] text-gold">Welcome to Lunaya</p>
            <h3 className="mt-2 font-display text-2xl text-pearl">Get 10% Off When We Launch</h3>
            <p className="mt-2 text-sm leading-relaxed text-pearl/70">
              Join the launch list now and we&apos;ll send you a 10% off code the day Drop 001 opens.
            </p>
            <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1"
              />
              <GlowButton type="submit" className="shrink-0">
                {status === "submitting" ? "Joining..." : "Claim 10% Off"}
              </GlowButton>
            </form>
            {status === "error" && (
              <p className="mt-2 text-xs text-blush">Something went wrong — please try again.</p>
            )}
            <button
              onClick={dismiss}
              className="mt-4 block w-full text-center text-xs text-pearl/40 hover:text-pearl/60"
            >
              No thanks, I&apos;ll browse first
            </button>
          </>
        )}
      </div>
    </div>
  );
}
