"use client"

import Link from "next/link"
import AnimatedText from "./animated-text"
import ScrollMarquee from "./scroll-marquee"
import { cn } from "@/lib/utils"
import { buttonVariants } from "../ui/button"

export const Feapro = () => {
  return (
    <div className="pt-8 ">
        <AnimatedText>
            <div className="h-[2px] bg-about/50 mb-8" />
        </AnimatedText>
        <div className="py-10 w-[90%] mx-auto  ">
            <div className="flex items-center gap-10">
                <h2 className="text-3xl lg:text-8xl font-bold text-[#aaa] font-ham">Featured <br /> Projects</h2>
                <div className="h-[4px] rounded-2xl bg-[#aaa] w-full transition-all ease-linear duration-500  " />
            </div>

            <Link href={'https://qcloseinventory.com'} target="_blank" rel="noreferrer" className="flex justify-between lg:items-end flex-col lg:flex-row gap-1.5 hover-orange py-2 my-2 border-b border-about/30 ">
                <div className="mt-12 text-5xl lg:text-[9rem] leading-none font-black font-bebas ">
                    QClose Inventory
                </div>

                <div className="text-xl font-manrope font-light pb-6">2023 . QClose</div>
            </Link>


            <Link href={'https://linkstack-ten-sigma.vercel.app'} target="_blank" rel="noreferrer" className="flex justify-between lg:items-end flex-col lg:flex-row gap-1.5 hover-orange py-2 my-2 border-b border-about/30 ">
                <div className="mt-12 text-5xl lg:text-[9rem] leading-none font-black font-bebas ">
                    LinkStack
                </div>

                <div className="text-xl font-manrope font-light pb-6">2024 . Personal Project</div>
            </Link>

            <Link href={'https://qclosesafety.com'} target="_blank" rel="noreferrer" className="flex justify-between lg:items-end flex-col lg:flex-row gap-1.5 hover-orange py-2 my-2 border-b border-about/30 ">
                <div className="mt-12 text-5xl lg:text-[9rem] leading-none font-black font-bebas ">
                    QClose Safety
                </div>

                <div className="text-xl font-manrope font-light pb-6">2023 . QClose</div>
            </Link>

            <Link href={''} target="_blank" rel="noreferrer" className="flex justify-between lg:items-end flex-col lg:flex-row gap-1.5 hover-orange py-2 my-2 border-b border-about/30 ">
                <div className="mt-12 text-5xl lg:text-[9rem] leading-none font-black font-bebas ">
                    Ore Okan
                </div>

                <div className="text-xl font-manrope font-light pb-6">2024 . Freelance Project</div>
            </Link>

            <Link href={'https://typecast-xi.vercel.app'} target="_blank" rel="noreferrer" className="flex justify-between lg:items-end flex-col lg:flex-row gap-1.5 hover-orange py-2 my-2 border-b border-about/30 ">
                <div className="mt-12 text-5xl lg:text-[9rem] leading-none font-black font-bebas ">
                    TypeCast
                </div>

                <div className="text-xl font-manrope font-light pb-6">2024 . Personal Project</div>
            </Link>

            <div className="text-center font-medium pt-5">
                <Link href="/archives" className={'lg:text-lg font-manrope text-about border border-normaltext p-3 px-10 hover:tracking-widest transition-all ease-linear duration-300'}>
                My Archives
                </Link>
            </div>

        </div>
    </div>
  )
}
