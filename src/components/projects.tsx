"use client";
import React from "react";
import { StickyScroll } from "./stickyscroll";
import Image from "next/image";

const content = [
  {
    title: "QClose Inventory",
    description:
      "A feature-rich inventory website which combines cutting-edge inventory management, seamless point of sale integration, and convenient in-app chat functionality.",
    live: "https://qcloseinventory.com",
    img: "https://i.ibb.co/PGH3kt2/Screenshot-2023-12-13-at-21-08-57-QClose-Inventory.png",
    tools: ["https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg", "https://www.svgrepo.com/show/374118/tailwind.svg", "https://www.svgrepo.com/show/353729/fastify-icon.svg"],
    content: (
      <div className="">
        <Image fill={true}  className="h-full object-contain w-full" src="https://i.ibb.co/PGH3kt2/Screenshot-2023-12-13-at-21-08-57-QClose-Inventory.png" alt="" />
      </div>
    ),
  },
  {
    title: "Panpie",
    description:
      "Multi-page website for pastry shop. lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
    github: "https://github.com/kryptcode/pizza-boys",
    live: "https://pizza-boys.vercel.app",
    content: (
      <div className="">
        <Image fill={true}  className="h-full object-contain w-full" src="https://i.ibb.co/m8tVb5y/Screenshot-2023-12-13-at-21-52-58-Pan-Buddies-Home.png" alt="" />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    github: "",
    live: "",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    github: "",
    live: "",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export function Projects() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
