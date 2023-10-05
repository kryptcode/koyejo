import { useState } from 'react'
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter} from 'react-icons/fa'

const Left = () => {
    const [links, setLinks] = useState("")
  return (
    <div className="flex-1 h-full pl-10 pt-24">
          <h2 className="text-5xl text-[#4ee787] font-semibold mb-3 uppercase">
            Koye <br /> Adeyombo
          </h2>
          <h4 className="text-xl text-[#16d298] font-light mb-5">
            Frontend Developer {/*//at QClose*/}
          </h4>
          <h6 className=" pr-32 text-lg font-light mb-6">
          I develop web-based products and digital experiences that prioritize accessibility and inclusivity.
          </h6>

          <div className=" w-72 text-sm space-y-4 mb-12 ">
            <Link href={'#about'} onClick={() => setLinks("ABOUT")} className="flex items-center group space-x-2">
              <div className={`${links === "ABOUT" ? 'w-[55px]' : 'w-[32px]'} group-hover:w-[55px] transition-all duration-300 ease-in-out  bg-[#bbb] h-[2px] `} />
              <span className={` ${links === "ABOUT" && "text-[#16d298]" } group-hover:text-[#16d298] font-medium tracking-wide group-hover:tracking-wider text-lg`}>ABOUT</span>
            </Link>
            <Link href={'#experience'} onClick={() => setLinks("EXP")} className="flex items-center group space-x-2 my-4">
              <div className={`${links === "EXP" ? 'w-[55px]' : 'w-[32px]'} group-hover:w-[55px] transition-all duration-300 ease-in-out  bg-[#bbb] h-[2px] `} />
              <span className={`${links === "EXP" && "text-[#16d298]"} group-hover:text-[#16d298] font-medium tracking-wide group-hover:tracking-wider text-lg`}>EXPERIENCE</span>
            </Link>
            <Link href={'#projects'} onClick={() => setLinks("PRO")} className="flex items-center group space-x-2">
              <div className={`${links === "PRO" ? 'w-[55px]' : 'w-[32px]'} group-hover:w-[55px] transition-all duration-300 ease-in-out  bg-[#bbb] h-[2px] `} />
              <span className={`${links === "PRO" && "text-[#16d298]"} group-hover:text-[#16d298] font-medium tracking-wide group-hover:tracking-wider text-lg`}>PROJECTS</span>
            </Link>
          </div>

          <div className='text-3xl flex space-x-5 my-3'>
                <a href="mailto:adeyombokehd@gmail.com" className='text-[#16d298] hover:scale-110 transition-all duration-300 ease-in-out' target="_blank">
                    <FaEnvelope />
                </a>
                <a href="https://github.com/kryptcode" target='_blank' className='text-[#16d298] hover:scale-110 transition-all duration-300 ease-in-out'>
                    <FaGithub />
                </a>
                {/* <a href="https://github.com/kryptcode" target='_blank' className='text-[#16d298] hover:scale-110 transition-all duration-300 ease-in-out'>
                    <FaLinkedinIn />
                </a>
                <a href="https://github.com/kryptcode" target='_blank' className='text-[#16d298] hover:scale-110 transition-all duration-300 ease-in-out'>
                    <FaTwitter />
                </a> */}
            </div>

        </div>
  )
}

export default Left