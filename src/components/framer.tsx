import { archives } from '@/contants/projects'
import { useArchiveStore } from '@/store/activeStore';
import React from 'react'

export const Framer = () => {
    const [folder, setFolder] = useArchiveStore((state: any) => [
        state.value,
        state.setValue,
      ]);
  return (
    <>
        <div>
                <div className="flex flex-wrap gap-3 p-1 lg:p-3 font-medium ">
                <div
                  className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-center w-32"
                  onClick={() => setFolder("/")}
                >
                  <img src="icons8-folder.png" alt="" className="w-24 h-24 grayscale dark:grayscale-0 contrast-0 dark:contrast-100" />
                  <span className="text-black dark:text-white truncate text-sm">..</span>
                </div>
                {archives.map((project, index) => (
                  <div
                    key={index}
                    className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-center w-32"
                    // onClick={() => setFolder(project.id)}
                  >
                    <img src="icons8-folder.png" alt="" className="w-24 h-24 grayscale dark:grayscale-0 contrast-0 dark:contrast-100" />
                    <span className="text-black dark:text-white truncate text-sm">
                      {project.title}
                    </span>
                  </div>
                ))}
              </div>
        </div>
    </>
  )
}
