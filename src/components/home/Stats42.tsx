"use client";

import React from "react";

export function Stats42() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="text-2xl font-bold leading-[1.2] md:text-3xl lg:text-4xl">
              Results built on experience and trust
            </h3>
          </div>
          <div>
            <p className="md:text-md">
              Over a decade of independent consulting work across Germany.
              Helping clients navigate financial decisions and career transitions
              with clarity. Real outcomes from straightforward guidance.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col border border-border-primary p-8 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2">
            <h3 className="mb-8 text-md font-bold leading-[1.4] md:mb-10 md:text-xl lg:mb-12">Years consulting</h3>
            <p className="mt-auto text-right text-10xl font-bold leading-[1.3] md:text-[3rem] lg:text-[3.5rem]">10+</p>
            <div className="my-4 h-px w-full bg-border-primary" />
            <p className="text-right">Independent financial and career guidance</p>
          </div>
          <div>
            <img className="aspect-[3/2] size-full object-cover" src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" alt="Consulting" />
          </div>
          <div className="border border-border-primary p-8">
            <h3 className="mb-8 text-md font-bold leading-[1.4] md:mb-10 md:text-xl lg:mb-12">Years consulting</h3>
            <p className="text-right text-10xl font-bold leading-[1.3] md:text-[3rem] lg:text-[3.5rem]">10+</p>
            <div className="my-4 h-px w-full bg-border-primary" />
            <p className="text-right">Independent financial and career guidance</p>
          </div>
          <div className="border border-border-primary p-8">
            <h3 className="mb-8 text-md font-bold leading-[1.4] md:mb-10 md:text-xl lg:mb-12">Years consulting</h3>
            <p className="text-right text-10xl font-bold leading-[1.3] md:text-[3rem] lg:text-[3.5rem]">10+</p>
            <div className="my-4 h-px w-full bg-border-primary" />
            <p className="text-right">Independent financial and career guidance</p>
          </div>
          <div>
            <img className="aspect-[3/2] size-full object-cover" src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" alt="Consulting" />
          </div>
        </div>
      </div>
    </section>
  );
}
