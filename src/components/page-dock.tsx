import React from "react";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { BeakerIcon, Github, Home, HomeIcon, Mail, TwitterIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function PageDock() {
  return (
    <TooltipProvider>
      <div className="relative">
        <Dock direction="middle" className="fixed bottom-[50px] rounded-[3rem] left-1/2 -translate-x-1/2">
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={"/"}>
                <Home size={18} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/archives">
                <BeakerIcon size={18} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Koye&apos;s Lab</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <Separator orientation="vertical" className="h-full" />
          <DockIcon>
          <Tooltip>
              <TooltipTrigger asChild>
                <Link href="https://github.com/kryptcode" target="_blank">
                <Github size={18} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Github</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <DockIcon>
          <Tooltip>
              <TooltipTrigger asChild>
                <Link href={'https://twitter.com/koye_vi'} target="_blank">
                <TwitterIcon size={18} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Twitter</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="mailto:adeyombokehd@gmail.com">
                <Mail size={18} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Mail</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="https://read.cv/koyejo" target="_blank" className="text-sm">CV</Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Read.CV</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </div>
    </TooltipProvider>
  );
}

