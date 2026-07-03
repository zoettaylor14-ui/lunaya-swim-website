"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Label, Input, Textarea, ChipGroup } from "@/components/ui/FormField";
import { GlowButton } from "@/components/ui/GlowButton";
import { zodiacSigns, shadeNames, topStyles, bottomStyles, crystalColors } from "@/lib/data/options";

export function CustomRequestForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [fields, setFields] = useState({
    zodiacSign: "",
    dreamShade: "",
    crystalColor: "",
    topStyle: "",
    bottomStyle: "",
  });

  const set = (key: keyof typeof fields) => (value: string) =>
    setFields((prev) => ({ ...prev, [key]: value }));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      instagramHandle: form.get("instagramHandle"),
      eventDate: form.get("eventDate"),
      notes: form.get("notes"),
      ...fields,
    };
    try {
      const res = await fetch("/api/custom-request", {
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
        <h3 className="font-display text-2xl text-pearl">Request received.</h3>
        <p className="mt-2 text-sm text-pearl/60">
          Zoe + Lilly will review your details and reach out when custom spots open.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass-card space-y-7 rounded-3xl p-6 sm:p-10">
      <div>
        <p className="mb-4 text-xs uppercase tracking-widest text-gold">Your Details</p>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label required>Name</Label>
            <Input name="name" required placeholder="Your name" />
          </div>
          <div>
            <Label required>Email</Label>
            <Input type="email" name="email" required placeholder="you@email.com" />
          </div>
          <div>
            <Label>Phone (optional)</Label>
            <Input type="tel" name="phone" placeholder="(555) 000-0000" />
          </div>
          <div>
            <Label>Instagram Handle</Label>
            <Input name="instagramHandle" placeholder="@yourhandle" />
          </div>
        </div>
      </div>

      <div>
        <p className="mb-4 text-xs uppercase tracking-widest text-gold">Your Sign</p>
        <ChipGroup options={zodiacSigns} value={fields.zodiacSign} onChange={set("zodiacSign")} />
      </div>

      <div>
        <p className="mb-4 text-xs uppercase tracking-widest text-gold">Dream Bikini Shade</p>
        <ChipGroup options={shadeNames} value={fields.dreamShade} onChange={set("dreamShade")} />
      </div>

      <div>
        <p className="mb-4 text-xs uppercase tracking-widest text-gold">Choose Your Crystals</p>
        <div>
          <Label>Crystal Color</Label>
          <ChipGroup options={crystalColors} value={fields.crystalColor} onChange={set("crystalColor")} />
        </div>
      </div>

      <div>
        <p className="mb-4 text-xs uppercase tracking-widest text-gold">Fit Direction</p>
        <div className="space-y-4">
          <div>
            <Label>Top Style</Label>
            <ChipGroup options={topStyles} value={fields.topStyle} onChange={set("topStyle")} />
          </div>
          <div>
            <Label>Bottom Style</Label>
            <ChipGroup options={bottomStyles} value={fields.bottomStyle} onChange={set("bottomStyle")} />
          </div>
        </div>
      </div>

      <div>
        <p className="mb-4 text-xs uppercase tracking-widest text-gold">Timeline &amp; Notes</p>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label>Event / Vacation Date (optional)</Label>
            <Input type="date" name="eventDate" />
          </div>
        </div>
        <div className="mt-5">
          <Label>Notes</Label>
          <Textarea name="notes" placeholder="Tell us about the vision, the occasion, anything you're picturing..." />
        </div>
      </div>

      <GlowButton type="submit" className="w-full">
        {status === "submitting" ? "Sending..." : "Request Custom Access"}
      </GlowButton>
      {status === "error" && (
        <p className="text-center text-xs text-blush">Something went wrong — please try again.</p>
      )}
    </form>
  );
}
