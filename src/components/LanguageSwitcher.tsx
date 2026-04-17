"use client";

import { motion } from "framer-motion";
import { useT, Locale } from "@/lib/i18n/LanguageContext";

const labels: Record<Locale, string> = {
  it: "Italiano",
  en: "English",
  de: "Deutsch",
  ru: "Русский",
};

function FlagIT() {
  return (
    <svg viewBox="0 0 3 2" className="w-full h-full block" aria-hidden>
      <rect width="1" height="2" fill="#009246" />
      <rect x="1" width="1" height="2" fill="#fff" />
      <rect x="2" width="1" height="2" fill="#ce2b37" />
    </svg>
  );
}

function FlagDE() {
  return (
    <svg viewBox="0 0 5 3" className="w-full h-full block" aria-hidden>
      <rect width="5" height="1" fill="#000" />
      <rect y="1" width="5" height="1" fill="#dd0000" />
      <rect y="2" width="5" height="1" fill="#ffce00" />
    </svg>
  );
}

function FlagRU() {
  return (
    <svg viewBox="0 0 9 6" className="w-full h-full block" aria-hidden>
      <rect width="9" height="2" fill="#fff" />
      <rect y="2" width="9" height="2" fill="#0039a6" />
      <rect y="4" width="9" height="2" fill="#d52b1e" />
    </svg>
  );
}

function FlagEN() {
  // Union Jack semplificato ma riconoscibile
  return (
    <svg viewBox="0 0 60 30" className="w-full h-full block" aria-hidden>
      <clipPath id="uk-clip">
        <rect width="60" height="30" />
      </clipPath>
      <g clipPath="url(#uk-clip)">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

const flags: Record<Locale, () => JSX.Element> = {
  it: FlagIT,
  en: FlagEN,
  de: FlagDE,
  ru: FlagRU,
};

interface Props {
  variant?: "navbar" | "navbar-light" | "hero";
}

export default function LanguageSwitcher({ variant = "navbar" }: Props) {
  const { locale, setLocale } = useT();
  const order: Locale[] = ["it", "en", "de", "ru"];

  // Hero variant: liquid-glass pill with sliding active indicator
  if (variant === "hero") {
    return (
      <div
        role="group"
        aria-label="Language switcher"
        className="relative inline-flex items-center gap-1 p-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/25 shadow-[0_8px_32px_rgba(0,0,0,0.18)]"
      >
        {order.map((code) => {
          const Flag = flags[code];
          const isActive = locale === code;
          return (
            <button
              key={code}
              type="button"
              onClick={() => setLocale(code)}
              aria-label={labels[code]}
              aria-pressed={isActive}
              title={labels[code]}
              className="relative px-2.5 py-1.5 rounded-full transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              {isActive && (
                <motion.span
                  layoutId="hero-lang-active"
                  className="absolute inset-0 rounded-full bg-white/35 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_4px_16px_rgba(0,0,0,0.18)] ring-1 ring-white/50"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  aria-hidden
                />
              )}
              <span className="relative block w-7 h-5 rounded-[3px] overflow-hidden ring-1 ring-white/40 shadow-sm">
                <Flag />
              </span>
            </button>
          );
        })}
      </div>
    );
  }

  // Navbar variants
  const buttonBase =
    "relative w-7 h-5 md:w-7 md:h-5 rounded-[3px] overflow-hidden ring-1 transition-all duration-200";

  return (
    <div className="flex items-center gap-1.5" role="group" aria-label="Language switcher">
      {order.map((code) => {
        const Flag = flags[code];
        const isActive = locale === code;
        const ringColor = isActive
          ? variant === "navbar-light"
            ? "ring-white ring-2"
            : "ring-coral ring-2"
          : variant === "navbar-light"
          ? "ring-white/40 hover:ring-white/80"
          : "ring-warmGray/30 hover:ring-warmDark/60";

        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-label={labels[code]}
            aria-pressed={isActive}
            title={labels[code]}
            className={`${buttonBase} ${ringColor} ${
              isActive ? "scale-110 shadow-sm" : "opacity-80 hover:opacity-100"
            }`}
          >
            <Flag />
          </button>
        );
      })}
    </div>
  );
}
