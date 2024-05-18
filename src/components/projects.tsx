"use client";
import "animate.css";
import { useActiveStore } from "@/store/activeStore";
import { X } from "lucide-react";
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
    tools: [
      "https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg",
      "https://www.svgrepo.com/show/374118/tailwind.svg",
      "https://www.svgrepo.com/show/353729/fastify-icon.svg",
    ],
    content: (
      <div className="">
        <Image
          fill={true}
          className="h-full object-contain w-full"
          src="https://i.ibb.co/PGH3kt2/Screenshot-2023-12-13-at-21-08-57-QClose-Inventory.png"
          alt=""
        />
      </div>
    ),
  },
  {
    title: "Panpie",
    description:
      "Multi-page website for pastry shop. lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
    img: "https://i.ibb.co/m8tVb5y/Screenshot-2023-12-13-at-21-52-58-Pan-Buddies-Home.png",
    github: "https://github.com/kryptcode/pizza-boys",
    live: "https://pizza-boys.vercel.app",
    content: (
      <div className="">
        <Image
          fill={true}
          className="h-full object-contain w-full"
          src="https://i.ibb.co/m8tVb5y/Screenshot-2023-12-13-at-21-52-58-Pan-Buddies-Home.png"
          alt=""
        />
      </div>
    ),
  },
  {
    title: "Kemi Portfolio",
    description: "Portfolio of a product manager and content writer.",
    img: "https://i.ibb.co/LhjjcJX/Screenshot-2023-12-29-at-09-22-11-Adekemi.png",
    github: "",
    live: "https://kemi-zeta.vercel.app",
    content: (
      <div className="">
        <Image
          fill={true}
          className="h-full object-contain w-full"
          src="https://i.ibb.co/LhjjcJX/Screenshot-2023-12-29-at-09-22-11-Adekemi.png"
          alt=""
        />
      </div>
    ),
  },
  {
    title: "MediVault EMR",
    description: "EMR",
    img: "",
    github: "",
    live: "",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] font-grotesk flex items-center justify-center text-white">
        MediVaultEMR
      </div>
    ),
  },
];
export function Projects() {
  const [active, updateActive] = useActiveStore((state) => [
    state.activeComponent,
    state.updateActiveComponent,
  ]);
  
  return (
    <div
      className={`${
        active === "projects" ? "block" : "hidden"
      } animate__animated animate__slideInUp h-full absolute bg-black text-white z-10 p-5 lg:p-16 top-0 left-0 right-0 bottom-0 `}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-grotesk font-semibold text-4xl lg:text-5xl uppercase mb-7">
          Selected Projects
        </h2>
        <X
          size={46}
          className="cursor-pointer"
          onClick={() => updateActive("home")}
        />
      </div>

      <div className="px-2 lg:px-4">
        <StickyScroll content={content} />
      </div>

    </div>
  );
}

// <div className="p-10">
// </div>
