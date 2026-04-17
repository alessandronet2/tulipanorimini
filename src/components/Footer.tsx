"use client";

import { useT } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { t } = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-warmDark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl text-white mb-2">Il Tulipano</h3>
            <p className="text-white/50 text-sm">{t.footer.tagline}</p>
          </div>

          {/* Quick contacts */}
          <div className="text-center">
            <p className="text-white/70 text-sm">
              Via del Tulipano 18, 47923 Rimini (RN)
            </p>
            <p className="text-white/70 text-sm mt-1">
              <a href="mailto:Alessandronet2@libero.it" className="hover:text-coral transition-colors">
                Alessandronet2@libero.it
              </a>
              {" "}&middot;{" "}
              <a href="tel:+393280358409" className="hover:text-coral transition-colors">
                +39 328 035 8409
              </a>
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-white/40 text-sm">
              &copy; {year} Appartamento Il Tulipano.
              <br />
              {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
