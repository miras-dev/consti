"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button } from "@relume_io/relume-ui";
import React from "react";
import { RxPlus } from "react-icons/rx";

const faqs = [
  { q: "Who should seek consulting?", a: "Students, young professionals, academics, and anyone relocating to Germany benefit from tailored guidance. Whether you're building your first investment portfolio or negotiating a career move, I work with clients at every stage." },
  { q: "How does the process work?", a: "We begin with an initial consultation to understand your situation and goals. From there, I develop a personalised strategy covering financial planning, career development, or both, depending on your needs." },
  { q: "What makes your approach different?", a: "I combine financial expertise with career coaching to give you a complete picture. Rather than isolated advice, you get integrated strategies that support both your earning potential and long-term stability." },
  { q: "Do you work with internationals?", a: "Yes. I specialise in guiding internationals through German banking, tax structures, and career navigation. Understanding the local landscape is essential, and I make that transition clearer." },
  { q: "What about investment strategies?", a: "I focus on long-term wealth building through ETFs and diversified portfolios aligned with your risk tolerance. Sustainable and ethical investing options are also available for those interested." },
];

export function Faq5() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">Questions</h2>
          <p className="md:text-md">Find answers to common questions about my consulting approach and services.</p>
        </div>
        <Accordion type="multiple" className="grid items-start justify-stretch gap-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-border-primary px-5 md:px-6">
              <AccordionTrigger icon={<RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />} className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45">{faq.q}</AccordionTrigger>
              <AccordionContent className="md:pb-6">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl lg:text-3xl">Ready to get started?</h4>
          <p className="md:text-md">Reach out to discuss your situation.</p>
          <div className="mt-6 md:mt-8"><Button title="Contact" variant="secondary">Contact</Button></div>
        </div>
      </div>
    </section>
  );
}
