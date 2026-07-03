import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Lunaya Swim",
  description: "Get in touch with Zoe + Lilly about custom access, the waitlist, press, or collabs.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <SectionHeading eyebrow="Contact" title="Get in Touch" subtitle="Custom access, waitlist questions, press, collabs — we read every message." />
      <div className="mt-12">
        <ContactForm />
      </div>
    </div>
  );
}
