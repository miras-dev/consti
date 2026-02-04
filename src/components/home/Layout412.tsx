'use client';
import { Button, useMediaQuery } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
    src: string;
    alt?: string;
};

type SubHeadingProps = {
    title: string;
    description: string;
};

type Props = {
    tagline: string;
    heading: string;
    description: string;
    subHeadings: SubHeadingProps[];
    buttons: ButtonProps[];
    image: ImageProps;
};

export type Layout412Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout412 = (props: Layout412Props) => {
    const { tagline, heading, description, buttons, image } = {
        ...Layout412Defaults,
        ...props,
    };

    const sectionRef = useRef<HTMLElement>(null);
    const isMobile = useMediaQuery("(max-width: 767px)");

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "center center"],
    });

    // Image starts centered (translateX: -50%) then slides to right (translateX: 0%)
    const imageX = useTransform(
        scrollYProgress,
        [0, 0.6, 1],
        isMobile ? ["0%", "0%", "0%"] : ["-50%", "-10%", "0%"]
    );

    // Text fades in and slides up as image moves right
    const textOpacity = useTransform(
        scrollYProgress,
        [0.3, 0.7, 1],
        [0, 0.5, 1]
    );
    const textY = useTransform(
        scrollYProgress,
        [0.3, 0.7, 1],
        [60, 20, 0]
    );

    return (
        <section ref={sectionRef} id="relume" className="relative h-screen overflow-hidden bg-black text-white">
            <div className="relative h-full">
                {/* Text content - left side, vertically centered */}
                <motion.div
                    className="relative z-10 flex h-full items-center px-[5%]"
                    style={isMobile ? {} : { opacity: textOpacity, y: textY }}
                >
                    <div className="container">
                        <div className="max-w-md lg:max-w-lg">
                            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
                            <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
                                {heading}
                            </h1>
                            <p className="mb-6 md:mb-8 md:text-lg">{description}</p>
                            <div className="mt-6 flex items-center gap-4 md:mt-8">
                                <a
                                    href="/about-constantin-nixdorff"
                                    className="inline-flex items-center justify-center border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-transparent hover:text-white"
                                >
                                    About me
                                </a>
                                <a
                                    href="/services"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-white underline underline-offset-4 transition-colors hover:text-white/80"
                                >
                                    Explore
                                    <RxChevronRight />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Image - starts centered, slides right, anchored to bottom */}
                <motion.div
                    className="absolute bottom-0 right-0 h-full w-full md:w-[55%]"
                    style={isMobile ? {} : { x: imageX }}
                >
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="absolute bottom-0 right-0 h-full w-full object-contain object-bottom"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export const Layout412Defaults: Props = {
    tagline: "Trusted",
    heading: "Who I am and what I do",
    description:
        "I work with students, professionals, and internationals to build financial stability and advance their careers. My approach combines practical expertise with straightforward communication, cutting through complexity to reveal what matters most for your future.",
    subHeadings: [],
    buttons: [
        { title: "About me", variant: "secondary" },
        {
            title: "Explore",
            variant: "link",
            size: "link",
            iconRight: <RxChevronRight />,
        },
    ],
    image: {
        src: "Main.png",
        alt: "Constantin Nixdorff - Financial and Career Consultant",
    },
};
