"use client";
import "animate.css";
import { useActiveStore } from "@/store/activeStore";
// import Experience from "@/components/experience";
import { Github, Linkedin, Mail, ScrollText, Twitter } from "lucide-react";
import Link from "next/link";
import { Meteors } from "@/components/meteors";
import { Projects } from "@/components/projects";
import Navbar from "@/components/v2/navbar";
import Hero from "@/components/v2/hero";
import SelProjects from "@/components/v2/sel-projects";
import TechStack from "@/components/v2/tech-stack";
import Experience from "@/components/v2/experience";
import { Footer } from "@/components/v2/footer";
import { SimpleProjects } from "@/components/v2/simple-proj";

export default function Home() {
  const [active, updateActive] = useActiveStore((state) => [
    state.activeComponent,
    state.updateActiveComponent,
  ]);

  return (
    <>
      <main className="relative bg-black bg-grid-small-[#d1bfa7]/30 min-h-[200vh] w-full">
        <Navbar />
        <Hero />

        <div className="w-[90%] mx-auto font-grotesk py-24 ">
          <p className="text-4xl lg:text-5xl font-medium text-gray-500">
            I'm a web developer with a passion for crafting digital experiences
            that stand out. Over the years, I've had the privilege of working on
            a diverse range of projects, each contributing to my growth and
            expertise.
          </p>
        </div>

        {/* <SelProjects /> */}
        <SimpleProjects />
        <Experience />
        <TechStack />
        <Footer />
      </main>
    </>
  );
}
