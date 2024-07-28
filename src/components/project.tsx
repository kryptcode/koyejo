import { useArchiveStore } from '@/store/activeStore'
import { content, projects } from '@/contants/projects'
import { ArrowLeft, ArrowRight, SquareArrowOutUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Project = () => {
    const [folder, setFolder] = useArchiveStore((state: any) => [
        state.value,
        state.setValue,
      ]);
    return (
    <>
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
                  <span className="text-black/80 dark:text-[#ccc]">
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
                      className="text-black dark:text-goldexperience text-3xl lg:text-5xl font-semibold"
                    >
                      {content[folder - 31].title}
                    </h2>
                  </div>

                  <div>
                    <div className="flex justify-start flex-wrap gap-3 mb-4 mt-2">
                      {content[folder - 31].techs?.map((tech, index) => (
                        <div
                          key={index}
                          className="border border-black dark:border-goldexperience font-medium p-1.5 px-5  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   text-black dark:text-goldexperience transition-all ease-linear duration-500"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>

                    <div className="mb-5">
                      <p className="text-lg lg:text-xl sm:w-1/2 lg:w-2/3 text-black/80 dark:text-[#ddd]  ">
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
                        className="hover:bg-black  hover:text-white dark:hover:text-black dark:hover:bg-goldexperience flex space-x-3 items-center border border-black dark:border-goldexperience font-medium p-1.5 px-5  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   text-black dark:text-goldexperience transition-all ease-linear duration-500"
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
                              : "hover:bg-black dark:hover:bg-goldexperience dark:text-goldexperience  hover:text-white dark:hover:text-black"
                          }  flex space-x-3 items-center border border-black dark:border-goldexperience font-medium p-1.5 px-5  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   000-[#d1bfa7] transition-all ease-linear duration-500`}
                          onClick={() => folder > 31 && setFolder(folder - 1)}
                        >
                          <ArrowLeft size={18} />
                          <span>Previous Project</span>
                        </button>

                        <button
                          className={`${
                            folder == content.length + 30
                              ? "cursor-not-allowed opacity-70"
                              : "hover:bg-black dark:hover:bg-goldexperience dark:text-goldexperience  hover:text-white dark:hover:text-black"
                          }  flex space-x-3 items-center border border-black dark:border-goldexperience font-medium p-1.5 px-5  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   000-[#d1bfa7] transition-all ease-linear duration-500`}
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
    </>
  )
}
