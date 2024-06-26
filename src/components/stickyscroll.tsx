"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Github, Link as LucideLink } from "lucide-react";
import Image from "next/image";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    live?: any;
    github?: any;
    tools?: Array<string>;
    img?: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#000",
    // "#d1bfa7",
    "#111",
    // "var(--black)",
    // "var(--neutral-900)",
  ];
  const linearGradients = ["", "", ""];
  return (
    <motion.div
      // animate={{
      //   backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      // }}
      className="h-[30rem] overflow-y-auto scrollbar-thin scrollbar-thumb-white/40 scrollbar-thumb-rounded scrollbar-track-black scrollbar-hide  flex justify-center relative space-x-10 rounded-md p-5"
      ref={ref}
    >
      <div className="div relative flex items-start justify-between px-4">
        <div className="flex-1">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-32 first-of-type:my-24">
              {item.img && (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="mb-5 mt-4 pr-6 md:hidden"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-contain rounded-lg"
                  />
                </motion.div>
              )}
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl lg:text-4xl font-semibold font-grotesk text-[#d1bfa7]"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg lg:text-2xl  text-neutral-500 max-w-sm mt-6"
              >
                {item.description}
              </motion.p>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg flex space-x-5 text-slate-300 max-w-sm mt-5 font-grotesk"
              >
                {item.github && (
                  <Link
                    href={"/"}
                    className=" px-5 transition-all ease-linear duration-500 hover:bg-[#d1bfa7] border border-[#d1bfa7]  p-1.5   border-l-[3px] border-b-[3px] rounded-md flex items-center justify-center w-16 hover:text-black text-[#d1bfa7]"
                  >
                    <Github />
                  </Link>
                )}

                {item.live && (
                  <Link
                    href={"/"}
                    className=" px-5 transition-all ease-linear duration-500 hover:bg-[#d1bfa7] border border-[#d1bfa7]  p-1.5   border-l-[3px] border-b-[3px] rounded-md flex items-center justify-center w-16 hover:text-black text-[#d1bfa7]"
                  >
                    <LucideLink />
                  </Link>
                )}
              </motion.div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className={cn(
          "hidden lg:block h-60 w-[30rem] rounded-md sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};
