"use client"
import Navbar from "@/components/v2/navbar";
import { FolderIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: ""
  }
]

const Page = () => {
  const [folder, setFolder] = useState("/");

  return (
    <div className="relative bg-black bg-grid-small-[#d1bfa7]/30 font-grotesk min-h-[200vh] w-full">
      <Navbar />

      <div className="border-b border-[#d1bfa7]/50 py-3">
        <div className="text-3xl font-bold text-[#d1bfa7] w-[90%] mx-auto  ">
          <Link href="/">KA.</Link>
        </div>
      </div>

      <div className="bg-black py-4">
        <div className="w-[90%] flex mx-auto">
          <div className="flex-1 hidden lg:block">
            <h5 className="text-4xl font-semibold text-neutral-500">Archive</h5>
            <div className="pt-7">
              <div>
                <div className="flex text-lg group text-[#d1bfa7] cursor-pointer font-medium justify-between w-full" onClick={() => setFolder("/")}>
                  <span className="group-hover:underline" >Archive</span>
                  <span>/</span>
                </div>
              </div>
              <div className="pl-3">
                <div className="my-3" onClick={() => setFolder("/projects")}>
                  <div
                    className={`flex text-lg group text-neutral-600 cursor-pointer font-medium justify-between w-full`}
                  >
                    <span className="group-hover:underline">Projects</span>
                    <span>/projects</span>
                  </div>
                </div>
                <div className="my-3 " onClick={() => setFolder("/side-projects")}>
                  <div
                    className={`flex text-lg group text-neutral-600 cursor-pointer font-medium justify-between w-full`}
                  >
                    <span className="group-hover:underline">Side Projects</span>
                    <span>/side-projects</span>
                  </div>
                </div>
                <div className="my-3" onClick={() => setFolder("/portfolio")}>
                  <div
                    className={`flex text-lg group text-neutral-600 cursor-pointer font-medium justify-between w-full`}
                  >
                    <span className="group-hover:underline">Portfolio</span>
                    <span>/portfolio</span>
                  </div>
                </div>
                <div className="my-3" onClick={() => setFolder("/framer-projects")}>
                  <div
                    className={`flex text-lg group text-neutral-600 cursor-pointer font-medium justify-between w-full`}
                  >
                    <span className="group-hover:underline">
                      Framer Projects
                    </span>
                    <span>/framer-projects</span>
                  </div>
                </div>
                <div className="my-3" onClick={() => setFolder("/frontend-mentor")}>
                  <div
                    className={`flex text-lg group text-neutral-600 cursor-pointer font-medium justify-between w-full`}
                  >
                    <span className="group-hover:underline">
                      Frontend Mentor
                    </span>
                    <span>/frontend-mentor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-[2] ">
            {
              folder === "/" && (
                <div>
                  <div className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-start">
                    <img src="icons8-folder.png" alt="" className="w-16 h-16" />
                    <span className="text-neutral-400 pl-2">Projects</span>
                  </div>
                  <div className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-start">
                    <img src="icons8-folder.png" alt="" className="w-16 h-16" />
                    <span className="text-neutral-400 pl-2">Side Projects</span>
                  </div>
                  <div className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-start">
                    <img src="icons8-folder.png" alt="" className="w-16 h-16" />
                    <span className="text-neutral-400 pl-2">Portfolio</span>
                  </div>
                  <div className="flex hover:opacity-80 cursor-pointer flex-col p-2 items-start">
                    <img src="icons8-folder.png" alt="" className="w-16 h-16" />
                    <span className="text-neutral-400 pl-2"></span>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
