"use client";
import "animate.css";
import { useActiveStore, useArchiveStore } from "@/store/activeStore";

const words = "I\'m a web developer with a passion for crafting digital experiences that stand out. Over the years, I\'ve had the privilege of working on a diverse range of projects, each contributing to my growth and expertise."

export default function Home() {
  const [active, updateActive] = useActiveStore((state) => [
    state.activeComponent,
    state.updateActiveComponent,
  ]);

  const [folder, setFolder] = useArchiveStore(state => [state.value, state.setValue])


  return (
    <>
      <main className="relative bg-black bg-grid-small-[#d1bfa7]/30 min-h-[200vh] w-full">
        
      </main>
    </>
  );
}
