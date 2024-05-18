"use client";
import React from "react";
import { StickyScroll } from "./stickyscroll";
import Image from "next/image";

const content = [
  {
    title: "QClose Inventory",
    description:
      "A feature-rich inventory website which combines cutting-edge inventory management, seamless point of sale integration, and convenient in-app chat functionality.",
    github: "https://",
    live: "https:",
    img: "https://i.ibb.co/PGH3kt2/Screenshot-2023-12-13-at-21-08-57-QClose-Inventory.png",
    tools: ["https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg", "https://www.svgrepo.com/show/374118/tailwind.svg", "https://www.svgrepo.com/show/353729/fastify-icon.svg"],
    content: (
      <div className="">
        <Image fill={true}  className="h-full object-contain w-full" src="https://i.ibb.co/PGH3kt2/Screenshot-2023-12-13-at-21-08-57-QClose-Inventory.png" alt="" />
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    github: "",
    live: "",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
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
