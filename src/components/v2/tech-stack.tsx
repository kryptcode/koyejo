import React from "react";
import IconCloud from "@/components/magicui/icon-cloud";
import BoxReveal from "../magicui/box-reveal";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "mongodb",
  "php",
  "laravel",
  "tailwindcss",
  "python",
  "adobeillustrator",
  "thirdweb",
  "reactquery",
  "reacthookform",
  "recoil",
  "chartdotjs",
  "vite",
  "firebase",
  // "appwrite",
  "vercel",
  "jest",
  "git",
  "github",
  // "visualstudiocode",
  "figma",
  // "wordpress",
  // "clerk",
  //   "jira",
  //   "cypress",
  //   "docker",
  // "flask",
  //   "amazonaws",
  //   "postgresql",
  //   "nginx",
  // "testinglibrary",
  //   "gitlab",
  //   "androidstudio",
  //   "sonarqube",
];

const TechStack = () => {
  return (
    <div className="w-[90%] mx-auto font-grotesk min-h-screen pb-24 ">
      <div className="flex items-center space-x-3  mb-5 ">
        <h3
          className={`text-[#d1bfa7] text-6xl lg:text-9xl font-bold flex-shrink-0`}
        >
          My Stack.
        </h3>
        {/* <div
          className={`bg-[#d1bfa7] h-[3px] w-0 group-hover:w-full transition-all ease-linear duration-700`}
        /> */}
      </div>

      <div className="w-full">
        {/* <div className="relative flex h-full mx-auto max-w-[45rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-4 ">
          <IconCloud iconSlugs={slugs} />
        </div> */}
      </div>

      <div className="mt-16 ">
        <div
          className={`border-neutral-500  flex flex-col md:flex-row gap-10 rounded-xl border-[2.5px]  border-l-[5px] border-b-[5px] p-5 py-8 transition-all ease-linear duration-300`}
        >
          <h2
            className={`text-[#d1bfa7] text-3xl lg:text-5xl font-semibold flex-1`}
          >
            01 - languages
          </h2>
          <div className="grid grid-cols-2 gap-y-3 flex-[2] text-xl lg:text-2xl font-medium">
            <div>TypeScript</div>
            <div>JavaScript</div>
            <div>Python</div>
            <div>PHP</div>
          </div>
        </div>

        <div className="my-5"></div>

        <div
          className={`border-neutral-500 flex flex-col md:flex-row gap-10 rounded-xl border-[2.5px]  border-l-[5px] border-b-[5px] p-5 py-8 transition-all ease-linear duration-300`}
        >
          <h2
            className={`text-[#d1bfa7] text-3xl lg:text-5xl font-semibold flex-1`}
          >
            02 - front-end
          </h2>
          <div className="grid grid-cols-2 gap-y-3 flex-[2] text-xl lg:text-2xl font-medium">
            <div>React & Next.js</div>
            <div>TailwindCSS</div>
            <div>HTML & CSS</div>
            <div>Vite</div>
            <div>Zustand</div>
            <div>TailwindCSS</div>
            <div>Recoil</div>
            <div>styled-components</div>
          </div>
        </div>

        <div className="my-5"></div>

        <div
          className={`border-neutral-500 flex flex-col md:flex-row gap-10 rounded-xl border-[2.5px]  border-l-[5px] border-b-[5px] p-5 py-8 transition-all ease-linear duration-300`}
        >
          <h2
            className={`text-[#d1bfa7] text-3xl lg:text-5xl font-semibold flex-1`}
          >
            03 - back-end
          </h2>
          <div className="grid grid-cols-2 gap-y-3 flex-[2] text-xl lg:text-2xl font-medium">
            <div>Node.js</div>
            <div>Express.js</div>
            <div>Laravel</div>
            <div>Prisma</div>
            <div>MongoDB</div>
            <div>Firebase</div>
          </div>
        </div>

        <div className="my-5"></div>

        <div
          className={`border-neutral-500 flex flex-col md:flex-row gap-10 rounded-xl border-[2.5px]  border-l-[5px] border-b-[5px] p-5 py-8 transition-all ease-linear duration-300`}
        >
          <h2
            className={`text-[#d1bfa7] text-3xl lg:text-5xl font-semibold flex-1`}
          >
            04 - others
          </h2>
          <div className="grid grid-cols-2 gap-y-3 flex-[2] text-xl lg:text-2xl font-medium">
            <div>Framer</div>
            <div>Figma</div>
            <div>Git & GitHub</div>
            <div>Thirdweb</div>
            <div>Wordpress</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
