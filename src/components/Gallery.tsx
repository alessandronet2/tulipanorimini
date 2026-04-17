"use client";

import FadeIn from "./FadeIn";
import { useT } from "@/lib/i18n/LanguageContext";

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Soggiorno luminoso", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/gallery-2.jpg", alt: "Camera da letto", span: "" },
  { src: "/images/gallery-3.jpg", alt: "Cucina attrezzata", span: "" },
  { src: "/images/gallery-4.jpg", alt: "Bagno moderno", span: "" },
  { src: "/images/gallery-5.jpg", alt: "Terrazzo", span: "" },
  { src: "/images/gallery-6.jpg", alt: "Dettaglio arredamento", span: "md:col-span-2" },
];

export default function Gallery() {
  const { t } = useT();
  return (
    <section id="galleria" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-coral font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              {t.gallery.eyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-warmDark mb-4">
              {t.gallery.title}
            </h2>
            <p className="text-warmGray text-lg max-w-2xl mx-auto leading-relaxed">
              {t.gallery.intro}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <FadeIn key={img.alt} delay={i * 0.06} className={img.span}>
              <div className="relative rounded-xl overflow-hidden group aspect-square h-full">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
