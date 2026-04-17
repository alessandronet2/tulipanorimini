import type { Metadata } from "next";
import { DM_Serif_Display, Nunito } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Appartamento Il Tulipano | Casa Vacanze a Rimini",
  description:
    "Casa vacanze accogliente e ristrutturata a Rimini. Prenota direttamente e risparmia. Ideale per coppie e famiglie, vicino al mare e al centro.",
  keywords: [
    "casa vacanze Rimini",
    "appartamento Rimini",
    "vacanze Rimini",
    "affitto Rimini",
    "Il Tulipano Rimini",
  ],
  openGraph: {
    title: "Appartamento Il Tulipano | Casa Vacanze a Rimini",
    description:
      "Casa vacanze accogliente e ristrutturata a Rimini. Prenota direttamente e risparmia.",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body
        className={`${dmSerif.variable} ${nunito.variable} font-sans antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
