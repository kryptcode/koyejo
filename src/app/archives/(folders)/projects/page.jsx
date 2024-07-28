"use client"
import { content } from '@/contants/projects'
import { useArchiveStore } from '@/store/activeStore';
import { Folder } from 'lucide-react'
import React from 'react'

const Page = () => {
    const [folder, setFolder] = useArchiveStore((state) => [
        state.value,
        state.setValue,
    ]);

  return (
    <div className="lg:flex-[3] xl:flex-[3] lg:h-[100vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-black py-5 px-1.5 ">
        <h2 className="text-4xl font-bold mb-4 p-3 pt-6 text-[#000]">Projects</h2>

        <div className="flex flex-wrap gap-3 p-1 lg:p-3 font-medium ">
            <div
                className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-center w-32"
                onClick={() => setFolder("/")}
            >
                <img src="/icons8-folder.png" alt="" className="w-24 h-24 grayscale dark:grayscale-0 contrast-0 dark:contrast-100" />
                <span className="text-black truncate text-sm">..</span>
            </div>
            {content.map((project, index) => (
                <div
                    key={index}
                    className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-center w-32"
                    onClick={() => setFolder(project.id)}
                  >
                    <img src="/icons8-folder.png" alt="" className="w-24 h-24 grayscale dark:grayscale-0 contrast-0 dark:contrast-100" />
                    <span className="text-black truncate text-sm">
                      {project.title}
                    </span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Page