"use client";
import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Philosophy</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">Individualized guidance built on transparency</h1>
            <p className="md:text-md">I believe financial success and career advancement are inseparable. My approach is tailored to each client&apos;s circumstances, whether you&apos;re a student starting out, a young professional navigating early career decisions, an academic planning for the future, or an international relocating to Germany.</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Explore" variant="secondary">Explore</Button>
              <Button title="vCard" variant="link" size="link" iconRight={<RxChevronRight />}>vCard</Button>
            </div>
          </div>
          <div><img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" className="w-full object-cover" alt="Philosophy" /></div>
        </div>
      </div>
    </section>
  );
}
