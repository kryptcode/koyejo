import Link from 'next/link'
import React from 'react'
import AnimatedText from './animated-text'

export const Contact = () => {
  return (
    <div className='pt-8 pb-24'>
        <AnimatedText>
            <div className="h-[2px] bg-about/50 mb-8" />
        </AnimatedText>
        <div className="py-10 w-[90%] mx-auto">
            <div className="flex items-center gap-10">
                <h2 className="text-3xl lg:text-8xl font-bold text-[#555] dark:text-[#aaa] font-ham">Contact</h2>
                <div className="h-[4px] rounded-2xl bg-[#aaa] w-full transition-all ease-linear duration-500  " />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 pt-12">
                <Link href="https://github.com/kryptcode" target='_blank' rel='noreferrer' className="p-3 text-center border dark:border-[#ccc] dark:hover:bg-[#ccc] dark:hover:text-bg text-white bg-bg border-bg transition-all ease-linear duration-300 hover:tracking-widest font-semibold font-manrope ">GitHub</Link>

                <Link href="mailto:adeyombokehd@gmail.com" target='_blank' rel='noreferrer' className="p-3 text-center border dark:border-[#ccc] dark:hover:bg-[#ccc] dark:hover:text-bg text-white bg-bg border-bg transition-all ease-linear duration-300 hover:tracking-widest font-semibold font-manrope ">Email</Link>

                <Link href="https://read.cv/koyejo" target='_blank' rel='noreferrer' className="p-3 text-center border dark:border-[#ccc] dark:hover:bg-[#ccc] dark:hover:text-bg text-white bg-bg border-bg transition-all ease-linear duration-300 hover:tracking-widest font-semibold font-manrope ">Read.CV</Link>

                <Link href="https://twitter.com/koye_vi" target='_blank' rel='noreferrer' className="p-3 text-center border dark:border-[#ccc] dark:hover:bg-[#ccc] dark:hover:text-bg text-white bg-bg border-bg transition-all ease-linear duration-300 hover:tracking-widest font-semibold font-manrope ">Twitter</Link>
            </div>
        </div>
    </div>
  )
}
