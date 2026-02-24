import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lewkai — Discipline is the Advantage",
  description: "A strategic system for software companies navigating the speed and rate of change in AI. We don't chase trends — we build the frameworks to master them.",
  keywords: ["AI strategy", "software development", "AI velocity", "digital transformation", "South Africa", "enterprise AI"],
  authors: [{ name: "Lewkai" }],
  openGraph: {
    title: "Lewkai — Discipline is the Advantage",
    description: "A strategic system for software companies navigating the speed and rate of change in AI.",
    type: "website",
    siteName: "Lewkai",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lewkai — Discipline is the Advantage",
    description: "A strategic system for software companies navigating the speed and rate of change in AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
