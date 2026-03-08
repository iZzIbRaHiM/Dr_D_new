import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/providers/LenisProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr D Academy | Elite Trading Education & Institutional Strategies",
  description:
    "Dr D Academy is the premier institution for professional trading education. Learn price action, market sentiment, and institutional strategies from Dr. D.",
  keywords: ["trading academy", "forex", "price action", "Dr D Academy", "trading education"],
  openGraph: {
    title: "Dr D Academy | Elite Trading Education",
    description: "Premier institution for professional trading education and institutional strategies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-midnight font-sans text-white">
        <LenisProvider>
          <Header />
          <main className="w-full min-w-0 overflow-x-hidden">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
