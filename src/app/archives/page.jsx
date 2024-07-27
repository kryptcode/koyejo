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
    <div className="relative max-w-[1440px] bg-white text-black flex flex-col font-grotesk min-h-[100vh] w-full">
      <PageDock />

      <div className=" flex-grow">
        <div className=" flex items-start mx-auto h-full">
          <div className="flex-1  py-10 h-[100vh] hidden pl-2 lg:block">
          <div className="bg-black h-full p-4 rounded-2xl ">
            <h5 className="text-3xl font-semibold text-[#d1bfa7]">
              Koye&apos;s Lab
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
                      Archive
                    </span>
                    <span>/archive</span>
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
              </div>
              

              </div>
            </div>
          </div>

          <div className="lg:flex-[3] xl:flex-[3] lg:h-[100vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-black py-5 px-1.5 ">
            {
              folder === "/" ? (
                <h2 className="text-4xl font-bold mb-4 p-3 pt-6 text-[#000]">Overview</h2>
              ) : folder == "/side-projects" ? (
                <h2 className="text-4xl font-bold mb-4 p-3 pt-6 text-[#000]">Side Projects</h2>
              ) : folder == "/projects" ? (
                <h2 className="text-4xl font-bold mb-4 p-3 pt-6 text-[#000]">Projects</h2>
              ) : folder == "/framer-projects" ? (
                <h2 className="text-4xl font-bold mb-4 p-3 pt-6 text-[#000]">Archive</h2>
              ) : (
                <h2></h2>
              )
            }
            {folder === "/" ? (
              // Main archive view
              <div className="flex flex-wrap gap-3 p-1 lg:p-3 ">
                <Link
                  href={"/"}
                  className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-center w-32"
                  onClick={() => setFolder("/")}
                >
                  <img src="icons8-folder.png" alt="" className="w-24 h-24 grayscale contrast-100" />
                  <span className="text-neutral-400 pl-8">
                    <CornerUpLeft size={16} />
                  </span>
                </Link>
                <div
                  className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-center w-32"
                  onClick={() => setFolder("/projects")}
                >
                  <img src="icons8-folder.png" alt="" className="w-24 h-24 grayscale contrast-100" />
                  <span className="text-black truncate text-sm pl-2">Projects</span>
                </div>
                <div
                  className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-center w-32"
                  onClick={() => setFolder("/side-projects")}
                >
                  <img src="icons8-folder.png" alt="" className="w-24 h-24 grayscale contrast-100" />
                  <span className="text-black truncate text-sm pl-2">Side Projects</span>
                </div>
                <div
                  className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-center w-32"
                  onClick={() => setFolder("/framer-projects")}
                >
                  <img src="icons8-folder.png" alt="" className="w-24 h-24 grayscale contrast-100" />
                  <span className="text-black truncate text-sm pl-2">Archive</span>
                </div>
                <div
                  className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-center w-32"
                  onClick={() => setFolder("/my-stack")}
                >
                  <img src="icons8-folder.png" alt="" className="w-24 h-24 grayscale contrast-100" />
                  <span className="text-black truncate text-sm pl-2">Stack</span>
                </div>
              </div>
            ) : folder == "/side-projects" ? (
              // View when you click on  side-project folder
              <div className="flex flex-wrap gap-3 p-1 lg:p-3 ">
                <div
                  className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-center w-32"
                  onClick={() => setFolder("/")}
                >
                  <img src="icons8-folder.png" alt="" className="w-24 h-24 grayscale contrast-100" />
                  <span className="text-black truncate text-sm pl-2">..</span>
                </div>
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-center w-32"
                    onClick={() => setFolder(project.id)}
                  >
                    <img src="icons8-folder.png" alt="" className="w-24 h-24 grayscale contrast-100" />
                    <span className="text-black truncate text-sm pl-2">
                      {project.title}
                    </span>
                  </div>
                ))}
              </div>
            ) : folder == "/projects" ? (
              // View when you click on projects folder
              <div className="flex flex-wrap gap-3 p-1 lg:p-3 ">
                <div
                  className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-center w-32"
                  onClick={() => setFolder("/")}
                >
                  <img src="icons8-folder.png" alt="" className="w-24 h-24 grayscale contrast-100" />
                  <span className="text-black truncate text-sm pl-2">..</span>
                </div>
                {content.map((project, index) => (
                  <div
                    key={index}
                    className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-center w-32"
                    onClick={() => setFolder(project.id)}
                  >
                    <img src="icons8-folder.png" alt="" className="w-24 h-24 grayscale contrast-100" />
                    <span className="text-black truncate text-sm pl-2">
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
                    Lab
                  </span>{" "}
                  <span
                    className="cursor-pointer underline hover:opacity-80"
                    onClick={() => setFolder("/side-projects")}
                  >
                    / Side Projects
                  </span>{" "}
                  <span className="text-black/80">
                    / {projects[folder].title}{" "}
                  </span>
                </div>

                <div className="pt-3">
                  <div className="">
                    <div className="mb-4">
                      <img
                        className="rounded-lg max-w-[600px] w-full"
                        src={projects[folder].img}
                        alt=""
                      />
                    </div>
                    <h2
                      h2
                      className="text-black text-3xl lg:text-5xl font-semibold"
                    >
                      {projects[folder].title}
                    </h2>
                  </div>

                  <div>
                    <div className="flex justify-start flex-wrap gap-3 mb-4 mt-2">
                      {projects[folder].techs.map((tech, index) => (
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
                        {projects[folder].description}
                      </p>
                    </div>
                    <div className="w-52 ">
                      <Link
                        href={projects[folder].link}
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
            ) : forProjects(folder) ? (
              // View when you click on any of the projects
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
                    onClick={() => setFolder("/projects")}
                  >
                    / Projects
                  </span>{" "}
                  <span className="text-black/80">
                    / {content[folder - 31].title}{" "}
                  </span>
                </div>

                <div className="pt-3">
                  <div className="">
                    <div className="mb-4">
                      <img
                        className="rounded-lg max-w-[600px] w-full object-contain "
                        src={content[folder - 31].img}
                        alt=""
                      />
                    </div>
                    <h2
                      h2
                      className="text-black text-3xl lg:text-5xl font-semibold"
                    >
                      {content[folder - 31].title}
                    </h2>
                  </div>

                  <div>
                    <div className="flex justify-start flex-wrap gap-3 mb-4 mt-2">
                      {content[folder - 31].techs?.map((tech, index) => (
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
                        className="hover:bg-[#000] hover:text-white flex space-x-3 items-center border border-[#000] font-medium p-1.5 px-5  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   text-[#000] transition-all ease-linear duration-500"
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
                              : "hover:bg-[#000] hover:text-white"
                          }  flex space-x-3 items-center border border-[#000] font-medium p-1.5 px-5  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5  transition-all ease-linear duration-500`}
                          onClick={() => folder > 31 && setFolder(folder - 1)}
                        >
                          <ArrowLeft size={18} />
                          <span>Previous Project</span>
                        </button>

                        <button
                          className={`${
                            folder == content.length + 30
                              ? "cursor-not-allowed opacity-70"
                              : "hover:bg-[#000] hover:text-white"
                          }  flex space-x-3 items-center border border-[#000] font-medium p-1.5 px-5  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   000-[#d1bfa7] transition-all ease-linear duration-500`}
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
                <h6 className="underline cursor-pointer text-lg text-black mb-4" onClick={() => setFolder('/')}>
                  ../archive
                </h6>
                <h5 className="text-4xl font-medium mb-8 text-[#000]">
                  My Tech Stack
                </h5>
                {/* <div>
                  <div className="w-full">
                    <div className="relative flex h-full mx-auto max-w-[45rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-4 ">
                      <IconCloud iconSlugs={slugs} />
                    </div>
                  </div>
                </div> */}
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
                  <div>
                    <h4 className="text-2xl mb-3 font-semibold">Languages</h4>
                    <div className=" font-medium grid gap-1.5 text-black/80 text-lg">
                      <div>TypeScript</div>
                      <div>JavaScript</div>
                      <div>Python</div>
                      <div>PHP</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl mb-3 font-semibold">Front End</h4>
                    <div className=" font-medium grid gap-1.5 text-black/80 text-lg">
                      <div>React & Next</div>
                      <div>TailwindCSS</div>
                      <div>HTML & CSS</div>
                      <div>Vite</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl mb-3 font-semibold">Back End</h4>
                    <div className=" font-medium grid gap-1.5 text-black/80 text-lg">
                      <div>Node.js</div>
                      <div>Express.js</div>
                      <div>Laravel</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl mb-3 font-semibold">Databases</h4>
                    <div className=" font-medium grid gap-1.5 text-black/80 text-lg">
                      <div>Prisma</div>
                      <div>MongoDB</div>
                      <div>SQL</div>
                      <div>Firebase</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl mb-3 font-semibold">Others</h4>
                    <div className=" font-medium grid gap-1.5 text-black/80 text-lg">
                      <div>Framer</div>
                      <div>Git & GitHub</div>
                      <div>Thirdweb</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : folder === "/framer-projects" ?  (
              <div>
                <div className="flex flex-wrap gap-3 p-1 lg:p-3 ">
                <div
                  className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-center w-32"
                  onClick={() => setFolder("/")}
                >
                  <img src="icons8-folder.png" alt="" className="w-24 h-24 grayscale contrast-100" />
                  <span className="text-black truncate text-sm pl-2">..</span>
                </div>
                {archives.map((project, index) => (
                  <div
                    key={index}
                    className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-center w-32"
                    // onClick={() => setFolder(project.id)}
                  >
                    <img src="icons8-folder.png" alt="" className="w-24 h-24 grayscale contrast-100" />
                    <span className="text-black truncate text-sm pl-2">
                      {project.title}
                    </span>
                  </div>
                ))}
              </div>
              </div>
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
        </div>
      </div>
    </div>
  );
};

export default Page;
