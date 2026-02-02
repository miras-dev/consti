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

const faqs = [
  { q: "Who should seek consulting?", a: "Students building their first financial foundation, young professionals planning their careers, internationals navigating Germany's financial system, and anyone seeking clarity on long-term strategy. There's no minimum income or complexity required--just a genuine interest in understanding your situation better." },
  { q: "How does financial consulting work?", a: "We start with a thorough assessment of your current position, goals, and constraints. From there, I develop a tailored strategy covering banking, investments, insurance, and tax efficiency. Regular reviews ensure your plan stays aligned with your life as it changes." },
  { q: "What about career coaching?", a: "Career coaching addresses salary negotiation, CV optimisation, job search strategy, and interview preparation. I work with you to identify your strengths, clarify your direction, and build confidence in professional conversations. It's practical, focused work." },
  { q: "Can you help internationals?", a: "Yes. I specialise in guiding internationals through Germany's financial landscape, from opening bank accounts to understanding pension schemes and tax obligations. Relocating is complex; I make it manageable." },
  { q: "How much does consulting cost?", a: "Fees vary based on the scope and complexity of your situation. I'm transparent about costs upfront. Many clients find the investment pays for itself through better financial decisions and career outcomes." },
];

export function Faq5() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">Questions</h2>
          <p className="md:text-md">Answers to what matters most when starting your financial and career journey</p>
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
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">Ready to begin?</h4>
          <p className="md:text-md">Get in touch to discuss your situation</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">Contact</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
