"use client";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "animate.css";

export default function Home() {
  const [activePage, setActivePage] = useState("home");

  return (
    <>
      <main className="h-screen flex bg-black text-white justify-center items-center relative">
        <div className="w-1/2">
          <div className="h-[60vh] w-full bg-morph p-5">
            <h4 className="font-inter font-medium text-2xl mb-3">Hi, I'm</h4>
            <h2 className="font-grotesk text-6xl font-bold mb-7">Koye</h2>
            <p className="font-medium opacity-70 mb-7">
              A web developer and software engineer passionate about crafting
              elegant solutions with cutting-edge technology. I strive to
              deliver high-quality, scalable, and user-friendly web applications
              that exceed client expectations
            </p>
            <div className="flex flex-wrap items-center justify-center space-x-7">
              {/* <Link href="/experience" className="">Experience</Link> */}
              <div
                onClick={() => setActivePage("experience")}
                className="hover:scale-105 transition-all ease-linear duration-300"
              >
                Experience
              </div>
              <div>Projects</div>
              <div>Stack</div>
              <div>About Me</div>
              <div>Contact</div>
            </div>
          </div>
        </div>

        <div
          className={`${
            activePage === "experience" ? "block" : "hidden"
          } animate__animated animate__slideInUp h-full absolute bg-black text-white z-10 p-16 top-0 left-0 right-0 bottom-0 `}
        >
          <div className="flex justify-between items-center">
          <h2 className="font-grotesk font-semibold text-5xl uppercase mb-7">
            Experience
          </h2>
            <X
              size={46}
              className="cursor-pointer"
              onClick={() => setActivePage("home")}
            />
          </div>

          <div className="h-[75vh] scrollbar-thin scrollbar-thumb-white/40 scrollbar-thumb-rounded scrollbar-track-black px-4 overflow-y-scroll ">
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

        {/* {
          activePage === "experience" && (
            <div className="animate__animated animate__slideInDown h-full absolute bg-black text-white z-10 p-16 top-0 left-0 right-0 bottom-0 bg-full text-8xl ">
              <div className="flex justify-end">
                <X size={46} className="cursor-pointer" onClick={() => setActivePage("home")} />
              </div>
              <div>
                <h2 className="font-grotesk">Experience</h2>
              </div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, illum?
            </div>
          )
        } */}
      </main>
    </>
  );
}
