import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ROMATSA · Maestranza en Terreno — Ñuble, Maule y Biobío",
  description:
    "Estructuras, galpones, techumbres para cerezos, jaulas antirrobo, portones y reparaciones pesadas. Taller móvil autónomo que va a tu faena en Ñuble, Maule y Biobío.",
  icons: { icon: "/img/logo-compacto.svg" },
  openGraph: {
    title: "ROMATSA · Maestranza en Terreno",
    description: "Soluciones en metal, hechas en tu faena. Ñuble, Maule y Biobío.",
    images: ["/img/galpon.jpg"],
    locale: "es_CL",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#162b45",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL" className={`${barlow.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
