import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Github, LucideLink } from "lucide-react";
import Link from "next/link";

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
    title: "LinkStack",
    description: "Stack your links in one place.",
    live: "https://linkstack-ten-sigma.vercel.app",
    // github: "https://github.com/kryptcode/linkstack",
    img: "https://i.ibb.co/QnpQ3m7/Screenshot-2024-06-08-at-10-22-57-Create-Next-App.png",
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
          src="https://i.ibb.co/QnpQ3m7/Screenshot-2024-06-08-at-10-22-57-Create-Next-App.png"
          alt=""
        />
      </div>
    ),
  },
  {
    title: "MediVault EMR",
    description:
      " EMR for storing and managing patient data, ensuring robust, interoperable, and secure handling of healthcare information. ",
    img: "",
    github: "",
    live: "",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] font-grotesk flex items-center justify-center text-white">
        MediVaultEMR(In Production)
      </div>
    ),
  },
  {
    title: "QClose Safety",
    description:
      "A safety application with incidents reporting, announcements, training and other features.",
    img: "https://i.ibb.co/BnwNvyN/Screenshot-2024-01-22-at-15-30-42-Dashboard-QClose-Safety.png",
    github: "",
    live: "https://qclosesafety.com/",
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
];

export const SimpleProjects = () => {
  return (
    <div className="w-[90%] mx-auto font-grotesk group min-h-screen pb-24 pt-10 ">
      <div className="flex items-center space-x-3  mb-16 ">
        <h3
          className={`text-[#d1bfa7] text-6xl lg:text-9xl font-bold flex-shrink-0`}
        >
          <span className="hidden md:inline">Selected</span> Work.
        </h3>
        {/* <div
          className={`bg-[#d1bfa7] h-[3px] w-0 group-hover:w-full transition-all ease-linear duration-700`}
        /> */}
      </div>

      <div className="">
        {content.map((item, index) => (
          <div className="mb-10">
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="mb-2 cursor-pointer">
                  <span className="text-3xl lg:text-6xl font-medium text-gray-500">{`0${
                    index + 1
                  }.`}</span>
                  <span className="text-3xl lg:text-6xl font-bold text-[#d1bfa7]">{item.title}</span>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-[20rem] bg-black border-white/20 text-white">
                <div>
                  <h6 className="mb-3 font-medium   ">{item.title}</h6>
                  <img src={item.img} alt="" />
                  <div className="py-2">
                    <div className="flex space-x-4 items-center">
                      {item.github && (
                        <Link
                          href={"/"}
                          className="p-1 px-5 transition-all ease-linear duration-500 rounded-md hover:bg-[#d1bfa7] border flex items-center justify-center w-16 border-[#d1bfa7] hover:text-black text-[#d1bfa7]"
                        >
                          <Github />
                        </Link>
                      )}

                      {item.live && (
                        <Link
                        href={"/"}
                        className="p-1 px-5 transition-all ease-linear duration-500 rounded-md hover:bg-[#d1bfa7] border flex items-center justify-center w-16 border-[#d1bfa7] hover:text-black text-[#d1bfa7]"
                      >
                        <LucideLink />
                      </Link>
                      )}

                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <div className="text-gray-400 text-xl lg:text-3xl">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
