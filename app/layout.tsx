import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import { AnimationProvider } from "./components/AnimationProvider";
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
    "AI agents",
    "process automation",
    "AI implementation",
  ],
  authors: [
    { name: "Louis du Plessis", url: "https://linkedin.com/in/louis-dup" },
    { name: "Kelly" },
  ],
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
    // Organization Schema
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://lewkai.com/#organization",
      name: "LewkAI",
      alternateName: "Lewkai",
      url: "https://lewkai.com",
      logo: {
        "@type": "ImageObject",
        url: "https://lewkai.com/logo.png",
        width: 512,
        height: 512,
      },
      description:
        "AI architecture and automation for software-led businesses. We design resilient systems that turn AI into durable capability.",
      foundingDate: "2024",
      founders: [
        {
          "@type": "Person",
          name: "Louis du Plessis",
        },
        {
          "@type": "Person",
          name: "Kelly",
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cape Town",
        addressCountry: "ZA",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hello@lewkai.com",
        availableLanguage: ["English"],
      },
      sameAs: [
        "https://linkedin.com/company/lewkai",
      ],
      areaServed: {
        "@type": "Place",
        name: "South Africa",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Process Automation",
              description:
                "Streamline workflows and free your team from repetitive tasks with intelligent document processing and workflow orchestration.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Customer Service AI",
              description:
                "AI chatbots, virtual assistants, and 24/7 customer engagement systems.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Data Analytics & Insights",
              description:
                "Transform raw data into actionable intelligence with predictive analytics and business intelligence dashboards.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom AI Solutions",
              description:
                "Tailored AI implementations for unique business requirements.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Agents",
              description:
                "Deploy task-specific AI agents that execute workflows and coordinate tools.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website Services",
              description:
                "Build and optimize modern websites with design, development, and analytics.",
            },
          },
        ],
      },
    },
    // WebSite Schema
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://lewkai.com/#website",
      name: "LewkAI",
      url: "https://lewkai.com",
      publisher: {
        "@id": "https://lewkai.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://lewkai.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    // Person Schema - Louis du Plessis
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://lewkai.com/#louis-duplessis",
      name: "Louis du Plessis",
      jobTitle: "Co-Founder",
      worksFor: {
        "@id": "https://lewkai.com/#organization",
      },
      url: "https://linkedin.com/in/louis-dup",
      sameAs: ["https://linkedin.com/in/louis-dup"],
    },
    // Person Schema - Kelly
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://lewkai.com/#kelly",
      name: "Kelly",
      jobTitle: "Co-Founder",
      worksFor: {
        "@id": "https://lewkai.com/#organization",
      },
    },
    // ProfessionalService Schema
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://lewkai.com/#service",
      name: "LewkAI AI Implementation Services",
      provider: {
        "@id": "https://lewkai.com/#organization",
      },
      areaServed: {
        "@type": "Place",
        name: "South Africa",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Services",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "Service",
              name: "Process Automation",
              description: "Workflow automation and intelligent document processing",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "Service",
              name: "Customer Service AI",
              description: "AI chatbots and 24/7 customer engagement",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "Service",
              name: "AI Agents",
              description: "Task-specific AI agents for workflow execution",
            },
          },
        ],
      },
    },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} ${spaceGrotesk.variable} antialiased`}>
        <AnimationProvider />
        {children}
      </body>
    </html>
  );
}
