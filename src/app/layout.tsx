import type { Metadata } from "next";
import "./globals.css";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { LanguageUpdater } from "@/components/shared/LanguageUpdater";

export const metadata: Metadata = {
  title: "Constantin Nixdorff - Financial & Career Consulting",
  description:
    "Independent financial and career consulting tailored to your goals. Build your financial future with clarity and purpose.",
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
