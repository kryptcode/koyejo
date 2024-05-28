import React from "react";
import IconCloud from "@/components/magicui/icon-cloud";

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
  "flask",
  "reactquery",
  "reacthookform",
  "recoil",
  "chartdotjs",
//   "amazonaws",
//   "postgresql",
  "firebase",
//   "nginx",
  "vercel",
  "testinglibrary",
  "jest",
//   "cypress",
//   "docker",
  "git",
//   "jira",
  "github",
//   "gitlab",
  "visualstudiocode",
//   "androidstudio",
//   "sonarqube",
  "figma",
];

const TechStack = () => {
  return (
    <div className="w-[90%] mx-auto font-grotesk group min-h-screen pb-24 ">
      <div className="flex items-center space-x-3  mb-10 ">
        <h3
          className={`text-[#d1bfa7] text-5xl lg:text-7xl font-bold flex-shrink-0`}
        >
          My Stack.
        </h3>
        <div
          className={`bg-[#d1bfa7] h-[3px] w-0 group-hover:w-full transition-all ease-linear duration-700`}
        />
      </div>

      <div className="w-full">
        <div className="relative flex h-full mx-auto max-w-[45rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-4 ">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        <div>
            <h4 className="text-2xl mb-3 text-[#d1bfa7] font-semibold">Languages</h4>
            <div className=" font-medium flex space-x-3 flex-wrap">
                <div>TypeScript</div>
                <div>JavaScript</div>
                <div>PHP</div>
                <div>Python</div>
            </div>
        </div>
        <div>
            <h4 className="text-2xl mb-3 text-[#d1bfa7] font-semibold">Front End</h4>
            <div className=" font-medium flex space-x-3 flex-wrap">
                <div>React</div>
                <div>Next.js</div>
                <div>TailwindCSS</div>
                <div>HTML & CSS</div>
                <div>Zustand</div>
                <div>Recoil</div>
                <div>Framer</div>
                <div>Wordpress</div>
                <div>Framer motion</div>
            </div>
        </div>
        <div>
            <h4 className="text-2xl mb-3 text-[#d1bfa7] font-semibold">Back End</h4>
            <div className=" font-medium flex space-x-3 flex-wrap">
                <div>Node.js</div>
                <div>Express.js</div>
                <div>Laravel</div>
                <div>Flask</div>
            </div>
        </div>
        <div>
            <h4 className="text-2xl mb-3 text-[#d1bfa7] font-semibold">Databases</h4>
            <div className=" font-medium flex space-x-3 flex-wrap">
                <div>MongoDB</div>
                <div>SQL</div>
                <div>Firebase</div>
                <div>AppWrite</div>
                <div>Supabase</div>
            </div>
        </div>
        <div>
            <h4 className="text-2xl mb-3 text-[#d1bfa7] font-semibold">Dev Tools</h4>
            <div className=" font-medium flex space-x-3 flex-wrap">
                <div>Git</div>
                <div>GitHub</div>
                <div>Google Cloud</div>
                <div>VS Code</div>
                <div>Postman</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
