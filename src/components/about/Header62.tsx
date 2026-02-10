"use client";
import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header62() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">Background</p>
        <h1 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">Meet Constantin Nixdorff</h1>
        <p className="md:text-md">Independent financial and career consultant with deep expertise in building sustainable wealth and advancing professional growth.</p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="Services">Services</Button>
          <Button title="Contact" variant="secondary">Contact</Button>
        </div>
      </div>
    </section>
  );
}
