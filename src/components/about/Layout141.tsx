"use client";
import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout141() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Credentials</p>
              <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">MLP Financial Consultant qualification</h2>
              <p className="md:text-md">This qualification means I&apos;ve demonstrated comprehensive professional expertise and the ability to use structured consulting tools effectively. It&apos;s not just a title. It&apos;s a commitment to the standards that make good advice reliable.</p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button title="Learn" variant="secondary">Learn</Button>
                <Button title="Services" variant="link" size="link" iconRight={<RxChevronRight />}>Services</Button>
              </div>
            </div>
          </div>
          <div><img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg" className="size-full object-cover" alt="Credentials" /></div>
        </div>
      </div>
    </section>
  );
}
