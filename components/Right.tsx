import About from './About'
import Experience from './Experience'

const Right = () => {
  return (
    <div className="flex-1 overflow-y-scroll h-full pr-10 text-lg font-light">
        <About />
        <Experience />
    </div>
  )
}

export default Right