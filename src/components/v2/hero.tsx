import Typewriter from "typewriter-effect";
import React from "react";
import Link from "next/link";
import { Github, Mail, ScrollText, Twitter } from "lucide-react";
import BoxReveal from "../magicui/box-reveal";

const Hero = () => {
  return (
    <>
      <div className=" min-h-[90vh] lg:min-h-screen  flex flex-col justify-end py-16 pb-24 group w-[90%] mx-auto font-grotesk ">
        <div className="  mb-5  ">
          <BoxReveal boxColor={"#222"} duration={0.5}>
            <h3
              className={`text-[#d1bfa7] text-7xl lg:text-9xl mb-2 font-bold flex-shrink-0`}
            >
              Koyejo.
            </h3>
          </BoxReveal>
          <BoxReveal boxColor={"#222"} duration={0.5}>
            <h6 className="uppercase text-2xl mt-3 font-medium text-gray-300">
              Software Developer
            </h6>
          </BoxReveal>
        </div>
        <div>
          {/* <div className="text-3xl font-semibold text-neutral-400 ">
            <Typewriter
              options={{
                strings: [
                  "Front-End Developer",
                  "Full-Stack Developer",
                  "React Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div> */}
          <BoxReveal boxColor={"#222"} duration={1}>
            <div className="flex lg:items-center flex-wrap gap-3 mt-2">
              <Link
                href="https://twitter.com/koye_vi"
                target="_blank"
                className="flex space-x-2 hover:bg-[#d1bfa7] hover:text-black border border-[#d1bfa7] font-medium p-1.5 px-3  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   text-[#d1bfa7] transition-all ease-linear duration-500"
              >
                <Twitter />
                <div className="">@koye_vi</div>
              </Link>
              <Link
                href="mailto:adeyombokehd@gmail.com"
                target="_blank"
                className="flex space-x-2 hover:bg-[#d1bfa7] hover:text-black border border-[#d1bfa7] font-medium p-1.5 px-3  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   text-[#d1bfa7] transition-all ease-in-out duration-500"
              >
                <Mail />
                <div className="">adeyombokehd@gmail.com</div>
              </Link>
              <Link
                href="https://github.com/kryptcode"
                target="_blank"
                className="flex space-x-2 hover:bg-[#d1bfa7] hover:text-black border border-[#d1bfa7] font-medium p-1.5 px-3  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   text-[#d1bfa7] transition-all ease-linear duration-500"
              >
                <Github />
                <div className=" font-grotesk">@kryptcode</div>
              </Link>
              <Link
                href="https://read.cv/koyejo"
                target="_blank"
                className="flex space-x-2 hover:bg-[#d1bfa7] hover:text-black border border-[#d1bfa7] font-medium p-1.5 px-3  border-l-[3.7px] border-b-[3.7px] rounded-md py-1.5   text-[#d1bfa7] transition-all ease-linear duration-500"
              >
                <ScrollText />
                <div className="">read.cv/koyejo</div>
              </Link>
            </div>
          </BoxReveal>
        </div>
        {/* <div className="flex flex-col items-center text-center w-full">
          <h2 className=" text-6xl text-[#d1bfa7] lg:text-[12rem] lg:leading-none font-black mb-4 ">
            Koyejo.
          </h2>

          <div className="text-3xl font-semibold text-neutral-400 ">
            <Typewriter
              options={{
                strings: [
                  "Front End Developer",
                  "Full Stack Developer",
                  "React Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <div className="flex items-center justify-center space-x-5 mt-6">
            <Link
              href="https://twitter.com/koye_vi"
              target="_blank"
              className="flex space-x-2 group p-3 py-1.5 rounded-lg hover:bg-[#d1bfa7] hover:text-black transition-all ease-linear duration-500"
            >
              <Twitter />
              <div className="hidden group-hover:inline-block transition-all ease-linear duration-500 font-grotesk">
                @koye_vi
              </div>
            </Link>
            <Link
              href="mailto:adeyombokehd@gmail.com"
              target="_blank"
              className="flex space-x-2 group p-3 py-1.5 rounded-lg hover:bg-[#d1bfa7] hover:text-black transition-all ease-in-out duration-500"
            >
              <Mail />
              <div className="hidden group-hover:inline-block transition-all ease-in-out duration-500 font-grotesk">
                adeyombokehd@gmail.com
              </div>
            </Link>
            <Link
              href="https://github.com/kryptcode"
              target="_blank"
              className="flex space-x-2 group p-3 py-1.5 rounded-lg hover:bg-[#d1bfa7] hover:text-black transition-all ease-linear duration-500"
            >
              <Github />
              <div className="hidden group-hover:inline-block transition-all ease-linear duration-500 font-grotesk">
                @kryptcode
              </div>
            </Link>
            <Link
              href="https://read.cv/koyejo"
              target="_blank"
              className="flex space-x-2 group p-3 py-1.5 rounded-lg hover:bg-[#d1bfa7] hover:text-black transition-all ease-linear duration-500"
            >
              <ScrollText />
              <div className="hidden group-hover:inline-block transition-all ease-linear duration-500 font-grotesk">
                read.cv/koyejo
              </div>
            </Link>
          </div>
        </div> */}
      </div>

      {/* <div className="group w-[90%] min-h-screen pb-24 mx-auto font-grotesk">
        <div className="flex items-center space-x-3  mb-16 ">
          <h3
            className={`text-[#d1bfa7] text-5xl lg:text-7xl font-bold flex-shrink-0`}
          >
            About Me.
          </h3>
          <div
            className={`bg-[#d1bfa7] h-[3px] w-0 group-hover:w-full transition-all ease-linear duration-700`}
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-16">
          <div className="flex-1 flex justify-center items-center">
            <img
              src="https://i.ibb.co/GtYwVwj/astronaut-svgrepo-com.png"
              alt="astronaut"
              className="w-1/3 lg:w-1/2"
            />
          </div>
          <div className="flex-[1.5] ">
            <p className="text-neutral-200 text-lg mb-4 font-medium">
              I'm <b className="text-[#d1bfa7] ">Koye</b> , a dedicated web developer with a passion for
              crafting digital experiences that stand out. Whether you're an
              entrepreneur with a startup idea or an established business
              looking to enhance your online presence, I'm here to transform
              your vision into reality.
            </p>
            <p className="text-neutral-200 text-lg font-medium">
              I embarked on my web development journey with a mission to bring
              innovation and creativity to the digital world. Over the years,
              I've had the privilege of working on a diverse range of projects,
              each contributing to my growth and expertise.
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
};

function ReadSvg() {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>Read.cv</title>
      <path d="M20.8315 3.36707L8.66861 0.10804C6.98928 -0.34192 5.26312 0.65467 4.81314 2.334L0.94304 16.7773C0.49306 18.4568 1.48966 20.1829 3.16899 20.6328L15.3319 23.892C17.0112 24.3419 18.7373 23.3453 19.1874 21.666L23.0574 7.22254C23.5073 5.54321 22.5108 3.81705 20.8315 3.36707ZM6.33349 2.74138C6.55849 1.90171 7.42156 1.40341 8.26123 1.62841L20.4241 4.88744C21.2637 5.11242 21.762 5.9755 21.537 6.81516L17.6669 21.2586C17.4421 22.0983 16.5789 22.5966 15.7393 22.3715L3.57639 19.1125C2.73671 18.8875 2.23842 18.0245 2.4634 17.1849L6.33349 2.74138ZM8.9669 5.07654C8.54705 4.96404 8.11552 5.2132 8.00302 5.63302C7.89054 6.05285 8.13968 6.4844 8.55952 6.59689L17.6817 9.04116C18.1015 9.15366 18.5331 8.90451 18.6455 8.48468C18.7581 8.06483 18.5089 7.6333 18.0891 7.52081L8.9669 5.07654ZM6.98458 9.43392C7.09708 9.01409 7.52862 8.76493 7.94844 8.87743L17.0706 11.3217C17.4904 11.4342 17.7395 11.8657 17.6271 12.2856C17.5146 12.7054 17.0831 12.9546 16.6632 12.8421L7.54107 10.3978C7.12124 10.2853 6.87208 9.85375 6.98458 9.43392ZM6.93 12.6783C6.51017 12.5658 6.07862 12.815 5.96614 13.2348C5.85364 13.6546 6.1028 14.0861 6.52263 14.1987L11.8439 15.6246C12.2637 15.737 12.6952 15.4879 12.8077 15.0679C12.9202 14.6481 12.6711 14.2167 12.2513 14.1041L6.93 12.6783Z" />
    </svg>
  );
}

export default Hero;
