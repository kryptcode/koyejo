import React from 'react'

export const Exp = () => {
  return (
    <div className='mt-8 pt-8  border-t border-about/50'>
        <div className="py-10 w-[90%] mx-auto">
            <div className="flex items-center gap-10">
                <h2 className="text-3xl lg:text-8xl font-bold text-[#aaa] font-ham">Work <br /> Experience</h2>
                <div className="h-[4px] rounded-2xl bg-[#aaa] w-full transition-all ease-linear duration-500  " />
            </div>

            <div className="hover-orange py-2 my-2 border-b border-about/30">
                <h6 className='text-xl font-manrope mb-1.5'>March 2021 - February 2022</h6>
                <h2 className='text-4xl lg:text-7xl font-bebas font-black '>Front-End Developer . Freelance</h2>
            </div>

            <div className="hover-orange py-2 my-2 border-b border-about/30">
                <h6 className='text-xl font-manrope mb-1.5'>March 2022 - October 2022</h6>
                <h2 className='text-4xl lg:text-7xl font-bebas font-black '>Front-End Developer . Zeta Tech</h2>
            </div>

            <div className="hover-orange py-2 my-2 border-b border-about/30">
                <h6 className='text-xl font-manrope mb-1.5'>May 2023 - March 2024</h6>
                <h2 className='text-4xl lg:text-7xl font-bebas font-black '>Software Developer . QClose</h2>
            </div>

            <div className="hover-orange py-2 my-2 border-b border-about/30">
                <h6 className='text-xl font-manrope mb-1.5'>November 2022 - Present</h6>
                <h2 className='text-4xl lg:text-7xl font-bebas font-black '>Full-Stack Developer . Freelance</h2>
            </div>

            {/* <div className="hover-orange py-2 my-2 border-b border-about/30">
                <h6 className='text-xl font-manrope mb-1.5'>August 2024 - Present</h6>
                <h2 className='text-4xl lg:text-7xl font-bebas font-black '>Full-Stack Developer . Atop Web Tech</h2>
            </div> */}
        </div>
    </div>
  )
}
