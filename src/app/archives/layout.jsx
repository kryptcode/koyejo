"use client"
import { PageDock } from '@/components/page-dock'
import { useArchiveStore } from '@/store/activeStore'
import { CornerUpLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Layout = ({ children }) => {
  const [folder, setFolder] = useArchiveStore((state) => [
    state.value,
    state.setValue,
  ]);
  return (
    <div className='relative max-w-[1440px] bg-white text-black dark:bg-black dark:text-[#ddd] flex flex-col font-grotesk min-h-[100vh] w-full'>
      <PageDock />

      <div className="flex-grow">
        <div className=" flex items-start mx-auto h-full">
        <div className="flex-1  py-10 h-[100vh] hidden pl-2 lg:block">
          <div className="bg-black dark:bg-goldexperience dark:text-black h-full p-4 rounded-2xl ">
            <h5 className="text-3xl font-semibold text-[#d1bfa7] dark:text-black">
              Koye&apos;s Lab
            </h5>
            <div className="pt-16">
              <div className="mb-5">
                <Link
                  href={"/"}
                  onClick={() => setFolder("/")}
                  className="group text-neutral-400 dark:text-neutral-800 flex items-center space-x-1 cursor-pointer w-full"
                >
                  <CornerUpLeft size={20} />
                  <span className="group-hover:underline pl-2">
                    Back to Homepage
                  </span>
                </Link>
              </div>
              <div>
                <div
                  className="flex group text-[#d1bfa7] dark:text-black cursor-pointer justify-between w-full"
                  onClick={() => setFolder("/")}
                >
                  <span className="group-hover:underline">Archive</span>
                  <span>/</span>
                </div>
              </div>
              <div className="pl-3">
                <div className="my-3">
                  <div
                    className={`text-neutral-300 dark:text-neutral-800 text-sm flex group cursor-pointer justify-between w-full`}
                    onClick={() => setFolder("/projects")}
                  >
                    <span className="group-hover:underline">Projects</span>
                    <span>/projects</span>
                  </div>
                </div>
                <div
                  className="my-3 "
                >
                  <div
                    className={`text-neutral-300 dark:text-neutral-800 text-sm flex group  cursor-pointer justify-between w-full`}
                    onClick={() => setFolder("/side-projects")}
                  >
                    <span className="group-hover:underline">Archive</span>
                    <span>/archive</span>
                  </div>
                </div>
                <div
                  className="my-3"
                >
                  {/* <div
                    className={`text-neutral-300 dark:text-neutral-800 text-sm flex group cursor-pointer justify-between w-full`}
                  >
                    <span className="group-hover:underline">
                      Archive
                    </span>
                    <span>/archive</span>
                  </div> */}
                </div>
                <div className="my-3">
                  <div
                    className={`text-neutral-300 dark:text-neutral-800 text-sm flex group cursor-pointer justify-between w-full`}
                    onClick={() => setFolder("/my-stack")}
                  >
                    <span className="group-hover:underline">Stack</span>
                    <span>/stack</span>
                  </div>
                </div>
              </div>
              

              </div>
            </div>
          </div>  

          {children}
        </div>
      </div>

    </div>
  )
}

export default Layout