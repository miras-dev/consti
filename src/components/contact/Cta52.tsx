"use client";
import { Button, Input } from "@relume_io/relume-ui";
import React from "react";

export function Cta52() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center border border-border-primary p-8 md:p-12 lg:p-16">
          <div className="max-w-lg text-center">
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">Support for internationals</h2>
            <p className="md:text-md">Relocating to Germany? I help internationals navigate financial and career decisions.</p>
          </div>
          <div className="mx-auto mt-6 max-w-sm md:mt-8">
            <form className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
              <Input id="email" type="email" placeholder="Enter your email" />
              <Button title="Get started" variant="primary" size="sm" className="items-center justify-center px-6 py-3">Get started</Button>
            </form>
            <p className="text-xs">By clicking Get started you&apos;re confirming that you agree with our Terms and Conditions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
