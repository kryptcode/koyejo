"use client"
import { Home, MessageCircleIcon, User, Wrench } from 'lucide-react';
import React from 'react'
import { FloatingNav } from '../ui/floating-navbar';

const Navbar = () => {
    const navItems = [
        // {
        //   name: "Home",
        //   link: "/",
        //   icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
        // },
        {
          name: "About",
          link: "#about",
          icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "Projects",
          link: "#projects",
          icon: (
            <MessageCircleIcon className="h-4 w-4 text-neutral-500 dark:text-white" />
          ),
        },
        {
          name: "Stack",
          link: "#stack",
          icon: (
            <Wrench className="h-4 w-4 text-neutral-500 dark:text-white" />
          ),
        },
      ];
  return (
    <>
        <FloatingNav navItems={navItems} />
    </>
  )
}

export default Navbar