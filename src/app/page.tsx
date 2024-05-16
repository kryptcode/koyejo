"use client";
import "animate.css";
import { useActiveStore } from "@/store/activeStore";
import Experience from "@/components/experience";
import TechStack from "@/components/stack";
import { Github, Linkedin, Mail, ScrollText, Twitter } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [active, updateActive] = useActiveStore((state) => [
    state.activeComponent,
    state.updateActiveComponent,
  ]);

  return (
    <>
      <main className="min-h-screen scrollbar-none flex bg-black text-white justify-center items-center relative">
        <div className="w-[80%] lg:w-1/2">
          <div className=" w-full bg-morph p-5">
            <h4 className="font-inter font-medium text-2xl mb-3">Hi, I'm</h4>
            <h2 className="font-grotesk text-6xl font-bold mb-7">Koye</h2>
            <p className="font-medium opacity-70 mb-7 text-xl">
              A web developer and software engineer passionate about crafting
              elegant solutions with cutting-edge technology. I strive to
              deliver high-quality, scalable, and user-friendly web applications
              that exceed client expectations
            </p>
            <div className="flex flex-wrap items-center justify-center font-medium text-lg font-grotesk space-x-7">
              {/* <Link href="/experience" className="">Experience</Link> */}
              <div
                onClick={() => updateActive("experience")}
                className="hover:font-semibold hover:opacity-70 cursor-pointer"
              >
                Experience
              </div>
              <div>Projects</div>
              <div
                onClick={() => updateActive("stack")}
                className="hover:font-semibold hover:opacity-70 cursor-pointer"
              >
                Tech Stack
              </div>
            </div>
            <div className="flex items-center justify-center space-x-5 mt-6">
              <Link href="https://twitter.com/koye_vi" target="_blank" className="flex space-x-2 group p-3 py-1.5 rounded-lg hover:bg-slate-800/50 transition-all ease-linear duration-500">
              <Twitter />
              <div className="hidden group-hover:inline-block transition-all ease-linear duration-500 font-grotesk">@koye_vi</div>
              </Link>
              <Link href="mailto:adeyombokehd@gmail.com" target="_blank" className="flex space-x-2 group p-3 py-1.5 rounded-lg hover:bg-slate-800/50 transition-all ease-in-out duration-500">
              <Mail />
              <div className="hidden group-hover:inline-block transition-all ease-in-out duration-500 font-grotesk">adeyombokehd@gmail.com</div>
              </Link>
              <Link href="https://github.com/kryptcode" target="_blank" className="flex space-x-2 group p-3 py-1.5 rounded-lg hover:bg-slate-800/50 transition-all ease-linear duration-500">
              <Github />
              <div className="hidden group-hover:inline-block transition-all ease-linear duration-500 font-grotesk">@kryptcode</div>
              </Link>
              <Link href="https://read.cv/koyejo" target="_blank" className="flex space-x-2 group p-3 py-1.5 rounded-lg hover:bg-slate-800/50 transition-all ease-linear duration-500">
              <ScrollText />
              <div className="hidden group-hover:inline-block transition-all ease-linear duration-500 font-grotesk">read.cv/koyejo</div>
              </Link>
            </div>
            <div>
                
            </div>
          </div>
        </div>
        <Experience />
        <TechStack />
      </main>
    </>
  );
}
