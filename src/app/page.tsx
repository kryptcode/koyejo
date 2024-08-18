"use client";
import "animate.css";
import { useActiveStore, useArchiveStore } from "@/store/activeStore";
import TextRevealByWord from "@/components/magicui/text-reveal";
import { content } from "@/contants/projects";
import Link from "next/link";
import { PageDock } from "@/components/page-dock";
import { Hero } from "@/components/version/hero";
import { Feapro } from "@/components/version/feapro";

const words = "I\'m a web developer with a passion for crafting digital experiences that stand out. Over the years, I\'ve had the privilege of working on a diverse range of projects, each contributing to my growth and expertise."

export default function Home() {
  const [active, updateActive] = useActiveStore((state) => [
    state.activeComponent,
    state.updateActiveComponent,
  ]);

  const [folder, setFolder] = useArchiveStore(state => [state.value, state.setValue])


  return (
    <>
      <main className="relative dark:bg-bg dark:text-[#ddd] bg-white font-grotesk text-black max-w-[1440px] w-full">
        <Hero />
        <Feapro />

        {/* <PageDock /> */}
      </main>
    </>
  );
}
