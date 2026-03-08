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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.drdacademyofficial.com"),
  title: "Dr D Academy | Elite Trading Education & Institutional Strategies",
  description:
    "Dr D Academy is the premier institution for professional trading education. Learn price action, market sentiment, and institutional strategies from Dr. D.",
  keywords: ["trading academy", "forex", "price action", "Dr D Academy", "trading education"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dr D Academy | Elite Trading Education",
    description: "Premier institution for professional trading education and institutional strategies.",
    url: "/",
    siteName: "Dr D Academy",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr D Academy | Elite Trading Education",
    description: "Premier institution for professional trading education and institutional strategies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
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
