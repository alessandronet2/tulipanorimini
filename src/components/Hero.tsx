"use client";

import { motion } from "framer-motion";
import { useT } from "@/lib/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Hero() {
  const { t } = useT();
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center h-full text-center px-4">
        {/* Spacer top — compensa navbar */}
        <div className="flex-1 min-h-[80px]" />

        {/* Contenuto centrale */}
        <div className="flex flex-col items-center">
          {/* Liquid glass language switcher */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 md:mb-6"
          >
            <LanguageSwitcher variant="hero" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/90 text-xs md:text-sm tracking-[0.3em] uppercase font-semibold mb-4 md:mb-5"
          >
            {t.hero.welcome}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mb-5 md:mb-6"
          >
            <img
              src="/images/logo.svg"
              alt="Appartamento Il Tulipano"
              className="w-52 md:w-64 lg:w-72 h-auto mx-auto drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-white/90 text-sm md:text-base lg:text-lg max-w-lg leading-relaxed mb-5 md:mb-7"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <button
              onClick={() => scrollTo("#prenota")}
              className="px-7 py-3 bg-coral text-white text-base font-bold rounded-full hover:bg-coral-dark transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              {t.common.bookNow}
            </button>
            <button
              onClick={() => scrollTo("#camere")}
              className="px-7 py-3 bg-white/15 backdrop-blur-sm text-white text-base font-semibold rounded-full border border-white/30 hover:bg-white/25 transition-all duration-200"
            >
              {t.hero.discoverCta}
            </button>
          </motion.div>
        </div>

        {/* Spacer bottom — contiene scroll indicator */}
        <div className="flex-1 min-h-[80px] flex items-end justify-center pb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-1.5"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
