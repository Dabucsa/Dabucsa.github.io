import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/Providers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const isSpanish = true; // Static export — default to Spanish; client toggles language dynamically

  return {
    metadataBase: new URL("https://pucontour.zeroaustral.cl"),
    title: {
      default: isSpanish
        ? "Descubre Pucón — Guía Turística para Huéspedes"
        : "Discover Pucón — Guest Travel Guide",
      template: isSpanish ? "%s | Descubre Pucón" : "%s | Discover Pucón",
    },
    description: isSpanish
      ? "Tu guía completa para explorar Pucón y alrededores. Restaurantes, termas, aventura, naturaleza y cultura con criterio práctico."
      : "Your complete guide to exploring Pucón and the surrounding area. Restaurants, hot springs, adventure, nature, and culture with practical guidance.",
    keywords: isSpanish
      ? [
          "pucón turismo",
          "que hacer en pucón",
          "termas pucón",
          "restaurantes pucón",
          "volcán villarrica",
          "itinerario pucón",
          "guía pucón",
          "pucón andino",
          "lago villarrica",
        ]
      : [
          "pucon travel",
          "what to do in pucon",
          "pucon hot springs",
          "pucon restaurants",
          "villarrica volcano",
          "pucon itinerary",
          "pucon guide",
          "southern chile travel",
          "villarrica lake",
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
      locale: isSpanish ? "es_CL" : "en_US",
      url: "https://pucontour.zeroaustral.cl",
      siteName: isSpanish ? "Descubre Pucón" : "Discover Pucón",
      title: isSpanish
        ? "Descubre Pucón — Guía Turística para Huéspedes"
        : "Discover Pucón — Guest Travel Guide",
      description: isSpanish
        ? "Restaurantes, termas, aventura, naturaleza y cultura en Pucón. Itinerarios de 1 a 7 días."
        : "Restaurants, hot springs, adventure, nature, and culture in Pucón. Itineraries from 1 to 7 days.",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
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

        <Providers initialLang="es">
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
