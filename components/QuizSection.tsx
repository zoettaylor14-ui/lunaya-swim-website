"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { zodiacProducts } from "@/lib/data/zodiac-products";
import { zodiacSigns } from "@/lib/data/options";
import { GlowButton } from "@/components/ui/GlowButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn, formatPrice } from "@/lib/utils";

const vibes = ["Beach goddess", "Soft angel", "Dark feminine", "Golden hour", "Mermaid", "Main character"];
const crystalColors = ["Clear AB", "Champagne", "Ruby", "Sapphire", "Emerald", "Black diamond", "Pearl"];
const sparkleLevels = ["Soft shimmer", "Statement sparkle", "Full goddess"];
const styles = ["Triangle bikini", "Bandeau", "Brazilian bottom", "Cheeky bottom", "One-piece", "Custom"];

const energyBySign: Record<string, string> = {
  Aries:
    "You're drawn to bold, fearless, first-in-the-room energy. This suit is made for sprinting into the water and being the first one everyone remembers.",
  Taurus:
    "You're drawn to grounded beauty, luxury, and Venus energy. This suit is made for slow mornings, good light, and knowing your worth.",
  Gemini:
    "You're drawn to playful energy, movement, and every version of you. This suit is made for changing plans, catching flights, and never sitting still.",
  Cancer:
    "You're drawn to soft, intuitive, ocean-born energy. This suit is made for moonlit swims and quiet, feeling-everything kind of days.",
  Leo: "You're drawn to radiant confidence and full sun energy. This suit is made for golden hour, camera-ready moments, and lighting up every room.",
  Virgo:
    "You're drawn to clean, refined, effortless beauty. This suit is made for the girl who makes it look easy without even trying.",
  Libra:
    "You're drawn to soft glamour, beauty, and romantic energy. This suit is made for date nights by the water and being unapologetically pretty.",
  Scorpio:
    "You're drawn to power, mystery, and magnetic energy. This suit is made for late-night swims, flash photos, and walking into the room like you already know.",
  Sagittarius:
    "You're drawn to freedom, adventure, and chasing the sun. This suit is made for the girl already planning her next trip.",
  Capricorn:
    "You're drawn to power, control, and boss energy. This suit is made for the girl running the show, even on vacation.",
  Aquarius:
    "You're drawn to rare, futuristic, unforgettable energy. This suit is made for standing out without even trying to.",
  Pisces:
    "You're drawn to dreamy, romantic, mermaid energy. This suit is made for the girl who feels most like herself in the water.",
};

export function QuizSection() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    { key: "sign", label: "What is your zodiac sign?", options: zodiacSigns },
    { key: "vibe", label: "What vibe are you dressing for?", options: vibes },
    { key: "crystal", label: "What crystal color are you drawn to?", options: crystalColors },
    { key: "sparkle", label: "How much sparkle do you want?", options: sparkleLevels },
    { key: "style", label: "What bikini style do you like?", options: styles },
  ];

  const select = (key: string, value: string) => {
    const next = { ...answers, [key]: value };
    setAnswers(next);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
    setShowResult(false);
  };

  const match = zodiacProducts.find((p) => p.sign === answers.sign) ?? zodiacProducts[0];

  return (
    <section id="quiz" className="mx-auto max-w-4xl scroll-mt-24 px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Find Your Energy"
        title="Find Your Lunaya Energy"
        subtitle="Five quick questions. One suit made for your sign."
      />

      <div className="glass-card mt-10 overflow-hidden rounded-3xl p-6 sm:p-10">
        {!showResult ? (
          <div>
            <div className="mb-6 flex items-center gap-2">
              {questions.map((q, i) => (
                <span
                  key={q.key}
                  className={cn(
                    "h-1 flex-1 rounded-full",
                    i <= step ? "bg-gold" : "bg-pearl/15"
                  )}
                />
              ))}
            </div>
            <p className="mb-1 text-xs uppercase tracking-widest text-gold/70">
              Question {step + 1} of {questions.length}
            </p>
            <h3 className="font-display text-2xl text-pearl sm:text-3xl">{questions[step].label}</h3>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {questions[step].options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => select(questions[step].key, opt)}
                  className={cn(
                    "rounded-xl border px-4 py-3 text-left text-sm transition-colors",
                    answers[questions[step].key] === opt
                      ? "border-gold bg-gold/10 text-gold"
                      : "border-pearl/15 text-pearl/80 hover:border-gold/40"
                  )}
                >
                  {opt}
                </button>
              ))}
            </div>
            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                className="mt-6 text-xs text-pearl/50 hover:text-pearl"
              >
                ← Back
              </button>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:text-left">
            <div className="relative h-56 w-44 shrink-0 overflow-hidden rounded-2xl">
              <Image src={match.image} alt={match.name} fill className="object-cover" />
            </div>
            <div>
              <p className="flex items-center justify-center gap-1.5 text-xs uppercase tracking-widest text-gold sm:justify-start">
                <Sparkles size={13} /> Your Lunaya Match
              </p>
              <h3 className="mt-2 font-display text-3xl text-pearl">
                {match.sign} {match.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-pearl/70">
                {energyBySign[match.sign]}
              </p>
              <p className="mt-3 text-gold">{formatPrice(match.price)}</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <GlowButton href={`/products/${match.slug}`}>Shop Your Match</GlowButton>
                <GlowButton variant="secondary" onClick={reset}>
                  Retake Quiz
                </GlowButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
