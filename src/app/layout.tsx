import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { LanguageUpdater } from "@/components/shared/LanguageUpdater";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://constantinixdorff.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Constantin Nixdorff - Financial & Career Consulting",
    template: "%s | Constantin Nixdorff",
  },
  description:
    "Independent financial and career consulting tailored to your goals. Expert guidance in financial planning, investment strategies, ETFs, retirement planning, tax optimization, and career coaching.",
  keywords: [
    "financial consulting",
    "career consulting",
    "financial planning",
    "investment strategies",
    "ETFs",
    "retirement planning",
    "tax optimization",
    "career coaching",
    "salary negotiation",
    "insurance analysis",
    "sustainable investing",
    "Constantin Nixdorff",
    "independent financial advisor",
    "Finanzberatung",
    "Karriereberatung",
  ],
  authors: [{ name: "Constantin Nixdorff" }],
  creator: "Constantin Nixdorff",
  publisher: "Constantin Nixdorff",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "de_DE",
    url: siteUrl,
    siteName: "Constantin Nixdorff",
    title: "Constantin Nixdorff - Financial & Career Consulting",
    description:
      "Independent financial and career consulting tailored to your goals. Expert guidance in financial planning, investment strategies, retirement planning, and career coaching.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Constantin Nixdorff - Financial & Career Consulting",
    description:
      "Independent financial and career consulting tailored to your goals. Expert guidance in financial planning, investment strategies, and career coaching.",
    creator: "@constantinixdorff",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>
          <LanguageUpdater />
          {children}
          <ChatWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}
