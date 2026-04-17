"use client";

import FadeIn from "./FadeIn";
import { useT } from "@/lib/i18n/LanguageContext";

const icons = [
  // phone
  <svg key="phone" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>,
  // email
  <svg key="email" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>,
  // address
  <svg key="address" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>,
  // whatsapp
  <svg key="wa" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.462-1.494A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.348 0-4.544-.696-6.39-1.888l-.446-.295-2.966.993.994-2.964-.296-.447A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>,
];

export default function Contacts() {
  const { t } = useT();

  const contacts = [
    {
      icon: icons[0],
      label: t.contacts.phone,
      value: "+39 328 035 8409",
      href: "tel:+393280358409",
    },
    {
      icon: icons[1],
      label: t.contacts.email,
      value: "Alessandronet2@libero.it",
      href: "mailto:Alessandronet2@libero.it",
    },
    {
      icon: icons[2],
      label: t.contacts.address,
      value: "Via del Tulipano 18, 47923 Rimini",
      href: "https://maps.google.com/?q=Via+del+Tulipano+18+Rimini",
    },
    {
      icon: icons[3],
      label: t.contacts.whatsapp,
      value: t.contacts.whatsappValue,
      href: "https://wa.me/393280358409",
    },
  ];

  return (
    <section id="contatti" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-coral font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              {t.contacts.eyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-warmDark mb-4">
              {t.contacts.title}
            </h2>
            <p className="text-warmGray text-lg max-w-2xl mx-auto leading-relaxed">
              {t.contacts.intro}
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, i) => (
            <FadeIn key={contact.label} delay={i * 0.08}>
              <a
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block p-6 bg-white rounded-2xl text-center hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-coral/10 text-coral flex items-center justify-center group-hover:bg-coral group-hover:text-white transition-colors duration-300">
                  {contact.icon}
                </div>
                <h3 className="font-bold text-warmDark mb-1">{contact.label}</h3>
                <p className="text-warmGray text-sm">{contact.value}</p>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
