"use client";
import "animate.css";
import { useActiveStore, useArchiveStore } from "@/store/activeStore";
import TextRevealByWord from "@/components/magicui/text-reveal";
import { content } from "@/contants/projects";
import Link from "next/link";
import { PageDock } from "@/components/page-dock";

const words = "I\'m a web developer with a passion for crafting digital experiences that stand out. Over the years, I\'ve had the privilege of working on a diverse range of projects, each contributing to my growth and expertise."

export default function Home() {
  const [active, updateActive] = useActiveStore((state) => [
    state.activeComponent,
    state.updateActiveComponent,
  ]);

  const [folder, setFolder] = useArchiveStore(state => [state.value, state.setValue])


  return (
    <>
      <main className="relative bg-white font-grotesk text-black min-h-[200vh] w-full">
        {/* Intro */}
        <div className=" p-5 lg:p-10 text-3xl lg:text-6xl font-medium ">
          I&apos;m Koye, a developer with a passion for developing and implementing experiences that standout. Currently available for freelance projects and full-time positions.
        </div>

        <div className="p-5 lg:p-10 pt-16">
          <h5 className="uppercase text-2xl lg:text-4xl mb-5">Work Experience</h5>
          <div className="pb-10">
            <h6 className="text-xl lg:text-3xl">March 2021 - February 2022</h6>
            <h2 className="text-3xl lg:text-6xl font-semibold">Front-End Developer . Freelance</h2> 
          </div>
          <div className="pb-10">
            <h6 className="text-xl lg:text-3xl">March 2022 - October 2022</h6>
            <h2 className="text-3xl lg:text-6xl font-semibold">Front-End Developer . Zeta Tech</h2> 
          </div>
          <div className="pb-10">
            <h6 className="text-xl lg:text-3xl">May 2023 - March 2024</h6>
            <h2 className="text-3xl lg:text-6xl font-semibold">Software Developer . QClose</h2> 
          </div>
          <div className="pb-10">
            <h6 className="text-xl lg:text-3xl">November 2022 - Present</h6>
            <h2 className="text-3xl lg:text-6xl font-semibold">Full-Stack Developer . Freelance</h2> 
          </div>
        </div>

        <div className="p-5 lg:p-10">
          <h5 className="uppercase text-2xl lg:text-4xl mb-5">Selected Work</h5>
          
          <div>
            {
              content.map((item, index) => (
                <div className="mb-4 lg:mb-10" key={index}>
                  <div>
                    <Link
                      onClick={() => setFolder(item.id)}
                      href={'/archives'}
                      className="mb-1 inline-block cursor-pointer group border-b-4 border-black hover:border-white translate-x-0 duration-300 ease-linear "
                    >
                      <span className="text-3xl lg:text-6xl mr-1 lg:mr-4 font-medium">{`0${
                        index + 1
                      }.`}</span>
                      <span className="text-3xl lg:text-6xl transition-all ease-in-out duration-500 animate-in font-bold">
                        {item.title}
                      </span>
                    </Link>
                    <div className=" text-xl lg:text-5xl lg:w-[90%] ">
                      {item.description}
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

          <div className="py-10">
            <Link href="/archives" className=" inline-block cursor-pointer group border-b-4 border-black hover:border-white translate-x-0 duration-300 ease-linear text-3xl lg:text-5xl font-medium">
              View More
            </Link>
          </div>
        </div>

        <div className="p-5 lg:p-10">
          <h5 className="uppercase text-2xl lg:text-4xl mb-5">Socials</h5>
          <div className="text-3xl lg:text-6xl font-medium">
            Let&apos;s get in touch! You can message me through my <Link href="https://twitter.com/koye_vi" className=" inline-block cursor-pointer group border-b-4 border-black hover:border-white translate-x-0 duration-300 ease-linear">Twitter</Link> or by sending me an <Link href="mailto:adeyombokehd@gmail.com" className=" inline-block cursor-pointer group border-b-4 border-black hover:border-white translate-x-0 duration-300 ease-linear">email.</Link>
          </div>
        </div>

        <PageDock />
      </main>
    </>
  );
}
