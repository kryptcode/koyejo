"use client"
import React, { useEffect, useState } from "react";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { BeakerIcon, Github, Home, HomeIcon, Mail, MoonIcon, SunIcon, TwitterIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { useTheme } from "next-themes";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function PageDock() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  function toggleDarkMode() {
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }
  return (
    <TooltipProvider>
      <div className="relative">
        <Dock direction="middle" className="fixed bottom-[50px] rounded-[3rem] left-1/2 -translate-x-1/2 bg-black text-white border-black dark:bg-goldexperience dark:text-black dark:border-goldexperience ">
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={"/"} className={cn(buttonVariants({variant: "ghost"}))}>
                <Home size={18} />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-[#444] text-white">
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/archives" className={cn(buttonVariants({variant: "ghost"}))}>
                <BeakerIcon size={18} />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-[#444] text-white">
                <p>Koye&apos;s Lab</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <Separator orientation="vertical" className="h-full" />
          <DockIcon>
          <Tooltip>
              <TooltipTrigger asChild>
                <Link href="https://github.com/kryptcode" className={cn(buttonVariants({variant: "ghost"}))} target="_blank">
                <Github size={18} />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-[#444] text-white">
                <p>Github</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <DockIcon>
          <Tooltip>
              <TooltipTrigger asChild>
                <Link href={'https://twitter.com/koye_vi'} className={cn(buttonVariants({variant: "ghost"}))} target="_blank">
                <TwitterIcon size={18} />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-[#444] text-white">
                <p>Twitter</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="mailto:adeyombokehd@gmail.com" className={cn(buttonVariants({variant: "ghost"}))}>
                <Mail size={18} />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-[#444] text-white">
                <p>Mail</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="https://read.cv/koyejo" target="_blank"  className={cn(buttonVariants({variant: "ghost"}), "text-sm")}>CV</Link>
              </TooltipTrigger>
              <TooltipContent className="bg-[#444] text-white">
                <p>Read.CV</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="" onClick={toggleDarkMode}  className={cn(buttonVariants({variant: "ghost"}), "text-sm")}>
                  {
                    theme !== "dark" ? <MoonIcon size={18} /> : <SunIcon size={18} /> 
                  }
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-[#444] text-white">
                <div>
                  Toggle Theme
                </div>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </div>
    </TooltipProvider>
  );
}

