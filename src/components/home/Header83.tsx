"use client";

import { Button } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export function Header83() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacityContent = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const opacityOverlay = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [3.2, 1]);

  return (
    <section ref={sectionRef} id="relume" className="relative h-[700vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 z-10 flex h-full items-center justify-center"
          style={{ opacity: opacityContent }}
        >
          <div className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="relative z-10 mx-auto max-w-lg text-center">
              <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
                Build your financial future with clarity and purpose
              </h1>
              <p className="text-text-alternative md:text-md">
                Independent financial and career consulting tailored to your
                goals. Whether you&apos;re starting out, advancing your career,
                or planning for retirement, I provide transparent guidance
                grounded in real expertise.
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button title="Book consultation">Book consultation</Button>
                <Button title="Learn more" variant="secondary-alt">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 z-10 bg-black/50"
            style={{ opacity: opacityOverlay }}
          />
          <motion.div
            style={{ scale }}
            className="grid h-full w-full grid-cols-1 grid-rows-3 gap-4 md:grid-cols-3"
          >
            <div className="relative hidden md:block">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 2"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 3"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 4"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 5"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 6"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 7"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 8"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 9"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
