import React from "react";

const Experience = () => {
  return (
    <div className=" min-h-screen group pb-24 w-[90%] mx-auto font-grotesk ">
      <div className="flex items-center space-x-3  mb-10 ">
        <h3
          className={`text-[#d1bfa7] text-5xl lg:text-7xl font-bold flex-shrink-0`}
        >
          Experience.
        </h3>
        <div
          className={`bg-[#d1bfa7] h-[3px] w-0 group-hover:w-full transition-all ease-linear duration-700`}
        />
      </div>

      <div>
        <div className="max-w-3xl mx-auto">
          <ol className="relative border-s border-gray-700 dark:border-gray-700">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-gray-900 dark:border-gray-900 bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                March 2021 - February 2022
              </time>
              <h3 className="text-xl font-semibold text-white dark:text-white">
                Front-End Developer . Freelance
              </h3>
              <h5 className="text-neutral-600 mb-1.5">
                Full-Time
              </h5>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Collaborated with clients to understand project goals, designed and developed custom websites and web applications using React and Next.js, implemented responsive designs, integrated RESTful APIs, and consistently delivered projects on time and within budget, earning positive client feedback.
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-gray-900 dark:border-gray-900 bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                March 2022 - October 2022
              </time>
              <h3 className="text-xl font-semibold text-white dark:text-white">
                Front-End Developer . Zeta Tech
              </h3>
              <h5 className="text-neutral-600 mb-1.5">
                Contract
              </h5>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Assisted in developing web applications, optimized website performance and responsiveness, collaborated with developers to troubleshoot code issues, and gained proficiency in frontend and backend technologies.
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-gray-900 dark:border-gray-900 bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                May 2023 - March 2024
              </time>
              <h3 className="text-xl font-semibold text-white dark:text-white">
                Software Developer . QClose
              </h3>
              <h5 className="text-neutral-600 mb-1.5">
                Full-Time
              </h5>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Collaborated with UX/UI designers to translate wireframes into interactive web interfaces, implemented cross-browser compatibility and optimized performance, utilized Next.js and Laravel to build dynamic applications, integrated RESTful APIs for real-time data, and maintained version control with Git and GitHub.
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-gray-900 dark:border-gray-900 bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                November 2022 - Present
              </time>
              <h3 className="text-xl font-semibold text-white dark:text-white">
                Full Stack Developer . Freelance
              </h3>
              <h5 className="text-neutral-600 mb-1.5">
                Part-Time
              </h5>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Collaborated with clients to understand project goals, designed and developed custom websites and web applications using React, Framer, and WordPress, implemented responsive designs, integrated RESTful APIs with Express.js and Flask, and consistently delivered projects on time and within budget, earning positive client feedback.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Experience;
