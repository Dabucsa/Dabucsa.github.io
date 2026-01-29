import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dojo Zen Pucon | Artes Marciales - BJJ, MMA, Kickboxing, Boxeo",
  description:
    "Centro de artes marciales en Pucon, Chile. Entrena BJJ, No-Gi, MMA, Kickboxing, Boxeo y Funcional con instructores profesionales.",
  keywords: [
    "artes marciales pucon",
    "bjj pucon",
    "mma pucon",
    "kickboxing pucon",
    "boxeo pucon",
    "dojo zen",
    "jiu jitsu pucon",
  ],
  authors: [{ name: "Dojo Zen Pucon" }],
  openGraph: {
    title: "Dojo Zen Pucon | Artes Marciales",
    description: "Centro de artes marciales en Pucon - BJJ, MMA, Kickboxing, Boxeo",
    type: "website",
    locale: "es_CL",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
