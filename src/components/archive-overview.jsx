import { useArchiveStore } from '@/store/activeStore';
import { CornerUpLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const ArchiveOverview = () => {
  const [folder, setFolder] = useArchiveStore((state) => [
    state.value,
    state.setValue,
  ]);
  return (
    <>
        <div className="flex flex-wrap gap-3 p-1 lg:p-3 font-medium ">
                <Link
                  href={"/"}
                  className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-center w-32"
                  onClick={() => setFolder("/")}
                >
                  <img src="icons8-folder.png" alt="" className=" w-24 h-24 grayscale dark:grayscale-0 contrast-0 dark:contrast-100" />
                  <span className=" dark:text-white">
                    <CornerUpLeft size={16} />
                  </span>
                </Link>
                <div
                  className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-center w-32"
                  onClick={() => setFolder("/projects")}
                >
                  <img src="icons8-folder.png" alt="" className=" w-24 h-24 grayscale dark:grayscale-0 contrast-0 dark:contrast-100" />
                  <span className=" dark:text-white truncate text-sm">Projects</span>
                </div>
                <div
                  className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-center w-32"
                  onClick={() => setFolder("/side-projects")}
                >
                  <img src="icons8-folder.png" alt="" className=" w-24 h-24 grayscale dark:grayscale-0 contrast-0 dark:contrast-100" />
                  <span className=" dark:text-white truncate text-sm">Archive</span>
                </div>
                {/* <div
                  className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-center w-32"
                  onClick={() => setFolder("/framer-projects")}
                >
                  <img src="icons8-folder.png" alt="" className=" w-24 h-24 grayscale dark:grayscale-0 contrast-0 dark:contrast-100" />
                  <span className=" dark:text-white truncate text-sm">Archive</span>
                </div> */}
                <div
                  className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-center w-32"
                  onClick={() => setFolder("/my-stack")}
                >
                  <img src="icons8-folder.png" alt="" className=" w-24 h-24 grayscale dark:grayscale-0 contrast-0 dark:contrast-100" />
                  <span className=" dark:text-white truncate text-sm">Stack</span>
                </div>
              </div>
    </>
  )
}