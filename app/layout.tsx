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
  metadataBase: new URL("https://lewkai.com"),
  title: {
    default: "Lewkai — AI Architecture & Automation",
    template: "%s | Lewkai",
  },
  description:
    "AI architecture and automation for software-led businesses in Cape Town and South Africa. We design resilient systems that turn AI into durable capability.",
  keywords: [
    "AI architecture",
    "AI automation",
    "enterprise AI",
    "software systems",
    "AI strategy",
    "Cape Town",
    "South Africa",
  ],
  authors: [{ name: "Lewkai" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Lewkai — AI Architecture & Automation",
    description:
      "AI architecture and automation for software-led businesses in Cape Town and South Africa.",
    url: "https://lewkai.com",
    siteName: "Lewkai",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lewkai — AI Architecture & Automation",
    description:
      "AI architecture and automation for software-led businesses in Cape Town and South Africa.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "LewkAI",
      url: "https://lewkai.com",
      logo: "https://lewkai.com/logo.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cape Town",
        addressCountry: "ZA",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "LewkAI",
      url: "https://lewkai.com",
    },
  ];

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
