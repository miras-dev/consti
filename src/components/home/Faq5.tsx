"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";
import { RxPlus } from "react-icons/rx";
import { useLanguage } from "@/contexts/LanguageContext";

export function Faq5() {
  const { t } = useLanguage();

  const faqs = [
    { q: t.faq.question1, a: t.faq.answer1 },
    { q: t.faq.question2, a: t.faq.answer2 },
    { q: t.faq.question3, a: t.faq.answer3 },
    { q: t.faq.question4, a: t.faq.answer4 },
    { q: t.faq.question5, a: t.faq.answer5 },
  ];

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">{t.faq.heading}</h2>
          <p className="md:text-md">{t.faq.subtitle}</p>
        </div>
        <Accordion type="multiple" className="grid items-start justify-stretch gap-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-border-primary px-5 md:px-6">
              <AccordionTrigger
                icon={<RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />}
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
              >
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl lg:text-3xl">{t.faq.readyHeading}</h4>
          <p className="md:text-md">{t.faq.readySubtitle}</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">{t.faq.contact}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
