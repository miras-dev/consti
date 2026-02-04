"use client";

import { Button } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const services = [
  {
    label: "Financial Planning",
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    alt: "Financial planning and budgeting",
  },
  {
    label: "Investment & ETFs",
    src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    alt: "Investment strategies and ETFs",
  },
  {
    label: "Retirement Planning",
    src: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80",
    alt: "Retirement and pension planning",
  },
  {
    label: "Insurance Analysis",
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    alt: "Insurance coverage analysis",
  },
  {
    label: "Career Coaching",
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    alt: "Career coaching and guidance",
  },
  {
    label: "Tax Optimization",
    src: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=800&q=80",
    alt: "Tax-efficient financial structuring",
  },
  {
    label: "Salary Negotiation",
    src: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=800&q=80",
    alt: "Salary negotiation coaching",
  },
  {
    label: "Internationals in Germany",
    src: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    alt: "Financial guidance for internationals in Germany",
  },
  {
    label: "Sustainable Investing",
    src: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800&q=80",
    alt: "Sustainable and ethical investment",
  },
];

export function Header83() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacityContent = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const opacityOverlay = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [3.2, 1]);
  const opacityLabels = useTransform(scrollYProgress, [0.4, 0.75], [0, 1]);

  return (
    <section ref={sectionRef} id="relume" data-navbar-theme="dark" className="relative h-[700vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 z-10 flex h-full items-center justify-center"
          style={{ opacity: opacityContent }}
        >
          <div className="px-[5%]">
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <h1 className="mb-5 text-4xl font-bold text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                Build your financial future
                <br />
                with clarity and purpose
              </h1>
              <p className="mx-auto text-text-alternative md:text-lg max-w-lg">
                Independent financial and career consulting tailored to your
                goals. Whether you&apos;re starting out, advancing your career,
                or planning for retirement, I provide transparent guidance
                grounded in real expertise.
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button title="Book consultation" className="bg-white text-black hover:bg-gray-100 shadow-lg">Book consultation</Button>
                <Button title="Learn more" variant="secondary-alt" className="border-2 border-white text-white hover:bg-white hover:text-black shadow-lg">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 z-10 bg-black/50"
            style={{ opacity: opacityOverlay }}
          />
          <motion.div
            style={{ scale }}
            className="grid h-full w-full grid-cols-1 grid-rows-3 gap-0 md:grid-cols-3"
          >
            {services.map((service, i) => (
              <div
                key={i}
                className={`relative overflow-hidden ${i % 3 !== 1 ? "hidden md:block" : ""
                  }`}
              >
                <img
                  src={service.src}
                  alt={service.alt}
                  className="absolute inset-0 size-full object-cover"
                  style={{ filter: "brightness(0.4) contrast(0.8)" }}
                />
                <div className="absolute inset-0 bg-black/30" />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center p-4 md:p-5"
                  style={{ opacity: opacityLabels }}
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-white md:text-lg">
                    {service.label}
                  </span>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
