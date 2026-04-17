"use client";

import FadeIn from "./FadeIn";
import { useT } from "@/lib/i18n/LanguageContext";

const beachImages = [
  { src: "/images/spiaggia-1.jpg" },
  { src: "/images/spiaggia-2.jpg" },
  { src: "/images/spiaggia-3.jpg" },
  { src: "/images/spiaggia-4.jpg" },
  { src: "/images/spiaggia-5.jpg" },
  { src: "/images/spiaggia-6.jpg" },
];

export default function Beach() {
  const { t } = useT();

  return (
    <section id="spiaggia" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-teal-dark font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              {t.beach.eyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-warmDark mb-2">
              {t.beach.title}
            </h2>
            <p className="text-xl md:text-2xl text-warmGray mb-6">
              {t.beach.subtitle}
            </p>
            <p className="text-warmGray text-lg max-w-2xl mx-auto leading-relaxed">
              {t.beach.description}
            </p>
          </div>
        </FadeIn>

        {/* Collage 3x2 desktop, 2x3 mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-10">
          {beachImages.map((img, i) => (
            <FadeIn key={img.src} delay={i * 0.06}>
              <div className="relative rounded-xl overflow-hidden group aspect-square">
                <img
                  src={img.src}
                  alt={`${t.beach.subtitle} ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Tags servizi */}
        <FadeIn delay={0.3}>
          <div className="flex flex-wrap justify-center gap-3">
            {t.beach.tags.map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-2 px-4 py-2 bg-teal/10 rounded-full"
              >
                <svg className="w-5 h-5 text-teal-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-semibold text-teal-dark">{tag}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
