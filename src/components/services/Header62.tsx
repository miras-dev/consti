"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header62() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">Guidance</p>
        <h1 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">Financial and career consulting</h1>
        <p className="md:text-md">Build wealth and advance your career with personalised consulting tailored to your goals</p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="Consult">Consult</Button>
          <Button title="Learn more" variant="secondary">Learn more</Button>
        </div>
      </div>
    </section>
  );
}
