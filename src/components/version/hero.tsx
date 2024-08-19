"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from 'lucide-react'

export const Hero = () => {
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
    <div className='w-[90%] min-h-screen mx-auto py-2 '>

        <div className="py-3 flex justify-between items-center">
          <Link href="/" className="uppercase font-manrope font-medium tracking-wide ">
            Adekoyejo Adeyombo
          </Link>

          <div>
            <Button onClick={toggleDarkMode}>
              { theme !== "dark" ? <MoonIcon size={18} /> : <SunIcon size={18} />  }
            </Button>
          </div>
        </div>

        <div className='font-bebas text-9xl lg:text-[13rem] leading-none font-black'>
          <div className='flex gap-3 items-end text-right'>
            <div className='flex-[2] '>
              <div className='flex'>
                <span className='hover-text'>F</span>
                <span className='hover-text'>U</span>
                <span className='hover-text'>L</span>
                <span className='hover-text'>L</span>
              </div>
              <div className='flex'>
              <span className='hover-text'>S</span>
              <span className='hover-text'>T</span>
              <span className='hover-text'>A</span>
              <span className='hover-text'>C</span>
              <span className='hover-text'>K</span>
              </div>
            </div>

            <div className='text-lg font-manrope font-light hidden lg:block flex-1 pt-6 dark:text-[#ccc]  '>
              <span className='text-about pr-2 '>ABOUT </span> <span>I&apos;m Koye, a developer with a passion for developing and implementing experiences that standout.</span>
              <span className=''> Available for freelance projects and full-time positions.</span>
            </div>
          </div>
          <div>
            <div className='flex text-[#aaa] flex-wrap '>
            <span className='reverse-hover'>D</span>
            <span className='reverse-hover'>E</span>
            <span className='reverse-hover'>V</span>
            <span className='reverse-hover'>E</span>
            <span className='reverse-hover'>L</span>
            <span className='reverse-hover'>O</span>
            <span className='reverse-hover'>P</span>
            <span className='reverse-hover'>E</span>
            <span className='reverse-hover'>R</span>
            </div>
          </div>


          <div className="flex justify-end ">
            <div className='text-lg font-manrope font-light lg:hidden text-right  pt-6 dark:text-[#ccc]  w-[70%]  '>
              <span className='text-about pr-2 font-medium '>ABOUT </span> <span>I&apos;m Koye, a developer with a passion for developing and implementing experiences that standout.</span>
              <span className=''> Available for freelance projects and full-time positions.</span>
            </div>
          </div>

        </div>
    </div>
  )
}
