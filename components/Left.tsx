import { useState } from 'react'
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter} from 'react-icons/fa'

const Left = () => {
    const [links, setLinks] = useState("")
  return (
    <div className="flex-1 h-full pl-10 pt-16">
          <h2 className="text-5xl lg:text-7xl text-black font-black mb-3 uppercase">
            Koye <br /> Adeyombo
          </h2>
          <h4 className="text-xl font-medium mb-5">
            Fullstack Developer {/*//at QClose*/}
          </h4>
          <h6 className=" pr-16 text-lg font-light mb-6">
          I develop web-based products and digital experiences that prioritize accessibility and inclusivity.
          </h6>

          <div className=" w-72 text-sm space-y-4 mb-12 ">
            <Link href={'#about'} onClick={() => setLinks("ABOUT")} className="flex items-center group space-x-2">
              <div className={`${links === "ABOUT" ? 'w-[55px]' : 'w-[32px]'} group-hover:w-[55px] transition-all duration-300 ease-in-out  bg-[#000] h-[2px] `} />
              <span className={` ${links === "ABOUT" && "" } font-medium tracking-wide group-hover:tracking-wider text-lg`}>ABOUT</span>
            </Link>
            <Link href={'#experience'} onClick={() => setLinks("EXP")} className="flex items-center group space-x-2 my-4">
              <div className={`${links === "EXP" ? 'w-[55px]' : 'w-[32px]'} group-hover:w-[55px] transition-all duration-300 ease-in-out  bg-[#000] h-[2px] `} />
              <span className={`${links === "EXP" && ""} font-medium tracking-wide group-hover:tracking-wider text-lg`}>EXPERIENCE</span>
            </Link>
            <Link href={'#projects'} onClick={() => setLinks("PRO")} className="flex items-center group space-x-2">
              <div className={`${links === "PRO" ? 'w-[55px]' : 'w-[32px]'} group-hover:w-[55px] transition-all duration-300 ease-in-out  bg-[#000] h-[2px] `} />
              <span className={`${links === "PRO" && ""} font-medium tracking-wide group-hover:tracking-wider text-lg`}>PROJECTS</span>
            </Link>
          </div>

          <div className='text-3xl flex space-x-5 my-3'>
                <a href="mailto:adeyombokehd@gmail.com" className='text-red-500 hover:scale-110 transition-all duration-300 ease-in-out' target="_blank">
                    <FaEnvelope />
                </a>
                <a href="https://github.com/kryptcode" target='_blank' className=' hover:scale-110 transition-all duration-300 ease-in-out'>
                    <FaGithub />
                </a>
                {/* <a href="https://github.com/kryptcode" target='_blank' className='text-[#16d298] hover:scale-110 transition-all duration-300 ease-in-out'>
                    <FaLinkedinIn />
                </a>
                <a href="https://github.com/kryptcode" target='_blank' className='text-[#16d298] hover:scale-110 transition-all duration-300 ease-in-out'>
                    <FaTwitter />
                </a> */}
            </div>

            <div className='my-10'>
            <Link href={'/'} className='border-[2.4px] font-light p-1.5 px-3 border-black border-l-[4.2px] border-b-[4.2px] hover:bg-black/10 rounded-md'>
                <span>View Résumé</span>
            </Link>
            </div>

        </div>
  )
}

export default Left