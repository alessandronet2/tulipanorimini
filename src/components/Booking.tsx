"use client";

import { useState, FormEvent } from "react";
import FadeIn from "./FadeIn";
import { useT } from "@/lib/i18n/LanguageContext";

interface BookingForm {
  nome: string;
  email: string;
  telefono: string;
  checkin: string;
  checkout: string;
  ospiti: string;
  messaggio: string;
}

export default function Booking() {
  const { t } = useT();
  const [form, setForm] = useState<BookingForm>({
    nome: "",
    email: "",
    telefono: "",
    checkin: "",
    checkout: "",
    ospiti: "2",
    messaggio: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("https://formsubmit.co/ajax/Alessandronet2@libero.it", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          telefono: form.telefono,
          ospiti: form.ospiti,
          checkin: form.checkin,
          checkout: form.checkout,
          messaggio: form.messaggio,
          _subject: `Nuova prenotazione Il Tulipano - ${form.nome}`,
          _template: "table",
        }),
      });

      if (!res.ok) throw new Error("Errore invio");
      setSubmitted(true);
    } catch {
      // Fallback: open mailto with pre-filled data
      const subject = encodeURIComponent(`Prenotazione Il Tulipano - ${form.nome}`);
      const body = encodeURIComponent(
        `Nome: ${form.nome}\nEmail: ${form.email}\nTelefono: ${form.telefono}\nOspiti: ${form.ospiti}\nCheck-in: ${form.checkin}\nCheck-out: ${form.checkout}\nMessaggio: ${form.messaggio}`
      );
      window.open(`mailto:Alessandronet2@libero.it?subject=${subject}&body=${body}`, "_blank");
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="prenota" className="py-20 md:py-28 bg-warmDark relative overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-coral rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-coral-light font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              {t.booking.eyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">
              {t.booking.title}
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              {t.booking.intro}
            </p>
          </div>
        </FadeIn>

        {submitted ? (
          <FadeIn direction="none">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center border border-white/10">
              <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-white mb-3">
                {t.booking.successTitle}
              </h3>
              <p className="text-white/70 text-lg">{t.booking.successText}</p>
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-white/10"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="nome" className="block text-white/80 text-sm font-semibold mb-2">
                    {t.booking.name} *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={form.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:border-coral transition-colors"
                    placeholder={t.booking.namePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white/80 text-sm font-semibold mb-2">
                    {t.booking.email} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:border-coral transition-colors"
                    placeholder={t.booking.emailPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-white/80 text-sm font-semibold mb-2">
                    {t.booking.phone}
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:border-coral transition-colors"
                    placeholder={t.booking.phonePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="ospiti" className="block text-white/80 text-sm font-semibold mb-2">
                    {t.booking.guests}
                  </label>
                  <select
                    id="ospiti"
                    name="ospiti"
                    value={form.ospiti}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-coral transition-colors appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n} className="text-warmDark">
                        {n} {n === 1 ? t.booking.guestSingular : t.booking.guestPlural}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="checkin" className="block text-white/80 text-sm font-semibold mb-2">
                    {t.booking.checkin} *
                  </label>
                  <input
                    type="date"
                    id="checkin"
                    name="checkin"
                    required
                    value={form.checkin}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-coral transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="checkout" className="block text-white/80 text-sm font-semibold mb-2">
                    {t.booking.checkout} *
                  </label>
                  <input
                    type="date"
                    id="checkout"
                    name="checkout"
                    required
                    value={form.checkout}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-coral transition-colors"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="messaggio" className="block text-white/80 text-sm font-semibold mb-2">
                    {t.booking.message}
                  </label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    rows={4}
                    value={form.messaggio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:border-coral transition-colors resize-none"
                    placeholder={t.booking.messagePlaceholder}
                  />
                </div>
              </div>

              {/* Price notice */}
              <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-white/60 text-sm leading-relaxed">
                  <span className="text-coral-light font-semibold">{t.booking.noteLabel}</span>{" "}
                  {t.booking.noteText}
                </p>
              </div>

              <div className="mt-8 text-center">
                <button
                  type="submit"
                  disabled={sending}
                  className="px-10 py-4 bg-coral text-white text-lg font-bold rounded-full hover:bg-coral-dark transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {t.booking.sending}
                    </span>
                  ) : (
                    t.booking.submit
                  )}
                </button>
              </div>
            </form>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
