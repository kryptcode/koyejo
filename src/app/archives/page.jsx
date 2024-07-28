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
import { slugs, projects, content, archives } from '@/contants/projects'
import { PageDock } from "@/components/page-dock";
import { ArchiveOverview } from "@/components/archive-overview";
import { SideProjects } from "@/components/side-projects";
import { Projects } from "@/components/projects";
import { SideProject } from "@/components/side-project";
import { Project } from "@/components/project";
import { ArchTable } from "@/components/arch-table";
import { Framer } from "@/components/framer";

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

  function forArchive(str) {
    return !isNaN(parseFloat(str)) && parseFloat(str) > 59;
  }

  return (
          <div className="lg:flex-[3] xl:flex-[3] lg:h-[100vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-black py-5 px-1.5 ">
            {
              folder === "/" ? (
                <h2 className="text-4xl font-bold mb-4 p-3 pt-6 dark:text-goldexperience">Overview</h2>
              ) : folder == "/side-projects" ? (
                <h2 className="text-4xl font-bold mb-4 p-3 pt-6 dark:text-goldexperience">Side Projects</h2>
              ) : folder == "/projects" ? (
                <h2 className="text-4xl font-bold mb-4 p-3 pt-6 dark:text-goldexperience">Projects</h2>
              ) : folder == "/framer-projects" ? (
                <h2 className="text-4xl font-bold mb-4 p-3 pt-6 dark:text-goldexperience">Archive</h2>
              ) : (
                <h2></h2>
              )
            }
            {folder === "/" ? (
              // Main archive view
              <ArchiveOverview />
            ) : folder == "/side-projects" ? (
              <SideProjects />
            ) : folder == "/projects" ? (
              <Projects />
            ) : containsNumber(folder) ? (
              <SideProject />
            ) : forProjects(folder) ? (
              <Project />
            ) : folder === "/my-stack" ? (
              <ArchTable />
            ) : folder === "/framer-projects" ?  (
              <Framer />
            ) : forArchive(folder) ? (
              <div className="p-4 ">
                <div className=" flex mb-4 lg:mb-8 space-x-1.5 items-end">
                  <span
                    className="cursor-pointer hover:opacity-80 underline"
                    onClick={() => setFolder("/")}
                  >
                    Lab
                  </span>{" "}
                  <span
                    className="cursor-pointer underline hover:opacity-80"
                    onClick={() => setFolder("/framer-projects")}
                  >
                    / Archive 
                  </span>{" "}
                  <span className="text-black/80">
                    / {archives[folder - 60].title}{" "}
                  </span>
                </div>

                <div className="pt-3">
                  <div className="">
                    <div className="mb-4">
                      <img
                        className="rounded-lg max-w-[600px] w-full"
                        src={archives[folder - 60].img}
                        alt=""
                      />
                    </div>
                    <h2
                      h2
                      className="text-black text-3xl lg:text-5xl font-semibold"
                    >
                      {archives[folder - 60].title}
                    </h2>
                  </div>

                  <div>
                    <div className="flex justify-start flex-wrap gap-3 mb-4 mt-2">
                      {archives[folder - 60].techs.map((tech, index) => (
                        <div
                          key={index}
                          className=" border border-[#000] font-medium p-1.5 px-5  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   text-[#000] transition-all ease-linear duration-500"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>

                    <div className="mb-5">
                      <p className="text-lg lg:text-xl sm:w-1/2 lg:w-2/3 text-black/80 ">
                        {archives[folder - 60].description}
                      </p>
                    </div>
                    <div className="w-52 ">
                      <Link
                        href={archives[folder - 60].link}
                        target="_blank"
                        className="hover:bg-[#000] hover:text-white flex space-x-3 items-center border border-[#000] font-medium p-1.5 px-5  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   text-[#000] transition-all ease-linear duration-500"
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
                              : "hover:bg-[#000] hover:text-white"
                          }  flex space-x-3 items-center border border-[#000] font-medium p-1.5 px-5  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   000-[#d1bfa7] transition-all ease-linear duration-500`}
                          onClick={() => folder > 0 && setFolder(folder - 1)}
                        >
                          <ArrowLeft size={18} />
                          <span>Previous Project</span>
                        </button>

                        <button
                          className={`${
                            folder == projects.length - 1
                              ? "cursor-not-allowed opacity-70"
                              : "hover:bg-[#000] hover:text-white"
                          }  flex space-x-3 items-center border border-[#000] font-medium p-1.5 px-5  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   000-[#d1bfa7] transition-all ease-linear duration-500`}
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
            ) : (
              <div className="text-center text-black/80">
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
  );
};

export default Page;
