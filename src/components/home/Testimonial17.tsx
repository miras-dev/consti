"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

const testimonials = [
  { quote: "Constantin helped me understand my finances in a way that actually made sense. No jargon, just clear strategy.", name: "Sarah Mueller", role: "Student, Berlin" },
  { quote: "His career coaching got me a 15% salary increase. He knew exactly what to say in negotiations.", name: "Marcus Hoffmann", role: "Software engineer, Munich" },
  { quote: "Moving to Germany felt overwhelming until Constantin mapped out my finances and job prospects. Invaluable.", name: "Elena Rossi", role: "International professional, Hamburg" },
];

export function Testimonial17() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">What clients say</h2>
          <p className="md:text-md">Real voices from those who&apos;ve worked with Constantin</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
              <div className="rb-5 mb-5 md:mb-6">
                <div className="mb-5 flex md:mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <BiSolidStar key={s} className="mr-1 size-6" />
                  ))}
                </div>
                <blockquote className="md:text-md">&ldquo;{t.quote}&rdquo;</blockquote>
              </div>
              <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
                <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" alt="Avatar" className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4" />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
