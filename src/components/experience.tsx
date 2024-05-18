import React from 'react'
import "animate.css";
import { useActiveStore } from "@/store/activeStore";
import { X } from "lucide-react";


const Experience = () => {
    const [active, updateActive] = useActiveStore((state) => [state.activeComponent, state.updateActiveComponent])
  return (
    <div
          className={`${
            active === "experience" ? "block" : "hidden"
          } animate__animated animate__slideInUp h-full absolute bg-black text-white z-10 p-5 lg:p-16 top-0 left-0 right-0 bottom-0 `}
        >
          <div className="flex justify-between items-center">
          <h2 className="font-grotesk font-semibold text-4xl lg:text-5xl uppercase mb-7">
            Experience
          </h2>
            <X
              size={46}
              className="cursor-pointer"
              onClick={() => updateActive("home")}
            />
          </div>

          <div className="h-[75vh] scrollbar-thin font-grotesk scrollbar-thumb-white/40 scrollbar-thumb-rounded scrollbar-track-black px-2 lg:px-4 overflow-y-scroll ">
            <div>
              <div
                className={` my-5 flex flex-col md:flex-row gap-10 rounded-xl border-[2.5px]  border-l-[5px] border-b-[5px] p-5 py-7 transition-all bg-morph ease-linear duration-300 group`}
              >
                <div className={` font-medium font-grotesk flex-1 text-xl `}>
                  <span>MAY '23</span> - <span>MAR '24</span>{" "}
                </div>
                <div className="flex-[2.5] ">
                  <h4 className={` text-2xl font-semibold font-grotesk mb-4`}>
                    Software Engineer . QClose
                  </h4>
                  <div className="text-small opacity-70">
                    <ul className="list-disc pl-5 space-y-2">
                      <li className="">
                        Collaborated with UX/UI designers to translate
                        wireframes and mockups into interactive web interfaces.
                      </li>
                      <li className="">
                        Implemented cross-browser compatibility and optimized
                        website performance for fast loading times.
                      </li>
                      <li className="">
                        Utilized frameworks such as Nextjs and Laravel to build
                        dynamic and data-driven web applications.
                      </li>
                      <li className="">
                        Integrated RESTful APIs to fetch and display real-time
                        data, enhancing the overall user experience.
                      </li>
                      <li className="">
                        Implemented and maintained version control using Git and
                        GitHub, ensuring seamless code collaboration.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className={` my-5 flex flex-col md:flex-row gap-10 rounded-xl border-[2.5px]  border-l-[5px] border-b-[5px] bg-morph p-5 py-7 transition-all ease-linear duration-300 group`}
              >
                <div className={` font-medium font-grotesk flex-1 text-xl `}>
                  <span>MAR '22</span> - <span>OCT '22</span>{" "}
                </div>
                <div className="flex-[2.5] ">
                  <h4 className={` text-2xl font-grotesk font-semibold mb-4`}>
                    Frontend Developer . Zeta Tech
                  </h4>
                  <div className="text-small opacity-80">
                    <ul className="list-disc pl-5 space-y-2">
                      <li className="">
                        Assisted in the development of web applications.
                      </li>
                      <li className="">
                        Contributed to the optimization of website performance
                        and responsiveness.
                      </li>
                      <li className="">
                        Worked closely with other developers to troubleshoot and
                        debug code issues.
                      </li>
                      <li className="">
                        Gained proficiency in frontend technologies and improved
                        coding skills.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className={` my-5 flex flex-col md:flex-row gap-10 rounded-xl border-[2.5px]  border-l-[5px] border-b-[5px] p-5 py-7 bg-morph transition-all ease-linear duration-300 group`}
              >
                <div className={` font-medium font-grotesk flex-1 text-xl `}>
                  <span>MAR '21</span> - <span>PRESENT</span>{" "}
                </div>
                <div className="flex-[2.5] ">
                  <h4 className={` text-2xl font-grotesj font-semibold mb-4`}>
                    Web Developer . Freelance
                  </h4>
                  <div className="text-small opacity-80">
                    <ul className="list-disc pl-5 space-y-2">
                      <li className="">
                        Collaborated with clients to understand project
                        requirements and goals.
                      </li>
                      <li className="">
                        Designed and developed custom websites and web
                        applications from scratch.
                      </li>
                      <li className="">
                        Implemented responsive designs, ensuring a seamless user
                        experience on all devices.
                      </li>
                      <li className="">
                        Utilized frontend frameworks (React, Next.js) to build
                        interactive and dynamic user interfaces.
                      </li>
                      <li className="">
                        Integrated RESTful APIs and third-party services to
                        fetch and display data.
                      </li>
                      <li className="">
                        Completed projects within budget and deadlines, earning
                        positive client feedback.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
  )
}

export default Experience