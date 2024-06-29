import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useArchiveStore } from "@/store/activeStore";

const content = [
  {
    id: 31,
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
  },
  {
    id: 32,
    title: "LinkStack",
    description: "Stack your links in one place.",
    live: "https://linkstack-ten-sigma.vercel.app",
    // github: "https://github.com/kryptcode/linkstack",
    img: "https://i.ibb.co/hBJC2dN/Screenshot-2024-06-21-at-10-39-47-Link-Stack.png",
    tools: ["Next.js", "TailwindCSS", "Express", "MongoDB", "Zustand"],
    techs: ["Next.js", "TailwindCSS", "Express", "MongoDB", "Zustand"],
  },
  {
    id: 33,
    title: "QClose Safety",
    techs: ["Next.js"],
    description:
      "A safety application with incidents reporting, announcements, training and other features.",
    img: "https://i.ibb.co/BnwNvyN/Screenshot-2024-01-22-at-15-30-42-Dashboard-QClose-Safety.png",
    github: "",
    live: "https://qclosesafety.com/",
  },
  {
    id: 34,
    title: "M.A.A.D. City Ink",
    techs: ["Next.js", "TailwindCSS", "aos"],
    description:
      "Multi-page website for a tattoo and piercing studio.",
    img: "https://i.ibb.co/FzS0nzY/Screenshot-2024-06-29-at-10-17-17-Maad-City-Tattoos.png",
    github: "",
    live: "https://maad-city.vercel.app",
  },
  {
    id: 35,
    title: "MediVault EMR",
    description:
      " EMR for storing and managing patient data, ensuring robust, interoperable, and secure handling of healthcare information. ",
    img: "",
    github: "",
    live: "",
  },
];

export const SimpleProjects = () => {
  const [folder, setFolder] = useArchiveStore(state => [state.value, state.setValue])

  return (
    <div className="w-[90%] mx-auto font-grotesk min-h-screen pb-24 pt-10 ">
      <div className="flex items-center space-x-3  mb-5 ">
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
          <div className="mb-10 ">
            <div>
              <Link
                onClick={() => setFolder(item.id)}
                href={'/archives'}
                className="mb-3 block cursor-pointer group"
              >
                <span className="text-3xl lg:text-6xl mr-4 font-medium text-gray-500">{`0${
                  index + 1
                }.`}</span>
                <span className="text-3xl lg:text-6xl transition-all ease-in-out duration-500 animate-in font-bold group-hover:text-[#d1bfa7]">
                  {item.title}
                </span>
              </Link>
              <div className="text-gray-400 text-xl lg:w-[80%] lg:text-4xl">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-10 ">
        <Link
          onClick={() => setFolder('/')}
          href="/archives"
          className="border border-[#d1bfa7] font-medium p-1.5 px-5  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   text-[#d1bfa7] transition-all ease-linear duration-500 inline-block hover:text-black hover:bg-[#d1bfa7]"
        >
          View More
        </Link>
      </div>
    </div>
  );
};
