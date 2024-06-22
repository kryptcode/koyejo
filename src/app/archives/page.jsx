"use client";
import Navbar from "@/components/v2/navbar";
import { FolderIcon, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const projects = [
  {
    id: 0,
    title: "Noteit",
    slug: "noteit",
    description: "Note app with AI Chatbot integration",
    img: "",
    link: "https://github.com/kryptcode/noteit",
    techs: ["Next.js", "Prisma", "Pinecone", "GPT"],
  },
  {
    id: 1,
    title: "Disney+ ish",
    slug: "disneyish",
    description:
      "A clone of Disney's streaming platform's website. Shows and Movies are sourced from TMDb API. ",
    img: "https://i.ibb.co/XYCzcbn/Screenshot-2022-05-19-at-14-56-40-Disney.png",
    link: "http://disney-plus-psi.vercel.app/",
    techs: ["Next.js", "TailwindCSS", "TMDb API"],
  },
  {
    id: 2,
    title: "Audiophile",
    slug: "audiophile",
    description:
      "An online shopping application where you can shop for audio devices. It also provides features such as cart management multi-page routing etc.",
    img: "https://i.ibb.co/cXbLmBw/Screenshot-2023-12-13-at-21-07-57-Audiophile.png",
    link: "https://audio-phile-eight.vercel.app/",
    techs: ["Next.js", "TailwindCSS", "Context API"],
  },
  {
    id: 3,
    title: "My Team",
    slug: "myteam",
    description:
      "A responsive multipage website. Solution to Challenge by Frontend Mentor. ",
    img: "https://i.ibb.co/Bqjc2dw/Screenshot-2022-07-30-at-13-29-42-myteam-Home.png",
    link: "https://myteam-pi.vercel.app/",
    techs: ["Next.js", "TailwindCSS"],
  },
  {
    id: 4,
    title: "Pan P",
    slug: "panp",
    description: "Multi-page website for pastry shop.",
    img: "https://i.ibb.co/m8tVb5y/Screenshot-2023-12-13-at-21-52-58-Pan-Buddies-Home.png",
    link: "https://pizza-boys.vercel.app/",
    techs: ["React", "TailwindCSS", "Vite"],
  },
  {
    id: 5,
    title: "Steam Deck-ish",
    slug: "deckish",
    description: "Multi-page clone of the Steam Deck website.",
    img: "https://i.ibb.co/7VMnMGN/Screenshot-2023-12-13-at-21-15-28-Vite-React.png",
    link: "https://steam-deck.vercel.app/",
    techs: ["React", "TailwindCSS", "Vite"],
  },
  {
    id: 6,
    title: "RE Realtors",
    slug: "realtors",
    description: "Real Estate.",
    img: "https://i.ibb.co/LpPdrW1/Screenshot-2022-06-12-at-09-58-35-Real-Estate.png",
    link: "https://re-realtors.vercel.app/",
    techs: ["Next.js", "Chakra UI", "framer-motion"],
  },
  {
    id: 7,
    title: "Twitter ish",
    slug: "twittish",
    description:
      "Clone of social media app twitter with like, tweeting and commenting features added.",
    img: "https://i.ibb.co/stzt3pN/Screenshot-2022-06-13-at-21-29-31-Kami-Shiloh-on-Twitter-Who-am-I.png",
    link: "https://twitter-clone-z.vercel.app/",
    techs: ["Next.js", "TailwindCSS", "Firebase", "Recoil", "Next-Auth"],
  },
  {
    id: 8,
    title: "OpenSea Sembuild",
    slug: "opensea",
    description: "Built on Rinkeby testnet. Website built for buying NFTs.",
    img: "https://i.ibb.co/stzt3pN/Screenshot-2022-06-13-at-21-29-31-Kami-Shiloh-on-Twitter-Who-am-I.png",
    link: "http://nmkt.vercel.app/",
    techs: ["Next.js", "TailwindCSS", "ThirdWeb"],
  },
  {
    id: 9,
    title: "Printico",
    slug: "printico",
    description: "Website for a small scale printing business.",
    img: "https://i.ibb.co/s6rKd0n/Screenshot-2022-07-30-at-11-32-04-Printico-Shop.png",
    link: "https://printico.vercel.app/",
    techs: ["Next.js", "TailwindCSS"],
  },
  {
    id: 10,
    title: "AirBnB ish",
    slug: "airbnb",
    description: "AirBnB clone",
    img: "https://i.ibb.co/Kq7DfT2/Screenshot-2022-05-19-at-15-11-03-Airbnb-Clone.png",
    link: "https://airbnb-clone-zeta-nine.vercel.app/",
    techs: ["Next.js", "React-Map-GL", "GeoLib"],
  },
];

const Page = () => {
  const [folder, setFolder] = useState("/");

  function containsNumber(str) {
    return !isNaN(parseFloat(str)) && isFinite(str);
  }

  return (
    <div className="relative bg-black flex flex-col bg-grid-small-[#d1bfa7]/30 font-grotesk min-h-[100vh] w-full">
      <Navbar />

      <div className="border-b border-[#d1bfa7]/50 h-[10vh] flex justify-center items-center ">
        <div className="text-3xl font-bold text-[#d1bfa7] w-[90%] mx-auto  ">
          <Link href="/">KA.</Link>
        </div>
      </div>

      <div className=" flex-grow">
        <div className=" flex items-start mx-auto h-full">
          <div className="flex-1 bg-black border-r border-[#d1bfa7]/50 p-4 min-h-[90vh] hidden lg:block">
            <h5 className="text-3xl font-semibold text-[#d1bfa7]">Archive</h5>
            <div className="pt-7">
              <div>
                <div
                  className="flex group text-[#d1bfa7] cursor-pointer justify-between w-full"
                  onClick={() => setFolder("/")}
                >
                  <span className="group-hover:underline">Archive</span>
                  <span>/</span>
                </div>
              </div>
              <div className="pl-3">
                <div className="my-3" onClick={() => setFolder("/projects")}>
                  <div
                    className={`${
                      folder === "/projects" ? "text-white" : "text-neutral-300"
                    } flex group cursor-pointer justify-between w-full`}
                  >
                    <span className="group-hover:underline">Projects</span>
                    <span>/projects</span>
                  </div>
                </div>
                <div
                  className="my-3 "
                  onClick={() => setFolder("/side-projects")}
                >
                  <div
                    className={`${
                      folder === "/side-projects"
                        ? "text-white"
                        : "text-neutral-300"
                    } flex group  cursor-pointer justify-between w-full`}
                  >
                    <span className="group-hover:underline">Side Projects</span>
                    <span>/side-projects</span>
                  </div>
                </div>
                {/* <div className="my-3" onClick={() => setFolder("/portfolio")}>
                  <div
                    className={`flex group text-neutral-300 cursor-pointer justify-between w-full`}
                  >
                    <span className="group-hover:underline">Portfolio</span>
                    <span>/portfolio</span>
                  </div>
                </div> */}
                <div
                  className="my-3"
                  onClick={() => setFolder("/framer-projects")}
                >
                  <div
                    className={`${
                      folder === "/framer-projects"
                        ? "text-white"
                        : "text-neutral-300"
                    } flex group cursor-pointer justify-between w-full`}
                  >
                    <span className="group-hover:underline">
                      Framer Projects
                    </span>
                    <span>/framer-projects</span>
                  </div>
                </div>
                {/* <div className="my-3" onClick={() => setFolder("/frontend-mentor")}>
                  <div
                    className={`flex group text-neutral-300 cursor-pointer justify-between w-full`}
                  >
                    <span className="group-hover:underline">
                      Frontend Mentor
                    </span>
                    <span>/frontend-mentor</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div className="lg:flex-[3] xl:flex-[3.8] lg:h-[90vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-black ">
            {folder === "/" ? (
              <div className="grid grid-cols-3 lg:grid-cols-5 p-3 ">
                <div
                  className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-start"
                  onClick={() => setFolder("/projects")}
                >
                  <img src="icons8-folder.png" alt="" className="w-24 h-24" />
                  <span className="text-neutral-400 pl-2">Projects</span>
                </div>
                <div
                  className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-start"
                  onClick={() => setFolder("/side-projects")}
                >
                  <img src="icons8-folder.png" alt="" className="w-24 h-24" />
                  <span className="text-neutral-400 pl-2">Side Projects</span>
                </div>
                <div
                  className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-start"
                  onClick={() => setFolder("/side-projects")}
                >
                  <img src="icons8-folder.png" alt="" className="w-24 h-24" />
                  <span className="text-neutral-400 pl-2">Framer Projects</span>
                </div>
              </div>
            ) : folder == "/side-projects" ? (
              <div className="grid grid-cols-3 lg:grid-cols-4 p-3 ">
                <div
                  className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-start"
                  onClick={() => setFolder("/")}
                >
                  <img src="icons8-folder.png" alt="" className="w-24 h-24" />
                  <span className="text-neutral-400 pl-2">..</span>
                </div>
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-start"
                    onClick={() => setFolder(project.id)}
                  >
                    <img src="icons8-folder.png" alt="" className="w-24 h-24" />
                    <span className="text-neutral-400 pl-2">
                      {project.title}
                    </span>
                  </div>
                ))}
              </div>
            ) : containsNumber(folder) ? (
              <div className="p-4 ">
                <div className=" flex mb-4 lg:mb-8 space-x-1.5 items-end">
                  <span className="cursor-pointer hover:opacity-80 underline" onClick={() => setFolder("/")}>Archive</span>  <span className="cursor-pointer underline hover:opacity-80" onClick={() => setFolder("/side-projects")}>/ Side Projects</span>  <span className="text-neutral-500">/ {projects[folder].title} </span>
                </div>

                <div className="pt-3">
                  <div className="mb-6">
                    <div className="mb-4">
                      <img className="rounded-lg" src={projects[folder].img} alt="" />
                    </div>
                    <h2 h2 className="text-[#d1bfa7] text-3xl mb-4 lg:text-5xl font-medium">{projects[folder].title}</h2>
                  </div>

                  <div>
                    <div className="flex space-x-5 mb-4">
                      {
                        projects[folder].techs.map((tech, index) => (
                          <div key={index} className=" border border-[#d1bfa7] font-medium p-1.5 px-5  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   text-[#d1bfa7] transition-all ease-linear duration-500">{tech}</div>
                        ))
                      }
                    </div>

                    <div className="mb-5">
                      <h6 className="text-xl font-medium mb-1 text-neutral-300">Description:</h6>
                      <p className="text-lg lg:w-1/2 text-neutral-400 ">
                        {projects[folder].description}
                      </p>
                    </div>
                    <div className="w-52 ">
                      <Link href={projects[folder].link} target="_blank" className="hover:bg-[#d1bfa7] hover:text-black flex space-x-3 items-center border border-[#d1bfa7] font-medium p-1.5 px-5  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   text-[#d1bfa7] transition-all ease-linear duration-500">
                        <SquareArrowOutUpRight size={18} /> <span>Go To Project</span>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            ) : (
              "Dir Not Found"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
