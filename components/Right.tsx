import About from './About'
import Experience from './Experience'
import Projects from './Projects'

const Right = () => {
  return (
    <div className="flex-1 overflow-y-scroll h-full md:pr-10 w-[90%] md:w-full mx-auto md:mx-0 text-lg font-light">
        <About />
        <Experience />
        <Projects />
    </div>
  )
}

export default Right