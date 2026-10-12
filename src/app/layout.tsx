import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

/**
 * Fonts are loaded with `next/font` so they are self-hosted, preloaded and
 * never cause layout shift. Each one is exposed as a CSS variable that the
 * Tailwind config (fontFamily.body / fontFamily.heading) reads.
 */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aminu Daniel - Full-Stack Developer | Web, Mobile, Branding & Automations",
  description:
    "AOD  DANIEL (Aminu Daniel) builds brands, websites, mobile apps and business automations for startups and small businesses — design to deployed code, end to end.",
  icons: {
    icon: "/assets/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <head>
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/css/fontawesome-5.14.0.min.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/css/flaticon.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
