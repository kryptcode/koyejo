import Typewriter from "typewriter-effect";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className=" min-h-screen py-16 w-[90%] mx-auto font-grotesk ">
        <div className="">
          <h2 className=" text-6xl text-[#d1bfa7] lg:text-[12rem] lg:leading-none font-black mb-10 uppercase">
            Koyejo.
          </h2>

          <div className="text-3xl font-semibold ">
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
        </div>
      </div>
      <div className="group w-[90%] min-h-screen mx-auto font-grotesk">
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
              className="lg:w-1/2"
            />
          </div>
          <div className="flex-1">

          <p className="text-neutral-200 text-lg mb-4 font-medium">
            I'm <b>Koye</b> , a dedicated web developer with a passion for
            crafting digital experiences that stand out. Whether you're an
            entrepreneur with a startup idea or an established business looking
            to enhance your online presence, I'm here to transform your vision
            into reality.
          </p>
          <p className="text-neutral-200 text-lg font-medium">
            I embarked on my web development journey with a mission to bring
            innovation and creativity to the digital world. Over the years, I've
            had the privilege of working on a diverse range of projects, each
            contributing to my growth and expertise.
          </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
