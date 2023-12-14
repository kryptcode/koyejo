import Link from "next/link"
import data from "../data.json"

const Projects = () => {
  return (
    <div>
        <h5 className="mb-6 text-2xl font-medium mt-16" id="projects">Projects</h5>

        <div className="w-full carousel carousel-vertical carousel-center h-[62vh] mb-16 p-2 rounded-xl border-[2.5px]  border-black border-l-[5px] border-b-[5px]">
            {
                data.map((project, index) => (
                    <div key={index} className="carousel-item h-full my-2 flex-col cursor-all-scroll   ">
                        <div className="h-[40vh] w-full overflow-hidden p-2">
                            <img className="h-full w-full object-contain rounded-xl" src={project.img} alt="" />
                        </div>

                        <div className="px-12 pt-3">
                            <h6 className="text-lg font-medium mb-3">{project.name}</h6>

                            <div className="flex flex-col space-y-1.5 lg:space-y-0 lg:flex-row lg:space-x-5 mb-4">
                                {
                                    project.techs.map((item) => <span className="border-[2.4px] font-light p-1.5 px-3 border-black border-l-[4.2px] border-b-[4.2px] rounded-md text-sm" key={item}>{item}</span>)
                                }
                            </div>

                            <div className="my-2 h-[1px] bg-[#111] w-full " />

                            <div className='flex space-x-3 items-center'>
                                <Link href={project.code_url} className={`${project.code_url.length < 1 && 'hidden'} flex space-x-4 items-center text-sm font-medium border-[2.4px] p-1.5 px-3 border-black border-l-[4.2px] border-b-[4.2px] hover:bg-black/10 rounded-md`} target="_blank">
                                    <Arrow />
                                    <span>
                                    Code Url
                                    </span>
                                </Link>

                                <Link href={project.live_url} className="flex space-x-4 items-center text-sm font-medium border-[2.4px] p-1.5 px-3 border-black border-l-[4.2px] border-b-[4.2px] hover:bg-black/10 rounded-md" target="_blank">
                                    <Arrow />
                                    <span>
                                    Live Demo
                                    </span>
                                </Link>
                            </div>

                        </div>
                    </div>
                ))
            }
            {/* <div className="carousel-item h-full my-2 flex justify-center items-center flex-col">
                <h6>Vicar</h6>
                <p>Coming Soon!</p>
            </div> */}
        </div>
        <div className="flex justify-end">
            <Link href={''} className="underline font-medium text-lg text-blue-700">
            See all
            </Link>
        </div>
    </div>
  )
}

export default Projects

const Arrow = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  )
}