import Link from 'next/link'
import React from 'react'

const Experience = () => {
  return (
    <div id="experience" className="pt-16">
        <div className="flex space-x-4 hover:bg-[] p-2  rounded-xl border-[2.5px] border-black border-l-[5px] border-b-[5px] cursor-pointer my-3 mb-7">
              <div className="font-medium flex-1 text-[#16d298]"><span>MAY '23</span> - <span>PRESENT</span> </div>
              <div className='flex-[2.5] ' >
                <h4 className="font-medium mb-2 text-[#16d298]">
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

        <div className="flex space-x-4 hover:bg-[] p-2 rounded-xl border-[2.5px] border-[#16d298] border-l-[5px] border-b-[5px] cursor-pointer my-3 mb-7">
            <div className="font-medium flex-1 text-[#16d298]"><span>MAR '22</span> - <span>OCT '22</span> </div>
            <div className='flex-[2.5] ' >
                <h4 className="font-medium mb-2 text-[#16d298]">
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
            
        <div className="flex space-x-4 hover:bg-[] p-2 rounded-xl border-[2.5px] border-black border-l-[5px] border-b-[5px] cursor-pointer my-3">
            <div className="font-medium flex-1 text-[#16d298]"><span>MAR '21</span> - <span>PRESENT</span> </div>
            <div className='flex-[2.5] ' >
                <h4 className="font-medium mb-2 text-[#16d298]">
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
  )
}

export default Experience