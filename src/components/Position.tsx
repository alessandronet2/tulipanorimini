"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { useT } from "@/lib/i18n/LanguageContext";

type TravelMode = "auto" | "treno" | "aereo";

const travelIcons: Record<TravelMode, JSX.Element> = {
  auto: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  ),
  treno: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 3.75h12a2.25 2.25 0 012.25 2.25v9.75A2.25 2.25 0 0118 18H6a2.25 2.25 0 01-2.25-2.25V6A2.25 2.25 0 016 3.75zM3.75 21l3-3m10.5 3l-3-3M8.25 14.25h.008v.008H8.25v-.008zm7.5 0h.008v.008h-.008v-.008zM3.75 9.75h16.5" />
    </svg>
  ),
  aereo: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  ),
};

export default function Position() {
  const { t } = useT();
  const [mode, setMode] = useState<TravelMode>("auto");

  const travelOptions: { id: TravelMode; label: string }[] = [
    { id: "auto", label: t.position.tabAuto },
    { id: "treno", label: t.position.tabTrain },
    { id: "aereo", label: t.position.tabPlane },
  ];

  return (
    <section id="posizione" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-coral font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              {t.position.eyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-warmDark mb-4">
              {t.position.title}
            </h2>
            <p className="text-warmGray text-lg max-w-2xl mx-auto leading-relaxed">
              {t.position.intro}
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-warmDark text-lg">{t.position.addressTitle}</h3>
                  <p className="text-warmGray">{t.position.addressValue}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-teal-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-warmDark text-lg">{t.position.minutesTitle}</h3>
                  <p className="text-warmGray">{t.position.minutesText}</p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Via+del+Tulipano+18+Rimini"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-6 py-3 bg-warmDark text-white font-semibold rounded-full hover:bg-warmGray transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                {t.position.mapsCta}
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-2xl overflow-hidden shadow-lg h-[350px] md:h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.0!2d12.5650!3d44.0600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2sVia+del+Tulipano+18%2C+47923+Rimini+RN!5e0!3m2!1sit!2sit!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Il Tulipano"
              />
            </div>
          </FadeIn>
        </div>

        {/* Come raggiungerci */}
        <FadeIn delay={0.15}>
          <div className="mt-20">
            <div className="text-center mb-8">
              <p className="text-coral font-semibold text-sm tracking-[0.2em] uppercase mb-3">
                {t.position.howToReachEyebrow}
              </p>
              <h3 className="font-serif text-2xl md:text-4xl text-warmDark">
                {t.position.howToReachTitle}
              </h3>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
              {travelOptions.map((opt) => {
                const active = mode === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setMode(opt.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-200 ${
                      active
                        ? "bg-warmDark text-white shadow-md"
                        : "bg-cream text-warmDark hover:bg-sand/50"
                    }`}
                  >
                    {travelIcons[opt.id]}
                    {opt.label}
                  </button>
                );
              })}
            </div>

            {/* Tab content */}
            <div className="max-w-3xl mx-auto bg-cream rounded-2xl p-6 md:p-8 shadow-sm">
              {mode === "auto" && (
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-warmDark mb-1">{t.position.autoNaviTitle}</h4>
                      <p className="text-warmGray leading-relaxed">{t.position.autoNaviText}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sand/60 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-warmGray" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-warmDark mb-1">{t.position.autoParkTitle}</h4>
                      <p className="text-warmGray leading-relaxed">{t.position.autoParkText}</p>
                    </div>
                  </div>
                </div>
              )}

              {mode === "treno" && (
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-teal-dark">11</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-warmDark mb-1">{t.position.trainBusTitle}</h4>
                      <p className="text-warmGray leading-relaxed">{t.position.trainBusText}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-warmDark mb-1">{t.position.trainMetroTitle}</h4>
                      <p className="text-warmGray leading-relaxed">{t.position.trainMetroText}</p>
                    </div>
                  </div>
                </div>
              )}

              {mode === "aereo" && (
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-warmDark mb-1">{t.position.planeAirportTitle}</h4>
                      <p className="text-warmGray leading-relaxed">{t.position.planeAirportText}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-teal-dark">9</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-warmDark mb-1">{t.position.planeFairTitle}</h4>
                      <p className="text-warmGray leading-relaxed">{t.position.planeFairText}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </FadeIn>

        {/* Metromare dedicated section */}
        <FadeIn delay={0.2}>
          <div className="mt-16">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-dark via-teal to-teal-dark p-8 md:p-12 shadow-xl">
              {/* decorative circles */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5" />

              <div className="relative grid md:grid-cols-[auto,1fr] gap-8 items-center">
                {/* Logo */}
                <div className="flex justify-center md:justify-start">
                  <div className="bg-white rounded-2xl p-6 shadow-lg flex items-center justify-center w-48 h-32">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <div className="w-8 h-8 rounded-full bg-teal-dark flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="font-serif text-2xl text-teal-dark font-bold tracking-tight">
                        metro<span className="text-coral">mare</span>
                      </div>
                      <div className="text-[10px] text-warmGray tracking-widest uppercase mt-1">
                        Start Romagna
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-white text-center md:text-left">
                  <p className="text-white/70 font-semibold text-xs tracking-[0.2em] uppercase mb-2">
                    {t.position.metromareEyebrow}
                  </p>
                  <h3 className="font-serif text-2xl md:text-4xl mb-3">
                    {t.position.metromareTitle}
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-6 max-w-2xl">
                    {t.position.metromareText}
                  </p>
                  <a
                    href="https://www.startromagna.it/servizi/metromare/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-dark font-semibold rounded-full hover:bg-cream transition-colors duration-200"
                  >
                    {t.position.metromareCta}
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
