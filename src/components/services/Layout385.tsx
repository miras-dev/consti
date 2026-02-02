"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout385() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Services</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">Two paths to success</h1>
          <p className="md:text-md">Integrated consulting for your financial and career goals.</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="grid auto-cols-fr grid-cols-1 flex-col border border-border-primary sm:grid-cols-2 lg:col-span-2">
            <div className="flex size-full flex-col items-center justify-center self-start">
              <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-bento-portrait2.svg" alt="Financial" className="size-full object-cover" />
            </div>
            <div className="block p-6 sm:flex sm:flex-col sm:justify-center md:p-8">
              <div>
                <p className="mb-2 font-semibold">Financial</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">Build lasting wealth and security</h2>
                <p>Personal planning, investments, retirement strategies, and insurance guidance.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button title="Explore" variant="link" size="link" iconRight={<RxChevronRight />}>Explore</Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex size-full flex-col items-center justify-center self-start">
              <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg" alt="Career" className="size-full object-cover" />
            </div>
            <div className="block p-6 sm:flex sm:flex-col sm:justify-center md:p-8">
              <div>
                <p className="mb-2 font-semibold">Career</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">Advance your professional trajectory</h2>
                <p>Salary negotiation, CV reviews, interview prep, and job search strategy.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button title="Explore" variant="link" size="link" iconRight={<RxChevronRight />}>Explore</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
