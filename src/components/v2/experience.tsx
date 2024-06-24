import React from "react";
import BoxReveal from "@/components/magicui/box-reveal";

const Experience = () => {
  return (
    <div className=" min-h-screen pb-24 w-[90%] mx-auto font-grotesk ">
      <div className="flex items-center space-x-3  mb-5 ">
        <h3
          className={`text-[#d1bfa7] text-5xl lg:text-9xl font-bold flex-shrink-0`}
        >
          Experience.
        </h3>
      </div>

      <div>
        <div
          className={`border-neutral-500 flex flex-col md:flex-row gap-10 rounded-xl border-[2.5px]  border-l-[5px] border-b-[5px] p-3 py-6 transition-all ease-linear duration-300 group`}
        >
          <div className={`text-neutral-300 font-medium flex-1 text-xl `}>
            <span>March 2021 - February 2022</span>
          </div>
          <div className="flex-[2.5] ">
            <BoxReveal boxColor={"#222"} duration={1.1}>
              <h4 className={`text-[#d1bfa7]  text-3xl font-semibold mb-4`}>
                Front-End Developer . Freelance
              </h4>
            </BoxReveal>
            <BoxReveal boxColor={"#222"} duration={1.1}>
              <div className="text-xl font-medium text-neutral-500">
                Collaborated with clients to understand project goals, designed
                and developed custom websites and web applications using React
                and Next.js, implemented responsive designs, integrated RESTful
                APIs, and consistently delivered projects on time and within
                budget, earning positive client feedback.
              </div>
            </BoxReveal>
          </div>
        </div>

        <div className="my-10"></div>
        <div
          className={`border-neutral-500 flex flex-col md:flex-row gap-10 rounded-xl border-[2.5px]  border-l-[5px] border-b-[5px] p-3 py-6 transition-all ease-linear duration-300 group`}
        >
          <div className={`text-neutral-300 font-medium flex-1 text-xl `}>
            <span>March 2022 - October 2022</span>
          </div>
          <div className="flex-[2.5] ">
            <BoxReveal boxColor={"#222"} duration={1.1}>
              <h4 className={`text-[#d1bfa7]  text-3xl font-semibold mb-4`}>
                Front-End Developer . Zeta Tech
              </h4>
            </BoxReveal>
            <BoxReveal boxColor={"#222"} duration={1.1}>
              <div className="text-xl font-medium text-neutral-500">
                Assisted in developing web applications, optimized website
                performance and responsiveness, collaborated with developers to
                troubleshoot code issues, and gained proficiency in frontend and
                backend technologies.
              </div>
            </BoxReveal>
          </div>
        </div>

        <div className="my-10"></div>

        <div
          className={`border-neutral-500 flex flex-col md:flex-row gap-10 rounded-xl border-[2.5px]  border-l-[5px] border-b-[5px] p-3 py-6 transition-all ease-linear duration-300 group`}
        >
          <div className={`text-neutral-300 font-medium flex-1 text-xl `}>
            <span>May 2023 - March 2024</span>
          </div>
          <div className="flex-[2.5] ">
            <BoxReveal boxColor={"#222"} duration={1.1}>
              <h4 className={`text-[#d1bfa7]  text-3xl font-semibold mb-4`}>
                Software Developer . QClose
              </h4>
            </BoxReveal>
            <BoxReveal boxColor={"#222"} duration={1.1}>
              <div className="text-xl font-medium text-neutral-500">
                Collaborated with UX/UI designers to translate wireframes into
                interactive web interfaces, implemented cross-browser
                compatibility and optimized performance, utilized Next.js and
                Laravel to build dynamic applications, integrated RESTful APIs
                for real-time data, and maintained version control with Git and
                GitHub.
              </div>
            </BoxReveal>
          </div>
        </div>

        <div className="my-10"></div>

        <div
          className={`border-neutral-500 flex flex-col md:flex-row gap-10 rounded-xl border-[2.5px]  border-l-[5px] border-b-[5px] p-3 py-6 transition-all ease-linear duration-300 group`}
        >
          <div className={`text-neutral-300 font-medium flex-1 text-xl `}>
            <span>November 2022 - Present</span>
          </div>
          <div className="flex-[2.5] ">
            <BoxReveal boxColor={"#222"} duration={1.1}>
              <h4 className={`text-[#d1bfa7]  text-3xl font-semibold mb-4`}>
                Full Stack Developer . Freelance
              </h4>
            </BoxReveal>
            <BoxReveal boxColor={"#222"} duration={1.1}>
              <div className="text-xl font-medium text-neutral-500">
                Collaborated with clients to understand project goals, designed
                and developed custom websites and web applications using React,
                Framer, and WordPress, implemented responsive designs,
                integrated RESTful APIs with Express.js, and consistently
                delivered projects on time and within budget, earning positive
                client feedback.
              </div>
            </BoxReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
