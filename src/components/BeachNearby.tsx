"use client";

import FadeIn from "./FadeIn";
import { useT } from "@/lib/i18n/LanguageContext";

export default function BeachNearby() {
  const { t } = useT();

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-coral font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              {t.beachNearby.eyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-warmDark mb-4">
              {t.beachNearby.title}
            </h2>
            <p className="text-warmGray text-lg max-w-2xl mx-auto leading-relaxed">
              {t.beachNearby.description}
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-[1fr,auto] gap-8 items-center">
          {/* Walking route image */}
          <FadeIn delay={0.1}>
            <div className="rounded-2xl overflow-hidden shadow-lg h-[350px] md:h-[450px] bg-white">
              <img
                src="/images/percorso-spiaggia.jpg"
                alt="Percorso a piedi dall'appartamento alla spiaggia - 4 minuti"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </FadeIn>

          {/* Info sidebar */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-4 md:min-w-[260px]">
              {/* Walking time badge */}
              <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-teal/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-teal-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div className="font-serif text-3xl text-warmDark mb-1">4 min</div>
                <p className="text-warmGray text-sm font-semibold">
                  {t.beachNearby.walkLabel}
                </p>
              </div>

              {/* From / To route info */}
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center gap-1 pt-1">
                    <div className="w-3 h-3 rounded-full bg-coral border-2 border-coral-light" />
                    <div className="w-0.5 h-10 bg-gradient-to-b from-coral/40 to-teal/40" />
                    <div className="w-3 h-3 rounded-full bg-teal border-2 border-teal-light" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-xs text-warmGray font-semibold uppercase tracking-wider">{t.beachNearby.fromLabel}</p>
                      <p className="text-warmDark font-bold text-sm">Via del Tulipano 18, Rimini</p>
                    </div>
                    <div>
                      <p className="text-xs text-warmGray font-semibold uppercase tracking-wider">{t.beachNearby.toLabel}</p>
                      <p className="text-warmDark font-bold text-sm">Lungomare G. di Vittorio 13</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://www.google.com/maps/dir/Via+del+Tulipano+18,+47923+Rimini+RN/Lungomare+Giuseppe+di+Vittorio+13,+47921+Rimini+RN/@44.056,12.57,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x132cc4!2m2!1d12.5673!2d44.0545!1m5!1m1!1s0x132cc4!2m2!1d12.572!2d44.0575!3e2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-warmDark text-white font-semibold rounded-full hover:bg-warmGray transition-colors duration-200 text-sm"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                {t.beachNearby.mapCta}
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
