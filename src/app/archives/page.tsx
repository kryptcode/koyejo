import Navbar from "@/components/v2/navbar";
import Link from "next/link";
import React from "react";

const Page = () => {
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
                <div className="flex text-lg group text-[#d1bfa7] cursor-pointer font-medium justify-between w-full">
                  <span className="group-hover:underline">Archive</span>
                  <span>/archive</span>
                </div>
              </div>
              <div className="pl-3">
                <div className="my-3">
                  <div
                    className={`flex text-lg group text-neutral-600 cursor-pointer font-medium justify-between w-full`}
                  >
                    <span className="group-hover:underline">Projects</span>
                    <span>/archive/projects</span>
                  </div>
                </div>
                <div className="my-3">
                  <div
                    className={`flex text-lg group text-neutral-600 cursor-pointer font-medium justify-between w-full`}
                  >
                    <span className="group-hover:underline">Side Projects</span>
                    <span>/archive/side-projects</span>
                  </div>
                </div>
                <div className="my-3">
                  <div
                    className={`flex text-lg group text-neutral-600 cursor-pointer font-medium justify-between w-full`}
                  >
                    <span className="group-hover:underline">Portfolio</span>
                    <span>/archive/portfolio</span>
                  </div>
                </div>
                <div className="my-3">
                  <div
                    className={`flex text-lg group text-neutral-600 cursor-pointer font-medium justify-between w-full`}
                  >
                    <span className="group-hover:underline">Frontend Mentor</span>
                    <span>/archive/fm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[2] "></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
