import data from "../data.json"

const Projects = () => {
  return (
    <div>
        <h5>Projects</h5>

        <div className="w-full carousel h-[40vh] rounded-box">
            {
                data.map((project, index) => (
                    <div key={index} className="carousel-item h-full flex-col">
                        <div>
                            <img className="p-10" src={project.img} alt="" />
                        </div>

                        <div>
                            <h6>{project.name}</h6>
                        </div>
                    </div>
                ))
            }
            <div>

            </div>
        </div>
    </div>
  )
}

export default Projects