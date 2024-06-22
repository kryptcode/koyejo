"use client";
import "animate.css";
import { useActiveStore } from "@/store/activeStore";
import { TextGenerateEffect } from "@/components/text-generate";
import Hero from "@/components/v2/hero";
import TechStack from "@/components/v2/tech-stack";
import Experience from "@/components/v2/experience";
import { Footer } from "@/components/v2/footer";
import { SimpleProjects } from "@/components/v2/simple-proj";
import TextRevealByWord from "@/components/magicui/text-reveal";
import SelProjects from "@/components/v2/sel-projects";
import Navbar from "@/components/v2/navbar";

const words = "I\'m a web developer with a passion for crafting digital experiences that stand out. Over the years, I\'ve had the privilege of working on a diverse range of projects, each contributing to my growth and expertise."

export default function Home() {
  const [active, updateActive] = useActiveStore((state) => [
    state.activeComponent,
    state.updateActiveComponent,
  ]);

  return (
    <>
      <main className="relative bg-black bg-grid-small-[#d1bfa7]/30 min-h-[200vh] max-w-[1440px] w-full">
        <Navbar />
        <Hero />

        <div className="w-[90%] mx-auto text-4xl lg:text-5xl font-medium text-gray-500 font-grotesk py-24 ">
          {/* <TextGenerateEffect words={words} /> */}
          <TextRevealByWord text={words} />
        </div>

        <Experience />
        <SelProjects />
        {/* <SimpleProjects /> */}
        <TechStack />
        <Footer />
      </main>
    </>
  );
}
