"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button } from "@relume_io/relume-ui";
import React from "react";
import { RxPlus } from "react-icons/rx";

const faqs = [
  { q: "What languages do you speak?", a: "I work in both German and English, making it easy for internationals relocating to Germany or anyone more comfortable in English. Clear communication is essential to good consulting." },
  { q: "How are consultations structured?", a: "Initial consultations are typically one hour. We discuss your situation, goals, and concerns. Follow-up sessions build on what we've learned, with concrete action steps between meetings." },
  { q: "Is everything confidential?", a: "Absolutely. Your financial and career information remains strictly confidential. Trust is the foundation of good consulting work." },
  { q: "Can we meet remotely?", a: "Yes. We can consult by phone or video call if that works better for you. The format doesn't change the quality of guidance you receive." },
  { q: "What's your approach to planning?", a: "I believe in transparent, straightforward advice tailored to your situation. No pressure, no unnecessary products. Just honest guidance toward your goals." },
];

export function Faq5() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">Questions</h2>
          <p className="md:text-md">Find answers to what matters most about working together.</p>
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
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">Still have questions?</h4>
          <p className="md:text-md">Get in touch directly and we&apos;ll talk through anything else.</p>
          <div className="mt-6 md:mt-8"><Button title="Contact" variant="secondary">Contact</Button></div>
        </div>
      </div>
    </section>
  );
}
