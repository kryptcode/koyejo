"use client";
import { useArchiveStore } from "@/store/activeStore";
import {
  ArrowLeft,
  ArrowRight,
  CornerUpLeft,
  FolderIcon,
  SquareArrowOutUpRight,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "mongodb",
  "php",
  "laravel",
  "tailwindcss",
  "python",
  "adobeillustrator",
  "thirdweb",
  "reactquery",
  "reacthookform",
  "recoil",
  "chartdotjs",
  "vite",
  "firebase",
  // "appwrite",
  "vercel",
  "jest",
  "git",
  "github",
  // "visualstudiocode",
  "figma",
  // "wordpress",
  // "clerk",
  //   "jira",
  //   "cypress",
  //   "docker",
  // "flask",
  //   "amazonaws",
  //   "postgresql",
  //   "nginx",
  // "testinglibrary",
  //   "gitlab",
  //   "androidstudio",
  //   "sonarqube",
];

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
  {
    id: 11,
    title: "Kemi Portfolio",
    description: "Portfolio of a product manager and content writer.",
    img: "https://i.ibb.co/LhjjcJX/Screenshot-2023-12-29-at-09-22-11-Adekemi.png",
    link: "https://kemi-zeta.vercel.app",
    techs: ["Next.js", "TailwindCSS"],
  },
  {
    id: 13,
    title: "Hulu ish",
    description: "Hulu home page built with nextjs and tmdb api.",
    img: "https://i.ibb.co/8Yd3TM9/Screenshot-2023-12-13-at-21-13-53-Hulu-Clone.png",
    link: "http://hulu-clone-rose-nine.vercel.app/",
    techs: ["Next.js", "TMDb", "TailwindCSS"],
  },
  {
    id: 14,
    title: "Gymate",
    description: "Multipage website for a gym.",
    img: "https://i.ibb.co/F76m2wq/Screenshot-2024-06-24-at-09-06-08-Gymate.png",
    link: "https://gymate-inky.vercel.app/",
    techs: ["React", "Vite", "TailwindCSS", "Recoil"],
  },
  {
    id: 15,
    title: "CarHub",
    description: "Car rentals website.",
    img: "https://i.ibb.co/3B63rym/Screenshot-2024-06-24-at-09-01-10-Car-Hub.png",
    link: "https://carhub-sage.vercel.app/",
    techs: ["Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    id: 16,
    title: "c-rentals",
    description: "Car rentals website.",
    img: "https://i.ibb.co/YhRRbD1/Screenshot-2024-06-24-at-09-02-48-CRentals.png",
    link: "https://c-rentals.vercel.app/",
    techs: ["React", "Vite", "recoil", "aos"],
  },
];

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
    description: "Stack your links in one place. With page customization and bio.",
    live: "https://linkstack-ten-sigma.vercel.app",
    // github: "https://github.com/kryptcode/linkstack",
    img: "https://i.ibb.co/hBJC2dN/Screenshot-2024-06-21-at-10-39-47-Link-Stack.png",
    tools: ["Next.js", "TailwindCSS", "Express", "MongoDB", "Zustand"],
    techs: ["Next.js", "TailwindCSS", "Firebase", "Context API"],
  },
  {
    id: 33,
    title: "QClose Safety",
    description:
      "A safety application with incidents reporting, announcements, training and other features.",
    img: "https://i.ibb.co/BnwNvyN/Screenshot-2024-01-22-at-15-30-42-Dashboard-QClose-Safety.png",
    github: "",
    live: "https://qclosesafety.com/",
  },
  {
    id: 34,
    title: "MediVault EMR",
    description:
      " EMR for storing and managing patient data, ensuring robust, interoperable, and secure handling of healthcare information. ",
    img: "https://i.ibb.co/cDxz485/Screenshot-2024-07-05-at-20-39-17-Medi-Vault.png",
    github: "",
    live: "",
  },
  {
    id: 35,
    title: "Ọ̀rẹ́ Ọkàn",
    description:
    "A chatbot designed to address mental health issues and provide support in Yoruba.",
    img: "https://i.ibb.co/K5kYdqx/Screenshot-2024-06-15-at-20-44-04-Mental-Wellness-Bot.png",
    github: "https://github.com/kryptcode/mchl-yor-chatbot",
    techs: ["Next.js", "Flask", "Python", "Jupyter Notebook", "Clerk"],
  },
  {
    id: 36,
    title: "M.A.A.D. City Inks",
    techs: ["Next.js", "TailwindCSS", "aos"],
    description:
      "Multi-page website for a tattoo and piercing studio.",
    img: "https://i.ibb.co/FzS0nzY/Screenshot-2024-06-29-at-10-17-17-Maad-City-Tattoos.png",
    github: "",
    live: "https://maad-city.vercel.app",
  },
];

const Page = () => {
  // const [folder, setFolder] = useState("/");

  const [folder, setFolder] = useArchiveStore((state) => [
    state.value,
    state.setValue,
  ]);

  function containsNumber(str) {
    return !isNaN(parseFloat(str)) && parseFloat(str) < 30;
  }

  function forProjects(str) {
    return !isNaN(parseFloat(str)) && parseFloat(str) > 30 < 50;
  }

  return (
    <div className="relative bg-black flex flex-col bg-grid-small-[#d1bfa7]/30 font-grotesk min-h-[100vh] w-full">

      {/* <div className="border-b border-[#d1bfa7]/50 h-[10vh] flex justify-center items-center ">
        <div className="text-3xl font-bold text-[#d1bfa7] w-[90%] mx-auto  ">
          <Link href="/">KA.</Link>
        </div>
      </div> */}

      <div className=" flex-grow">
        <div className=" flex items-start mx-auto h-full">
          <div className="flex-1  py-10 h-[100vh] hidden pl-2 lg:block">
          <div className="bg-black border border-[#d1bfa7]/80 h-full p-4 rounded-2xl ">
            <h5 className="text-3xl font-semibold text-[#d1bfa7]">
              Koye&apos;s Archive
            </h5>
            <div className="pt-16">
              <div className="mb-5">
                <Link
                  href={"/"}
                  className="group text-neutral-400 flex items-center space-x-1 cursor-pointer w-full"
                  onClick={() => setFolder("/")}
                >
                  <CornerUpLeft size={20} />
                  <span className="group-hover:underline pl-2">
                    Back to Homepage
                  </span>
                </Link>
              </div>
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
                <div className="my-3" onClick={() => setFolder("/my-stack")}>
                  <div
                    className={`${
                      folder === "/my-stack" ? "text-white" : "text-neutral-300"
                    } flex group cursor-pointer justify-between w-full`}
                  >
                    <span className="group-hover:underline">Stack</span>
                    <span>/stack</span>
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
          </div>

          <div className="lg:flex-[3] xl:flex-[3] lg:h-[100vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-black p-5 ">
            {folder === "/" ? (
              // Main archive view
              <div className="grid grid-cols-3 lg:grid-cols-5 p-3 ">
                <Link
                  href={"/"}
                  className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-start"
                  onClick={() => setFolder("/")}
                >
                  <img src="icons8-folder.png" alt="" className="w-24 h-24" />
                  <span className="text-neutral-400 pl-8">
                    <CornerUpLeft size={16} />
                  </span>
                </Link>
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
                  onClick={() => setFolder("/framer-projects")}
                >
                  <img src="icons8-folder.png" alt="" className="w-24 h-24" />
                  <span className="text-neutral-400 pl-2">Framer Projects</span>
                </div>
                <div
                  className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-start"
                  onClick={() => setFolder("/my-stack")}
                >
                  <img src="icons8-folder.png" alt="" className="w-24 h-24" />
                  <span className="text-neutral-400 pl-2">Stack</span>
                </div>
              </div>
            ) : folder == "/side-projects" ? (
              // View when you click on  side-project folder
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
            ) : folder == "/projects" ? (
              // View when you click on projects folder
              <div className="grid grid-cols-3 lg:grid-cols-4 p-3 ">
                <div
                  className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-start"
                  onClick={() => setFolder("/")}
                >
                  <img src="icons8-folder.png" alt="" className="w-24 h-24" />
                  <span className="text-neutral-400 pl-2">..</span>
                </div>
                {content.map((project, index) => (
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
              // View when you click on any of the side-projects
              <div className="p-4 ">
                <div className=" flex mb-4 lg:mb-8 space-x-1.5 items-end">
                  <span
                    className="cursor-pointer hover:opacity-80 underline"
                    onClick={() => setFolder("/")}
                  >
                    Archive
                  </span>{" "}
                  <span
                    className="cursor-pointer underline hover:opacity-80"
                    onClick={() => setFolder("/side-projects")}
                  >
                    / Side Projects
                  </span>{" "}
                  <span className="text-neutral-500">
                    / {projects[folder].title}{" "}
                  </span>
                </div>

                <div className="pt-3">
                  <div className="mb-6">
                    <div className="mb-4">
                      <img
                        className="rounded-lg max-w-[600px] w-full"
                        src={projects[folder].img}
                        alt=""
                      />
                    </div>
                    <h2
                      h2
                      className="text-[#d1bfa7] text-3xl mb-4 lg:text-5xl font-medium"
                    >
                      {projects[folder].title}
                    </h2>
                  </div>

                  <div>
                    <div className="flex justify-start flex-wrap gap-3 mb-4">
                      {projects[folder].techs.map((tech, index) => (
                        <div
                          key={index}
                          className=" border border-[#d1bfa7] font-medium p-1.5 px-5  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   text-[#d1bfa7] transition-all ease-linear duration-500"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>

                    <div className="mb-5">
                      <h6 className="text-xl font-medium mb-1 text-neutral-300">
                        Description:
                      </h6>
                      <p className="text-lg lg:w-1/2 text-neutral-400 ">
                        {projects[folder].description}
                      </p>
                    </div>
                    <div className="w-52 ">
                      <Link
                        href={projects[folder].link}
                        target="_blank"
                        className="hover:bg-[#d1bfa7] hover:text-black flex space-x-3 items-center border border-[#d1bfa7] font-medium p-1.5 px-5  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   text-[#d1bfa7] transition-all ease-linear duration-500"
                      >
                        <SquareArrowOutUpRight size={18} />{" "}
                        <span>View Site</span>
                      </Link>
                    </div>
                    <div className="flex justify-end">
                      <div className="mt-5 py-5 pb-10 flex justify-between gap-5 flex-wrap lg:w-[45%] ">
                        <button
                          className={`${
                            folder == 0
                              ? "cursor-not-allowed opacity-70"
                              : "hover:bg-[#d1bfa7] hover:text-black"
                          }  flex space-x-3 items-center border border-[#d1bfa7] font-medium p-1.5 px-5  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   text-[#d1bfa7] transition-all ease-linear duration-500`}
                          onClick={() => folder > 0 && setFolder(folder - 1)}
                        >
                          <ArrowLeft size={18} />
                          <span>Previous Project</span>
                        </button>

                        <button
                          className={`${
                            folder == projects.length - 1
                              ? "cursor-not-allowed opacity-70"
                              : "hover:bg-[#d1bfa7] hover:text-black"
                          }  flex space-x-3 items-center border border-[#d1bfa7] font-medium p-1.5 px-5  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   text-[#d1bfa7] transition-all ease-linear duration-500`}
                          onClick={() =>
                            folder < projects.length - 1 &&
                            setFolder(folder + 1)
                          }
                        >
                          <ArrowRight size={18} />
                          <span>Next Project</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : forProjects(folder) ? (
              // View when you click on any of the projects
              <div className="p-4 ">
                <div className=" flex mb-4 lg:mb-8 space-x-1.5 items-end">
                  <span
                    className="cursor-pointer hover:opacity-80 underline"
                    onClick={() => setFolder("/")}
                  >
                    Archive
                  </span>{" "}
                  <span
                    className="cursor-pointer underline hover:opacity-80"
                    onClick={() => setFolder("/projects")}
                  >
                    / Projects
                  </span>{" "}
                  <span className="text-neutral-500">
                    / {content[folder - 31].title}{" "}
                  </span>
                </div>

                <div className="pt-3">
                  <div className="mb-6">
                    <div className="mb-4">
                      <img
                        className="rounded-lg max-w-[600px] w-full object-contain "
                        src={content[folder - 31].img}
                        alt=""
                      />
                    </div>
                    <h2
                      h2
                      className="text-[#d1bfa7] text-3xl mb-4 lg:text-5xl font-medium"
                    >
                      {content[folder - 31].title}
                    </h2>
                  </div>

                  <div>
                    <div className="flex justify-start flex-wrap gap-3 mb-4">
                      {content[folder - 31].techs?.map((tech, index) => (
                        <div
                          key={index}
                          className=" border border-[#d1bfa7] font-medium p-1.5 px-5  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   text-[#d1bfa7] transition-all ease-linear duration-500"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>

                    <div className="mb-5">
                      <h6 className="text-xl font-medium mb-1 text-neutral-300">
                        Description:
                      </h6>
                      <p className="text-lg lg:w-1/2 text-neutral-400 ">
                        {content[folder - 31].description}
                      </p>
                    </div>
                    <div className="w-52 ">
                      <Link
                        href={
                          content[folder - 31].github ||
                          content[folder - 31].live ||
                          ""
                        }
                        target="_blank"
                        className="hover:bg-[#d1bfa7] hover:text-black flex space-x-3 items-center border border-[#d1bfa7] font-medium p-1.5 px-5  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   text-[#d1bfa7] transition-all ease-linear duration-500"
                      >
                        <SquareArrowOutUpRight size={18} />{" "}
                        <span>
                          {content[folder - 31].github
                            ? "View Repo"
                            : content[folder - 31].live
                            ? "View Site"
                            : "View Site"}
                        </span>
                      </Link>
                    </div>
                    <div className="flex justify-end">
                      <div className="mt-5 py-5 pb-10 flex justify-between gap-5 flex-wrap lg:w-[45%] ">
                        <button
                          className={`${
                            folder == 31
                              ? "cursor-not-allowed opacity-70"
                              : "hover:bg-[#d1bfa7] hover:text-black"
                          }  flex space-x-3 items-center border border-[#d1bfa7] font-medium p-1.5 px-5  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   text-[#d1bfa7] transition-all ease-linear duration-500`}
                          onClick={() => folder > 31 && setFolder(folder - 1)}
                        >
                          <ArrowLeft size={18} />
                          <span>Previous Project</span>
                        </button>

                        <button
                          className={`${
                            folder == content.length + 30
                              ? "cursor-not-allowed opacity-70"
                              : "hover:bg-[#d1bfa7] hover:text-black"
                          }  flex space-x-3 items-center border border-[#d1bfa7] font-medium p-1.5 px-5  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   text-[#d1bfa7] transition-all ease-linear duration-500`}
                          onClick={() =>
                            folder < content.length + 30 &&
                            setFolder(folder + 1)
                          }
                        >
                          <ArrowRight size={18} />
                          <span>Next Project</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : folder === "/my-stack" ? (
              <div>
                <h6 className="underline cursor-pointer text-lg text-neutral-500 mb-4" onClick={() => setFolder('/')}>
                  ../archive
                </h6>
                <h5 className="text-2xl font-medium text-[#d1bfa7]">
                  My Tech Stack
                </h5>
                <div>
                  <div className="w-full">
                    <div className="relative flex h-full mx-auto max-w-[45rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-4 ">
                      <IconCloud iconSlugs={slugs} />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
                  <div>
                    <h4 className="text-2xl mb-3 font-semibold">Languages</h4>
                    <div className=" font-medium grid gap-1.5 text-neutral-500 text-lg">
                      <div>TypeScript</div>
                      <div>JavaScript</div>
                      <div>Python</div>
                      <div>PHP</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl mb-3 font-semibold">Front End</h4>
                    <div className=" font-medium grid gap-1.5 text-neutral-500 text-lg">
                      <div>React & Next</div>
                      <div>TailwindCSS</div>
                      <div>HTML & CSS</div>
                      <div>Vite</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl mb-3 font-semibold">Back End</h4>
                    <div className=" font-medium grid gap-1.5 text-neutral-500 text-lg">
                      <div>Node.js</div>
                      <div>Express.js</div>
                      <div>Laravel</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl mb-3 font-semibold">Databases</h4>
                    <div className=" font-medium grid gap-1.5 text-neutral-500 text-lg">
                      <div>Prisma</div>
                      <div>MongoDB</div>
                      <div>SQL</div>
                      <div>Firebase</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl mb-3 font-semibold">Others</h4>
                    <div className=" font-medium grid gap-1.5 text-neutral-500 text-lg">
                      <div>Framer</div>
                      <div>Git & GitHub</div>
                      <div>Thirdweb</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-neutral-500">
                <div>Dir Not Available</div>
                <div>
                  Go back to{" "}
                  <span onClick={() => setFolder("/")} className="underline">
                    Archive
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
