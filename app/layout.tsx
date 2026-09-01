import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://audanweb.xyz"),
  title: "AudanWeb: Make Every Marketing Dollar Count",
  description:
    "AudanWeb helps internet products, SaaS companies, startups, and developers get meaningful attention through authentic promotions, creator collaborations, and internet-native distribution.",
  keywords: [
    "growth studio",
    "startup marketing",
    "creator collaborations",
    "SaaS marketing",
    "product launch",
    "internet distribution",
  ],
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon.ico" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "AudanWeb: Make Every Marketing Dollar Count",
    description:
      "Authentic promotion, meaningful attention, and distribution that doesn't feel like noise.",
    type: "website",
    images: [{ url: "/audanweb.jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AudanWeb: Make Every Marketing Dollar Count",
    images: ["/audanweb.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-fg overflow-x-hidden font-sans">
        {children}
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
