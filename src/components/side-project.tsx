import { projects } from '@/contants/projects'
import { useArchiveStore } from '@/store/activeStore'
import { ArrowLeft, ArrowRight, SquareArrowOutUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const SideProject = () => {
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
                    onClick={() => setFolder("/side-projects")}
                  >
                    / Archive
                  </span>{" "}
                  <span className="text-black/80 dark:text-[#ccc] ">
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
                      className="text-black dark:text-goldexperience text-3xl lg:text-5xl font-semibold"
                    >
                      {projects[folder].title}
                    </h2>
                  </div>

                  <div>
                    <div className="flex justify-start flex-wrap gap-3 mb-4 mt-2">
                      {projects[folder].techs.map((tech, index) => (
                        <div
                          key={index}
                          className=" border border-black dark:border-goldexperience font-medium p-1.5 px-5  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   text-black dark:text-goldexperience transition-all ease-linear duration-500"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>

                    <div className="mb-5">
                      <p className="text-lg lg:text-xl sm:w-1/2 lg:w-2/3 text-black/80 dark:text-[#ddd] ">
                        {projects[folder].description}
                      </p>
                    </div>
                    <div className="w-52 ">
                      <Link
                        href={projects[folder].link}
                        target="_blank"
                        className="hover:bg-black  hover:text-white dark:hover:text-black dark:hover:bg-goldexperience flex space-x-3 items-center border border-black dark:border-goldexperience font-medium p-1.5 px-5  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   text-black dark:text-goldexperience transition-all ease-linear duration-500"
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
                              : "hover:bg-black dark:hover:bg-goldexperience dark:text-goldexperience  hover:text-white dark:hover:text-black"
                          }  flex space-x-3 items-center border border-black dark:border-goldexperience font-medium p-1.5 px-5  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   000-[#d1bfa7] transition-all ease-linear duration-500`}
                          onClick={() => folder > 0 && setFolder(folder - 1)}
                        >
                          <ArrowLeft size={18} />
                          <span>Previous Project</span>
                        </button>

                        <button
                          className={`${
                            folder == projects.length - 1
                              ? "cursor-not-allowed opacity-70"
                              : "hover:bg-black dark:hover:bg-goldexperience dark:text-goldexperience  hover:text-white dark:hover:text-black"
                          }  flex space-x-3 items-center border border-black dark:border-goldexperience font-medium p-1.5 px-5  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   000-[#d1bfa7] transition-all ease-linear duration-500`}
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
    </>
  )
}
