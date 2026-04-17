"use client";

import FadeIn from "./FadeIn";
import { useT } from "@/lib/i18n/LanguageContext";

function CardTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[11px] font-semibold tracking-[0.15em] uppercase text-white/90 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1">
      {children}
    </span>
  );
}

export default function Attractions() {
  const { t } = useT();
  return (
    <section id="zone" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-coral font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              {t.attractions.eyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-warmDark mb-4">
              {t.attractions.title}
            </h2>
            <p className="text-warmGray text-lg max-w-2xl mx-auto leading-relaxed">
              {t.attractions.intro}
            </p>
          </div>
        </FadeIn>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* Parco del Mare */}
          <FadeIn delay={0.05} className="md:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-md group h-[420px] md:h-[460px]">
              <div className="grid grid-cols-2 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src="/images/parco-mare-1.jpg"
                    alt="Parco del Mare di Rimini - vista 1"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="relative overflow-hidden border-l-2 border-cream">
                  <img
                    src="/images/parco-mare-2.jpg"
                    alt="Parco del Mare di Rimini - vista 2"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <CardTag>{t.attractions.parcoTag}</CardTag>
                <h3 className="font-serif text-2xl md:text-4xl mt-3 mb-2">
                  {t.attractions.parcoTitle}
                </h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-xl">
                  {t.attractions.parcoText}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Le Befane */}
          <FadeIn delay={0.1} className="md:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-md group h-[420px] md:h-[460px]">
              <div className="grid grid-cols-2 grid-rows-2 gap-[2px] h-full bg-cream">
                <div className="relative overflow-hidden row-span-2">
                  <img
                    src="/images/befane-1.jpg"
                    alt="Le Befane Shopping Centre - ingresso"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src="/images/befane-2.jpg"
                    alt="Le Befane Shopping Centre - interno"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src="/images/befane-3.jpg"
                    alt="Le Befane Shopping Centre - negozi"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <CardTag>{t.attractions.befaneTag}</CardTag>
                <h3 className="font-serif text-2xl md:text-4xl mt-3 mb-2">
                  {t.attractions.befaneTitle}
                </h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  {t.attractions.befaneText}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Via Carducci / Regina Elena */}
          <FadeIn delay={0.15} className="md:col-span-4">
            <div className="relative rounded-3xl overflow-hidden shadow-md group h-[340px]">
              <img
                src="/images/carducci.jpg"
                alt="Via Carducci e Viale Regina Elena - negozi"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
                <CardTag>{t.attractions.carducciTag}</CardTag>
                <h3 className="font-serif text-xl md:text-2xl mt-2 mb-1">
                  {t.attractions.carducciTitle}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {t.attractions.carducciText}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Locali Club */}
          <FadeIn delay={0.2} className="md:col-span-4">
            <div className="relative rounded-3xl overflow-hidden shadow-md group h-[340px]">
              <img
                src="/images/club.jpg"
                alt="Locali e discoteche di Rimini"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
                <CardTag>{t.attractions.clubTag}</CardTag>
                <h3 className="font-serif text-xl md:text-2xl mt-2 mb-1">
                  {t.attractions.clubTitle}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {t.attractions.clubText}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Conad & servizi */}
          <FadeIn delay={0.25} className="md:col-span-4">
            <div className="relative rounded-3xl overflow-hidden shadow-md group h-[340px]">
              <img
                src="/images/conad.jpg"
                alt="Conad, farmacia e alimentari nelle vicinanze"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
                <CardTag>{t.attractions.conadTag}</CardTag>
                <h3 className="font-serif text-xl md:text-2xl mt-2 mb-1">
                  {t.attractions.conadTitle}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {t.attractions.conadText}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Locali serata - wide */}
          <FadeIn delay={0.3} className="md:col-span-12">
            <div className="relative rounded-3xl overflow-hidden shadow-md group h-[300px] md:h-[360px]">
              <img
                src="/images/locali-serata.jpg"
                alt="Locali famosi di Rimini per cena e serate"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />
              <div className="absolute inset-0 flex items-end md:items-center p-6 md:p-10">
                <div className="text-white max-w-2xl">
                  <CardTag>{t.attractions.seraTag}</CardTag>
                  <h3 className="font-serif text-2xl md:text-4xl mt-3 mb-3">
                    {t.attractions.seraTitle}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4">
                    {t.attractions.seraText}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Frontemare", "Bounty", "Barumba", "Coconuts"].map((name) => (
                      <span
                        key={name}
                        className="text-sm font-semibold text-white bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
