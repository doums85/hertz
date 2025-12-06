import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hertz Sénégal - Location de voiture",
  description: "Louez une voiture au Sénégal avec Hertz. Large choix de véhicules, service de qualité.",
  openGraph: {
    title: "Hertz Sénégal - Location de voiture",
    description: "Louez une voiture au Sénégal avec Hertz. Large choix de véhicules, service de qualité.",
    type: "website",
    locale: "fr_SN",
    siteName: "Hertz Sénégal",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
