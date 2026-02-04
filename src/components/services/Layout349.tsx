"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { RxChevronRight } from "react-icons/rx";
import clsx from "clsx";

export function Layout349() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Throttled scroll handler to prevent performance issues
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    // Find which section is currently in view
    let currentSection = 0;
    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        if (scrollPosition >= elementTop) {
          currentSection = index;
        }
      }
    });

    setActiveSection(currentSection);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const throttledScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 16); // ~60fps
    };

    window.addEventListener("scroll", throttledScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  const sections = [
    {
      label: "Banking",
      title: "Accounts, cards, and financial foundations",
      desc: "The basics matter. I help you navigate banking options, choose the right accounts and cards, and build a solid financial foundation from the start.",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=600&q=80&fit=crop"
    },
    {
      label: "Investment",
      title: "ETFs, portfolios, and long-term growth",
      desc: "Building wealth requires discipline and clarity. I guide you through investment options that match your goals and risk tolerance.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&q=80&fit=crop"
    },
    {
      label: "Insurance",
      title: "Coverage that protects what matters",
      desc: "From health to liability insurance, I analyse your needs and recommend coverage that gives you real security without unnecessary costs.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&q=80&fit=crop"
    },
    {
      label: "Retirement",
      title: "Planning for a secure future",
      desc: "Retirement planning starts earlier than most think. I help you understand pension schemes, savings vehicles, and tax-efficient strategies.",
      image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&h=600&q=80&fit=crop"
    },
  ];

  return (
    <section id="relume" className="bg-black text-white px-[5%]">
      <div className="container">
        <div className="relative grid gap-x-12 py-16 sm:gap-y-12 md:grid-cols-2 md:py-0 lg:gap-x-20">
          <div className="grid grid-cols-1 gap-12 md:block">
            {sections.map((s, i) => (
              <div
                key={i}
                ref={(el) => { sectionRefs.current[i] = el; }}
              >
                <div className="flex flex-col items-start justify-center md:h-screen">
                  <p className="mb-3 font-semibold md:mb-4">{s.label}</p>
                  <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">{s.title}</h2>
                  <p className="md:text-md">{s.desc}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="Explore" variant="secondary">Explore</Button>
                    <Button title="Learn more" variant="link" size="link" iconRight={<RxChevronRight />}>Learn more</Button>
                  </div>
                  <div className="mt-10 block w-full md:hidden">
                    <img
                      src={s.image}
                      className="w-full"
                      alt={`${s.label} image`}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="sticky top-0 hidden h-screen md:flex md:flex-col md:items-center md:justify-center">
            {sections.map((section, i) => (
              <img
                key={i}
                src={section.image}
                className={clsx("absolute w-full transition-opacity duration-500 ease-in-out", {
                  "opacity-100": activeSection === i,
                  "opacity-0": activeSection !== i,
                })}
                alt={`${section.label} illustration`}
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
