"use client";
import "animate.css";
import { useActiveStore } from "@/store/activeStore";
import Experience from "@/components/experience";
import { Github, Linkedin, Mail, ScrollText, Twitter } from "lucide-react";
import Link from "next/link";
import { Meteors } from "@/components/meteors";
import { Projects } from "@/components/projects";
import Navbar from "@/components/v2/navbar";
import Hero from "@/components/v2/hero";
import SelProjects from "@/components/v2/sel-projects";
import TechStack from "@/components/v2/tech-stack";

export default function Home() {
  const [active, updateActive] = useActiveStore((state) => [
    state.activeComponent,
    state.updateActiveComponent,
  ]);

  return (
    <>
      <main className="relative bg-black min-h-[200vh] w-full">
        <Navbar />
        <Hero />
        <SelProjects />
        <TechStack />
      </main>
    </>
  );
}
