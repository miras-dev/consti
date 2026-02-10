"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCmsImage } from "@/hooks/useCmsImage";

export function Header83() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  const imgFinancialPlanning = useCmsImage('home.header83.financialPlanning', 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80');
  const imgInvestmentEtfs = useCmsImage('home.header83.investmentEtfs', 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80');
  const imgRetirementPlanning = useCmsImage('home.header83.retirementPlanning', 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80');
  const imgInsuranceAnalysis = useCmsImage('home.header83.insuranceAnalysis', 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80');
  const imgCareerCoaching = useCmsImage('home.header83.careerCoaching', 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80');
  const imgTaxOptimization = useCmsImage('home.header83.taxOptimization', 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=800&q=80');
  const imgSalaryNegotiation = useCmsImage('home.header83.salaryNegotiation', 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=800&q=80');
  const imgInternationals = useCmsImage('home.header83.internationals', 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80');
  const imgSustainableInvesting = useCmsImage('home.header83.sustainableInvesting', 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800&q=80');

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacityContent = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const opacityOverlay = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [3.2, 1]);
  const opacityLabels = useTransform(scrollYProgress, [0.4, 0.75], [0, 1]);

  const services = [
    {
      label: t.services.financialPlanning,
      src: imgFinancialPlanning,
      alt: "Financial planning and budgeting",
    },
    {
      label: t.services.investmentEtfs,
      src: imgInvestmentEtfs,
      alt: "Investment strategies and ETFs",
    },
    {
      label: t.services.retirementPlanning,
      src: imgRetirementPlanning,
      alt: "Retirement and pension planning",
    },
    {
      label: t.services.insuranceAnalysis,
      src: imgInsuranceAnalysis,
      alt: "Insurance coverage analysis",
    },
    {
      label: t.services.careerCoaching,
      src: imgCareerCoaching,
      alt: "Career coaching and guidance",
    },
    {
      label: t.services.taxOptimization,
      src: imgTaxOptimization,
      alt: "Tax-efficient financial structuring",
    },
    {
      label: t.services.salaryNegotiation,
      src: imgSalaryNegotiation,
      alt: "Salary negotiation coaching",
    },
    {
      label: t.services.internationalsInGermany,
      src: imgInternationals,
      alt: "Financial guidance for internationals in Germany",
    },
    {
      label: t.services.sustainableInvesting,
      src: imgSustainableInvesting,
      alt: "Sustainable and ethical investment",
    },
  ];

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
                {t.hero.title.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index === 0 && <br />}
                  </span>
                ))}
              </h1>
              <p className="mx-auto text-text-alternative md:text-lg max-w-lg">
                {t.hero.subtitle}
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <button className="btn-outline-light">
                  {t.hero.bookConsultation}
                </button>
                <button className="btn-ghost text-white hover:bg-white/10">
                  {t.hero.learnMore}
                </button>
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
