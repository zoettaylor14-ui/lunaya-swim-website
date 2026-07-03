"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Label, Input, Textarea, ChipGroup } from "@/components/ui/FormField";
import { GlowButton } from "@/components/ui/GlowButton";
import {
  zodiacSigns,
  bikiniColors,
  topStyles,
  bottomStyles,
  crystalColors,
  crystalPlacements,
  sizes,
  coveragePreferences,
  budgetRanges,
} from "@/lib/data/options";

export function CustomRequestForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [fields, setFields] = useState({
    zodiacSign: "",
    bikiniColor: "",
    topStyle: "",
    bottomStyle: "",
    crystalColor: "",
    crystalPlacement: "",
    topSize: "",
    bottomSize: "",
    coveragePreference: "",
    budgetRange: "",
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
      deadline: form.get("deadline"),
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
          Zoe + Lilly will review your details and reach out to confirm your custom crystal
          bikini.
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
        <p className="mb-4 text-xs uppercase tracking-widest text-gold">Pick Your Base</p>
        <div className="space-y-4">
          <div>
            <Label>Bikini Color</Label>
            <ChipGroup options={bikiniColors} value={fields.bikiniColor} onChange={set("bikiniColor")} />
          </div>
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
        <p className="mb-4 text-xs uppercase tracking-widest text-gold">Choose Your Crystals</p>
        <div className="space-y-4">
          <div>
            <Label>Crystal Color</Label>
            <ChipGroup options={crystalColors} value={fields.crystalColor} onChange={set("crystalColor")} />
          </div>
          <div>
            <Label>Crystal Placement</Label>
            <ChipGroup
              options={crystalPlacements}
              value={fields.crystalPlacement}
              onChange={set("crystalPlacement")}
            />
          </div>
        </div>
      </div>

      <div>
        <p className="mb-4 text-xs uppercase tracking-widest text-gold">Fit &amp; Details</p>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label>Top Size</Label>
            <ChipGroup options={sizes} value={fields.topSize} onChange={set("topSize")} />
          </div>
          <div>
            <Label>Bottom Size</Label>
            <ChipGroup options={sizes} value={fields.bottomSize} onChange={set("bottomSize")} />
          </div>
        </div>
        <div className="mt-5">
          <Label>Coverage Preference</Label>
          <ChipGroup
            options={coveragePreferences}
            value={fields.coveragePreference}
            onChange={set("coveragePreference")}
          />
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <Label>Deadline / Event Date</Label>
            <Input type="date" name="deadline" />
          </div>
          <div>
            <Label>Budget Range</Label>
            <ChipGroup options={budgetRanges} value={fields.budgetRange} onChange={set("budgetRange")} />
          </div>
        </div>
        <div className="mt-5">
          <Label>Notes</Label>
          <Textarea name="notes" placeholder="Tell us about the vision, the occasion, anything you're picturing..." />
        </div>
        <div className="mt-5">
          <Label>Inspiration Upload (optional)</Label>
          <Input type="file" name="inspiration" accept="image/*" className="text-pearl/60" />
        </div>
      </div>

      <GlowButton type="submit" className="w-full">
        {status === "submitting" ? "Sending..." : "Request My Custom Bikini"}
      </GlowButton>
      {status === "error" && (
        <p className="text-center text-xs text-blush">Something went wrong — please try again.</p>
      )}
    </form>
  );
}
