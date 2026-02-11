import type { Metadata } from "next";
import { Navbar2 } from "@/components/shared/Navbar2";
import { Header83 } from "@/components/home/Header83";
import { Layout361 } from "@/components/home/Layout361";
import { Layout16 } from "@/components/home/Layout16";
import { Layout220 } from "@/components/home/Layout220";
import { Stats42 } from "@/components/home/Stats42";
import { Testimonial17 } from "@/components/home/Testimonial17";
import { Faq5 } from "@/components/home/Faq5";
import { Cta57 } from "@/components/home/Cta57";
import { Contact13 } from "@/components/home/Contact13";
import { Footer3 } from "@/components/shared/Footer3";
import { Layout412 } from "@/components/home/Layout412";

export const metadata: Metadata = {
  title: "Constantin Nixdorff - Financial & Career Consulting",
  description:
    "Independent financial and career consulting tailored to your goals. Expert guidance in financial planning, investment strategies, ETFs, retirement planning, tax optimization, and career coaching. Build your financial future with clarity and purpose.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Constantin Nixdorff - Financial & Career Consulting",
    description:
      "Independent financial and career consulting tailored to your goals. Expert guidance in financial planning, investment strategies, retirement planning, and career coaching.",
    url: "/",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Constantin Nixdorff - Financial & Career Consulting",
  description:
    "Independent financial and career consulting tailored to your goals. Expert guidance in financial planning, investment strategies, retirement planning, and career coaching.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://constantinixdorff.com",
  image: `${process.env.NEXT_PUBLIC_APP_URL || "https://constantinixdorff.com"}/opengraph-image`,
  priceRange: "$$",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 52.52,
      longitude: 13.405,
    },
    geoRadius: "50000",
  },
  serviceType: [
    "Financial Planning",
    "Investment Consulting",
    "Career Coaching",
    "Tax Optimization",
    "Retirement Planning",
    "Insurance Analysis",
    "Salary Negotiation",
    "Sustainable Investing",
  ],
  founder: {
    "@type": "Person",
    name: "Constantin Nixdorff",
    jobTitle: "Financial & Career Consultant",
  },
  knowsLanguage: ["English", "German"],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <Navbar2 />
        <Header83 />
        <Layout412 />
        <Layout361 />
        <Layout16 />
        <Layout220 />
        <Stats42 />
        <Testimonial17 />
        <Faq5 />
        <Cta57 />
        <Contact13 />
        <Footer3 />
      </div>
    </>
  );
}
