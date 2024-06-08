import { Github, Mail, ScrollText, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="w-[90%] mx-auto font-grotesk group pb-24 ">
      {/* <div className="flex items-center space-x-3  mb-10 ">
        <h3
          className={`text-[#d1bfa7] text-5xl lg:text-7xl font-bold flex-shrink-0`}
        >
          Contact Me.
        </h3>
        <div
          className={`bg-[#d1bfa7] h-[3px] w-0 group-hover:w-full transition-all ease-linear duration-700`}
        />
      </div> */}

      <div className="text-[#d1bfa7] text-2xl">
        &copy; 2024 Koyejo. All Rights Reserved. 
      </div>

      {/* <div className="flex items-center lg:justify-center flex-col lg:flex-row lg:space-x-5 mt-6">
        <Link
          href="https://twitter.com/koye_vi"
          target="_blank"
          className="flex space-x-2 group p-3 py-1.5 rounded-lg bg-[#d1bfa7] text-black transition-all ease-linear duration-500"
        >
          <Twitter />
          <div className="">
            @koye_vi
          </div>
        </Link>
        <Link
          href="mailto:adeyombokehd@gmail.com"
          target="_blank"
          className="flex space-x-2 group p-3 py-1.5 rounded-lg bg-[#d1bfa7] text-black transition-all ease-in-out duration-500"
        >
          <Mail />
          <div className="">
            adeyombokehd@gmail.com
          </div>
        </Link>
        <Link
          href="https://github.com/kryptcode"
          target="_blank"
          className="flex space-x-2 group p-3 py-1.5 rounded-lg bg-[#d1bfa7] text-black transition-all ease-linear duration-500"
        >
          <Github />
          <div className=" font-grotesk">
            @kryptcode
          </div>
        </Link>
        <Link
          href="https://read.cv/koyejo"
          target="_blank"
          className="flex space-x-2 group p-3 py-1.5 rounded-lg bg-[#d1bfa7] text-black transition-all ease-linear duration-500"
        >
          <ScrollText />
          <div className="">
            read.cv/koyejo
          </div>
        </Link>
      </div> */}
    </div>
  );
};
