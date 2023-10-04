import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState } from "react";


export default function Home() {
  const [links, setLinks] = useState("")
  return (
    <div className="h-screen w-screen flex ">
        {/* <Navbar /> */}

        <div className="flex-1 h-full pl-10 pt-24">
          <h2 className="text-5xl font-semibold mb-3 uppercase">
            Koye Adeyombo
          </h2>
          <h4 className="text-xl font-light mb-5">
            Frontend Developer {/*//at QClose*/}
          </h4>
          <h6 className=" pr-32 text-lg font-light mb-6">
          I develop web-based products and digital experiences that prioritize accessibility and inclusivity.
          </h6>

          <div>
            <Link href={'#about'} onClick={() => setLinks("ABOUT")} className="flex items-center group space-x-2">
              <div className={`${links === "ABOUT" ? 'w-[55px]' : 'w-[32px]'} group-hover:w-[55px] transition-all duration-300 ease-in-out  bg-black h-[2px] `} />
              <span className="font-medium tracking-wide group-hover:tracking-wider text-lg">ABOUT</span>
            </Link>
            <Link href={'#experience'} onClick={() => setLinks("EXP")} className="flex items-center group space-x-2 my-4">
              <div className={`${links === "EXP" ? 'w-[55px]' : 'w-[32px]'} group-hover:w-[55px] transition-all duration-300 ease-in-out  bg-black h-[2px] `} />
              <span className="font-medium tracking-wide group-hover:tracking-wider text-lg">EXPERIENCE</span>
            </Link>
            <Link href={'#projects'} onClick={() => setLinks("PRO")} className="flex items-center group space-x-2">
              <div className={`${links === "PRO" ? 'w-[55px]' : 'w-[32px]'} group-hover:w-[55px] transition-all duration-300 ease-in-out  bg-black h-[2px] `} />
              <span className="font-medium tracking-wide group-hover:tracking-wider text-lg">PROJECTS</span>
            </Link>
          </div>

        </div>

        <div className="flex-1 overflow-y-scroll h-full pr-10 text-lg font-light">
          <div id="about" className="pt-24"> 
            <p>
            Hello! I'm Koye, a dedicated web developer with a passion for <strong className="font-medium">crafting digital experiences that stand out.</strong>   Whether you're an entrepreneur with a startup idea or an established business looking to enhance your online presence, I'm here to <strong className="font-medium"> transform your vision into reality.</strong>
            </p>

            <p className="my-5 mb-16">
            I embarked on my web development journey with a mission to bring innovation and creativity to the digital world. Over the years, I've had the privilege of working on a diverse range of projects, each contributing to my growth and expertise. From small businesses to large corporations, I've helped clients achieve their online goals.
            </p>
          </div>

          <div id="experience" className="pt-16">
            <div className="flex space-x-4 hover:bg-gray-100 p-2 rounded-xl border-[2.5px] border-black border-l-[5px] border-b-[5px] cursor-pointer my-3 mb-7">
              <div className="font-medium flex-1"><span>MAY '23</span> - <span>PRESENT</span> </div>
              <div className='flex-[2.5] ' >
                <h4 className="font-medium mb-2">
                  Frontend Engineer . QClose
                </h4>
                <div className="text-base">
                  <ul className="">
                    <li className="list-item list-disc">Collaborated with UX/UI designers to translate wireframes and mockups into interactive web interfaces.</li>
                    <li className="list-item list-disc">Implemented cross-browser compatibility and optimized website performance for fast loading times.</li>
                    <li className="list-item list-disc">Utilized frontend frameworks such as React.js to build dynamic and data-driven web applications.</li>
                    <li className="list-item list-disc">Integrated RESTful APIs to fetch and display real-time data, enhancing the overall user experience.</li>
                    <li className="list-item list-disc">Implemented and maintained version control using Git and GitHub, ensuring seamless code collaboration.</li>
                    <li className="list-item list-disc">Worked closely with backend developers to integrate frontend and backend components, ensuring seamless functionality.</li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="flex space-x-4 hover:bg-gray-100 p-2 rounded-xl border-[2.5px] border-black border-l-[5px] border-b-[5px] cursor-pointer my-3">
              <div className="font-medium flex-1"><span>MAR '22</span> - <span>OCT '22</span> </div>
              <div className='flex-[2.5] ' >
                <h4 className="font-medium mb-2">
                  Junior Frontend Developer . Zeta Tech
                </h4>
                <div className="text-base">
                  <ul className="">
                    <li className="list-item list-disc">Assisted in the development of web applications using HTML, CSS, and JavaScript.</li>
                    <li className="list-item list-disc">Contributed to the optimization of website performance and responsiveness.</li>
                    <li className="list-item list-disc">Worked closely with senior developers to troubleshoot and debug code issues.</li>
                    <li className="list-item list-disc">Participated in code reviews and learned coding best practices.</li>
                    <li className="list-item list-disc">Gained proficiency in frontend technologies and improved coding skills.</li>
                  </ul>
                </div>

              </div>
            </div>
            
            <div className="flex space-x-4 hover:bg-gray-100 p-2 rounded-xl border-[2.5px] border-black border-l-[5px] border-b-[5px] cursor-pointer my-3">
              <div className="font-medium flex-1"><span>MAR '21</span> - <span>PRESENT</span> </div>
              <div className='flex-[2.5] ' >
                <h4 className="font-medium mb-2">
                  Frontend Developer . Freelance
                </h4>
                <div className="text-base">
                  <ul className="">
                    <li className="list-item list-disc">Collaborated with clients to understand project requirements and goals.</li>
                    <li className="list-item list-disc">Designed and developed custom websites and web applications from scratch.</li>
                    <li className="list-item list-disc">Implemented responsive designs, ensuring a seamless user experience on all devices.</li>
                    <li className="list-item list-disc">Utilized frontend frameworks (React, Next.js) to build interactive and dynamic user interfaces.</li>
                    <li className="list-item list-disc">Integrated RESTful APIs and third-party services to fetch and display data.</li>
                    <li className="list-item list-disc">Completed projects within budget and deadlines, earning positive client feedback.</li>
                  </ul>
                </div>

              </div>
            </div>

            <div>
              <Link href={'/'}>
                <span>View Full Résumé</span>

              </Link>
            </div>


          </div>
        </div>
    </div>
  )
}
