"use client"
import { Archive, Home, MessageCircleIcon, NotebookPen, User, Wrench } from 'lucide-react';
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
          name: "Blog",
          link: "/blog",
          icon: (
            <NotebookPen className="h-4 w-4 text-neutral-500 dark:text-white" />
          ),
        },
        {
          name: "Archives",
          link: "/archives",
          icon: (
            <Archive className="h-4 w-4 text-neutral-500 dark:text-white"  />
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