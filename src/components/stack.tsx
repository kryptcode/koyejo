import React from "react";
import "animate.css";
import { useActiveStore } from "@/store/activeStore";
import { X } from "lucide-react";

const TechStack = () => {
  const [active, updateActive] = useActiveStore((state) => [
    state.activeComponent,
    state.updateActiveComponent,
  ]);

  return (
    <div
      className={`${
        active === "stack" ? "block" : "hidden"
      } animate__animated animate__slideInUp h-full absolute bg-black text-white z-10 p-5 lg:p-16 top-0 left-0 right-0 bottom-0 `}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-grotesk font-semibold text-4xl lg:text-5xl uppercase mb-7">
          My Tech Stack
        </h2>
        <X
          size={46}
          className="cursor-pointer"
          onClick={() => updateActive("home")}
        />
      </div>

      <div className="h-[75vh] scrollbar-thin scrollbar-thumb-white/40 scrollbar-thumb-rounded scrollbar-track-black px-2 lg:px-4 overflow-y-scroll ">
        <div>
        <div className={` flex flex-col md:flex-row gap-10 rounded-xl border-[2.5px]  border-l-[5px] border-b-[5px] p-5 transition-all ease-linear duration-300 bg-morph group`}>
              <h2 className={`text-2xl font-grotesk font-semibold flex-1`}>01 - frontend</h2>
              <div className="grid grid-cols-2 text-sm font-medium font-inter gap-y-2 flex-[3]">
                <div>HTML, CSS</div>
                <div>sass</div>
                <div>JavaScript & TypeScript</div>
                <div>React & Vite</div>
                <div>Next.js</div>
                <div>PHP</div>
                <div>Laravel</div>
                <div>styled-components</div>
                <div>TailwindCSS</div>
                <div>Wordpress and Wix</div>
                <div>State Management: Zustand, Recoil etc</div>
              </div>
            </div>

            <div className={` my-5 flex flex-col md:flex-row gap-10 rounded-xl border-[2.5px]  border-l-[5px] border-b-[5px] p-5 bg-morph transition-all ease-linear duration-300 group`}>
              <h2 className={` text-2xl font-grotesk font-semibold flex-1`}>02 - backend</h2>
              <div className="grid font-inter text-sm font-medium grid-cols-2 gap-y-2 flex-[3] ">
                <div>Node.js</div>
                <div>Firebase</div>
                <div>Content Management: Sanity & Strapi</div>
                <div>Prisma</div>
                <div>MySQL</div>
                <div>MongoDB</div>
                <div>Laravel</div>
                <div>Express</div>
              </div>
            </div>

            <div className={`bg-morph my-5 flex flex-col md:flex-row gap-10 rounded-xl border-[2.5px]  border-l-[5px] border-b-[5px] p-5 transition-all ease-linear duration-300 group`}>
              <h2 className={` text-2xl font-grotesk font-semibold flex-1`}>03 - others</h2>
              <div className="grid grid-cols-2 gap-y-2 font-inter text-sm font-medium flex-[3] ">
                <div>Version Control: Git</div>
                <div>Thirdweb</div>
                <div>Figma</div>
                <div>CI/CD</div>
              </div>
            </div>

          
        </div>
      </div>
    </div>
  );
};

export default TechStack;
