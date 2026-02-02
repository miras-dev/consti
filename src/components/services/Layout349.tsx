"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useEffect, useState } from "react";
import { RxChevronRight } from "react-icons/rx";
import clsx from "clsx";

export function Layout349() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionHeight = window.innerHeight;
      const currentScrollPosition = window.scrollY + sectionHeight / 2;
      const currentSection = Math.floor(currentScrollPosition / sectionHeight);
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { label: "Banking", title: "Accounts, cards, and financial foundations", desc: "The basics matter. I help you navigate banking options, choose the right accounts and cards, and build a solid financial foundation from the start." },
    { label: "Investment", title: "ETFs, portfolios, and long-term growth", desc: "Building wealth requires discipline and clarity. I guide you through investment options that match your goals and risk tolerance." },
    { label: "Insurance", title: "Coverage that protects what matters", desc: "From health to liability insurance, I analyse your needs and recommend coverage that gives you real security without unnecessary costs." },
    { label: "Retirement", title: "Planning for a secure future", desc: "Retirement planning starts earlier than most think. I help you understand pension schemes, savings vehicles, and tax-efficient strategies." },
  ];

  return (
    <section id="relume" className="px-[5%]">
      <div className="container">
        <div className="relative grid gap-x-12 py-16 sm:gap-y-12 md:grid-cols-2 md:py-0 lg:gap-x-20">
          <div className="grid grid-cols-1 gap-12 md:block">
            {sections.map((s, i) => (
              <div key={i}>
                <div className="flex flex-col items-start justify-center md:h-screen">
                  <p className="mb-3 font-semibold md:mb-4">{s.label}</p>
                  <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{s.title}</h2>
                  <p className="md:text-md">{s.desc}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="Explore" variant="secondary">Explore</Button>
                    <Button title="Learn more" variant="link" size="link" iconRight={<RxChevronRight />}>Learn more</Button>
                  </div>
                  <div className="mt-10 block w-full md:hidden">
                    <img src={`https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg`} className="w-full" alt={`${s.label} image`} />
                  </div>
                  <div className={clsx("fixed inset-0 -z-10 bg-[#e5e5e5] transition-opacity duration-300", {
                    "opacity-100": activeSection === 0 || activeSection === 2,
                    "opacity-0": activeSection !== 0 && activeSection !== 2,
                  })} />
                </div>
              </div>
            ))}
          </div>
          <div className="sticky top-0 hidden h-screen md:flex md:flex-col md:items-center md:justify-center">
            {sections.map((_, i) => (
              <img
                key={i}
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className={clsx("absolute w-full transition-opacity duration-300", {
                  "opacity-100": activeSection === i,
                  "opacity-0": activeSection !== i,
                })}
                alt={`Section ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
