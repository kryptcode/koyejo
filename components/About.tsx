

const About = () => {
  return (
    <div id="about" className="pt-16 font-medium"> 
        <p>
            Hello! I'm Koye, a dedicated web developer with a passion for <strong className="">crafting digital experiences that stand out.</strong>   Whether you're an entrepreneur with a startup idea or an established business looking to enhance your online presence, I'm here to <strong className=""> transform your vision into reality.</strong>
        </p>

        <p className="my-5 mb-8">
            I embarked on my web development journey with a mission to bring innovation and creativity to the digital world. Over the years, I've had the privilege of working on a diverse range of projects, each contributing to my growth and expertise. From small businesses to large corporations, I've helped clients achieve their online goals.
        </p>

        {/* <div>
          <h5 className="text-2xl mb-3 font-medium">My Backpack</h5>
          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-6">
            <div className={` space-y-1 text-sm`}>
                <h6 className='text-lg font-medium underline'>Frontend</h6>
                <div>HTML</div>
                <div>CSS</div>
                <div>TailwindCSS</div>
                <div>JavaScript & TypeScript</div>
                <div>React & Vite</div>
                <div>Next.js</div>
                <div>Sass</div>
                <div>PHP</div>
            </div>
            <div className={` space-y-1 text-sm md:flex-1`}>
                        <h6 className='text-xl font-medium underline'>Backend</h6>
                        <div>Node.js</div>
                        <div>Firebase</div>
                        <div>Content Management: Sanity & Strapi</div>
                        <div>Prisma</div>
                        <div>MongoDB</div>
                    </div>
          <div className={` space-y-1 text-sm md:flex-1`}>
                    <h6 className='text-xl font-medium underline'>Others</h6>
                    <div>Version control: Git</div>
                    <div>Restful APIs</div>
                    <div>Performance Optimization</div>
                    <div>Thirdweb</div>
                    </div>
          </div>

        </div> */}

        <h5 className="text-2xl mb-3 font-medium">My Skillset</h5>
        <div className="">
          <div className="flex space-x-10 rounded-xl border-[2.5px]  border-black border-l-[5px] border-b-[5px] p-5">
            <h2 className="text-3xl font-semibold flex-1">01 - frontend</h2>
            <div className="grid grid-cols-2 gap-x-5 flex-[3]">
              <div>HTML, CSS & SCSS</div>
              <div>JavaScript & TypeScript</div>
              <div>React & Vite</div>
              <div>Next.js</div>
              <div>styled-components</div>
              <div>TailwindCSS</div>
              <div>State Management: Zustand, Recoil etc</div>
            </div>
          </div>

          <div className="flex space-x-10 my-5 rounded-xl border-[2.5px]  border-black border-l-[5px] border-b-[5px] p-5">
            <h2 className="text-3xl font-semibold flex-1">02 - backend</h2>
            <div className="grid grid-cols-2 gap-x-5 flex-[3] ">
              <div>Node.js</div>
              <div>Firebase</div>
              <div>Content Management: Sanity & Strapi</div>
              <div>Prisma</div>
              <div>MongoDB</div>
            </div>
          </div>

          <div className="flex space-x-10 rounded-xl border-[2.5px]  border-black border-l-[5px] border-b-[5px] p-5">
            <h2 className="text-3xl font-semibold flex-1">03 - other</h2>
            <div className="grid grid-cols-2 gap-x-5 flex-[3] ">
              <div>Version Control: Git</div>
              <div>Restful APIs</div>
              <div>Thirdweb</div>
              <div>Next.js</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About