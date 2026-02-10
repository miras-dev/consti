"use client";

import { Button } from "@relume_io/relume-ui";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Cta57() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const { t } = useLanguage();

  return (
    <section id="relume" className="bg-black text-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div ref={sectionRef} className="mx-auto w-full max-w-lg text-center overflow-hidden">
          <motion.h1
            initial={{ x: "-100%", opacity: 0 }}
            animate={isInView ? { x: "0%", opacity: 1 } : { x: "-100%", opacity: 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.8 }}
            className="text-4xl font-bold md:text-5xl lg:text-6xl"
          >
            {t.cta.heading1}
          </motion.h1>
          <motion.h1
            initial={{ x: "100%", opacity: 0 }}
            animate={isInView ? { x: "0%", opacity: 1 } : { x: "100%", opacity: 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.15 }}
            className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl"
          >
            {t.cta.heading2}
          </motion.h1>
          <p className="md:text-md">
            {t.cta.subtitle}
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
            <Button title="Book now">{t.cta.bookNow}</Button>
            <Button title="Schedule" variant="secondary">{t.cta.schedule}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
