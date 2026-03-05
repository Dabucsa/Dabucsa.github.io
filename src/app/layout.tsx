import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/Providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pucontour.zeroaustral.cl"),
  title: {
    default: "Descubre Pucón — Guía Turística para Huéspedes",
    template: "%s | Descubre Pucón",
  },
  description:
    "Tu guía completa para explorar Pucón y alrededores. Restaurantes, termas, aventura, naturaleza y cultura. Itinerarios de 1 a 7 días.",
  keywords: [
    "pucón turismo",
    "que hacer en pucón",
    "termas pucón",
    "restaurantes pucón",
    "volcán villarrica",
    "itinerario pucón",
    "guía pucón",
    "pucón andino",
    "lago villarrica",
  ],
  authors: [{ name: "Pucón Andino", url: "https://pucontour.zeroaustral.cl" }],
  creator: "Pucón Andino & ZeroAustral",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://pucontour.zeroaustral.cl",
    siteName: "Descubre Pucón",
    title: "Descubre Pucón — Guía Turística para Huéspedes",
    description:
      "Restaurantes, termas, aventura, naturaleza y cultura en Pucón. Itinerarios de 1 a 7 días.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Animated background */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div
            className="blob w-[500px] h-[500px] -top-32 -left-24 bg-emerald-500"
            style={{ animation: "float1 12s ease-in-out infinite" }}
          />
          <div
            className="blob w-[400px] h-[400px] top-[40%] -right-32 bg-sky-500"
            style={{ animation: "float2 15s ease-in-out infinite" }}
          />
          <div
            className="blob w-[300px] h-[300px] bottom-[5%] left-[20%] bg-emerald-700"
            style={{ animation: "float1 10s ease-in-out infinite reverse" }}
          />
        </div>

        <Providers>
          <div className="relative z-10 min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
