"use client";

import FadeIn from "./FadeIn";
import { useT } from "@/lib/i18n/LanguageContext";

export default function Rooms() {
  const { t } = useT();

  const features = [
    { title: t.rooms.f1Title, text: t.rooms.f1Text },
    { title: t.rooms.f2Title, text: t.rooms.f2Text },
    { title: t.rooms.f3Title, text: t.rooms.f3Text },
    { title: t.rooms.f4Title, text: t.rooms.f4Text },
  ];

  return (
    <section id="camere" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-coral font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              {t.rooms.eyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-warmDark mb-4">
              {t.rooms.title}
            </h2>
            <p className="text-warmGray text-lg max-w-2xl mx-auto leading-relaxed">
              {t.rooms.intro}
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Main room image */}
          <FadeIn delay={0.1}>
            <div className="relative rounded-2xl overflow-hidden shadow-lg group aspect-[4/3]">
              <img
                src="/images/camera-1.jpg"
                alt="Il Tulipano"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col justify-center space-y-6">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-warmDark text-lg">{f.title}</h3>
                    <p className="text-warmGray">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
