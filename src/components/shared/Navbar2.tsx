"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronDown } from "react-icons/rx";
import Link from "next/link";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => setIsDropdownOpen((prev) => !prev);
  const openOnDesktopDropdownMenu = () => !isMobile && setIsDropdownOpen(true);
  const closeOnDesktopDropdownMenu = () =>
    !isMobile && setIsDropdownOpen(false);
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar2() {
  const useActive = useRelume();

  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full items-center border-b border-border-primary bg-white lg:min-h-18 lg:px-[5%]">
      <div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <Link href="/">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
              alt="Logo image"
            />
          </Link>
          <div className="flex items-center gap-4 lg:hidden">
            <div>
              <Button className="w-full px-4 py-1" title="Deutsch" size="sm">
                Deutsch
              </Button>
            </div>
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
              onClick={useActive.toggleMobileMenu}
            >
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: 8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={useActive.animateMobileMenu}
                variants={{
                  open: { width: 0, transition: { duration: 0.1 } },
                  closed: {
                    width: "1.5rem",
                    transition: { delay: 0.3, duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: -8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
            </button>
          </div>
        </div>
        <motion.div
          variants={{
            open: { height: "var(--height-open, 100dvh)" },
            close: { height: "var(--height-closed, 0)" },
          }}
          animate={useActive.animateMobileMenu}
          initial="close"
          exit="close"
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] text-center lg:flex lg:items-center lg:justify-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          <Link
            href="/"
            className="block py-3 text-md text-black first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
          >
            Home
          </Link>
          <Link
            href="/about-constantin-nixdorff"
            className="block py-3 text-md text-black lg:px-4 lg:py-2 lg:text-base"
          >
            About
          </Link>
          <Link
            href="/services"
            className="block py-3 text-md text-black lg:px-4 lg:py-2 lg:text-base"
          >
            Services
          </Link>
          <div
            onMouseEnter={useActive.openOnDesktopDropdownMenu}
            onMouseLeave={useActive.closeOnDesktopDropdownMenu}
          >
            <button
              className="flex w-full items-center justify-center gap-4 py-3 text-center text-md text-black lg:w-auto lg:flex-none lg:justify-start lg:gap-2 lg:px-4 lg:py-2 lg:text-base"
              onClick={useActive.openOnMobileDropdownMenu}
            >
              <span>More</span>
              <motion.span
                variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
                animate={useActive.animateDropdownMenuIcon}
                transition={{ duration: 0.3 }}
              >
                <RxChevronDown />
              </motion.span>
            </button>
            <AnimatePresence>
              <motion.nav
                variants={{
                  open: {
                    visibility: "visible" as const,
                    opacity: "var(--opacity-open, 100%)",
                    display: "block",
                    y: 0,
                  },
                  close: {
                    visibility: "hidden" as const,
                    opacity: "var(--opacity-close, 0)",
                    display: "none",
                    y: "var(--y-close, 0%)",
                  },
                }}
                animate={useActive.animateDropdownMenu}
                initial="close"
                exit="close"
                transition={{ duration: 0.2 }}
                className="bg-white lg:absolute lg:z-50 lg:border lg:border-border-primary lg:p-2 lg:[--y-close:25%]"
              >
                <Link
                  href="/services"
                  className="block py-3 text-center text-black lg:px-4 lg:py-2 lg:text-left"
                >
                  Financial
                </Link>
                <Link
                  href="/services"
                  className="block py-3 text-center text-black lg:px-4 lg:py-2 lg:text-left"
                >
                  Career
                </Link>
                <Link
                  href="/contact"
                  className="block py-3 text-center text-black lg:px-4 lg:py-2 lg:text-left"
                >
                  Contact
                </Link>
              </motion.nav>
            </AnimatePresence>
          </div>
        </motion.div>
        <div className="hidden justify-self-end lg:block">
          <Button className="px-6 py-2" title="Deutsch" size="sm">
            Deutsch
          </Button>
        </div>
      </div>
    </nav>
  );
}
