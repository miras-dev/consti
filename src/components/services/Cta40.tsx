"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React from "react";
import { useCmsImage } from "@/hooks/useCmsImage";

export function Cta40() {
  const consultationImg = useCmsImage('services.cta40.consultation', 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80');
  return (
    <section id="relume" className="bg-black text-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 border border-white/20 lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 md:p-12">
            <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">Start your consultation today</h2>
            <p className="md:text-md">Book a session and take the first step towards financial clarity and career growth.</p>
            <div className="mt-6 w-full max-w-sm md:mt-8">
              <form className="rb-4 mb-4 grid w-full max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
                <Input id="email" type="email" placeholder="Enter your email" />
                <Button title="Book now" variant="primary" size="sm" className="items-center justify-center px-6 py-3">Book now</Button>
              </form>
              <p className="text-xs">By signing up you agree to receive consultation information and updates from Constantin Nixdorff.</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={consultationImg}
              className="w-full object-cover"
              alt="Consultation"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
