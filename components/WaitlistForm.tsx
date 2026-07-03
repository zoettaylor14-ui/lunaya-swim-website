"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Label, Input, ChipGroup } from "@/components/ui/FormField";
import { GlowButton } from "@/components/ui/GlowButton";
import { zodiacSigns, waitlistInterests } from "@/lib/data/options";

export function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [sign, setSign] = useState("");
  const [interest, setInterest] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = new FormData(e.currentTarget);
    const payload = {
      firstName: form.get("firstName"),
      email: form.get("email"),
      phone: form.get("phone"),
      zodiacSign: sign,
      instagramHandle: form.get("instagramHandle"),
      interest,
    };
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="glass-card rounded-3xl p-8 text-center sm:p-12">
        <Sparkles className="mx-auto mb-4 text-gold" size={28} />
        <h3 className="font-display text-2xl text-pearl">You&apos;re on the list.</h3>
        <p className="mt-2 text-sm text-pearl/60">
          Keep an eye on your inbox — Zoe + Lilly will send first access to Drop 001 before anyone
          else.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass-card space-y-5 rounded-3xl p-6 sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label required>First Name</Label>
          <Input name="firstName" required placeholder="Your name" />
        </div>
        <div>
          <Label required>Email</Label>
          <Input type="email" name="email" required placeholder="you@email.com" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label>Phone (optional)</Label>
          <Input type="tel" name="phone" placeholder="(555) 000-0000" />
        </div>
        <div>
          <Label>Instagram Handle (optional)</Label>
          <Input name="instagramHandle" placeholder="@yourhandle" />
        </div>
      </div>
      <div>
        <Label required>Zodiac Sign</Label>
        <ChipGroup options={zodiacSigns} value={sign} onChange={setSign} />
      </div>
      <div>
        <Label required>Interested In</Label>
        <ChipGroup options={waitlistInterests} value={interest} onChange={setInterest} />
      </div>
      <GlowButton type="submit" className="w-full">
        {status === "submitting" ? "Joining..." : "Join the Waitlist"}
      </GlowButton>
      {status === "error" && (
        <p className="text-center text-xs text-blush">Something went wrong — please try again.</p>
      )}
    </form>
  );
}
