"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Label, Input, Textarea, ChipGroup } from "@/components/ui/FormField";
import { GlowButton } from "@/components/ui/GlowButton";
import { contactReasons } from "@/lib/data/options";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [reason, setReason] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      reason,
      message: form.get("message"),
    };
    try {
      const res = await fetch("/api/contact", {
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
      <div className="glass-card rounded-none p-8 text-center sm:p-12">
        <Sparkles className="mx-auto mb-4 text-gold" size={28} />
        <h3 className="font-display text-2xl text-pearl">Message sent.</h3>
        <p className="mt-2 text-sm text-pearl/60">Zoe + Lilly will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass-card space-y-5 rounded-none p-5 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label required>Name</Label>
          <Input name="name" required placeholder="Your name" />
        </div>
        <div>
          <Label required>Email</Label>
          <Input type="email" name="email" required placeholder="you@email.com" />
        </div>
      </div>
      <div>
        <Label required>Reason</Label>
        <ChipGroup options={contactReasons} value={reason} onChange={setReason} />
      </div>
      <div>
        <Label required>Message</Label>
        <Textarea name="message" required rows={5} placeholder="How can we help?" />
      </div>
      <GlowButton type="submit" className="w-full">
        {status === "submitting" ? "Sending..." : "Send Message"}
      </GlowButton>
      {status === "error" && (
        <p className="text-center text-xs text-blush">Something went wrong — please try again.</p>
      )}
    </form>
  );
}
