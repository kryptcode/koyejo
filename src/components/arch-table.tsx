import { useArchiveStore } from '@/store/activeStore';
import React from 'react'
import IconCloud from './magicui/icon-cloud';
import { slugs } from '@/contants/projects';

export const ArchTable = () => {
    const [folder, setFolder] = useArchiveStore((state: any) => [
        state.value,
        state.setValue,
      ]);
  return (
    <>
    <div className='p-3'>
        <h6 className="underline cursor-pointer text-lg text-black dark:text-white mb-4" onClick={() => setFolder('/')}>
        ../archive
        </h6>
        <h5 className="text-4xl font-medium mb-8 text-[#000] dark:text-goldexperience">
        My Tech Stack
        </h5>
        <div>
            <div className="w-full">
                <div className="relative flex h-full mx-auto max-w-[45rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-4 ">
                      <IconCloud iconSlugs={slugs} />
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
            <div>
                <h4 className="text-2xl mb-3 font-semibold dark:text-white">Languages</h4>
                <div className=" font-medium grid gap-1.5 text-black/80 dark:text-[#ddd] text-lg">
                      <div>TypeScript</div>
                      <div>JavaScript</div>
                      <div>Python</div>
                      <div>PHP</div>
                </div>
            </div>
                  <div>
                    <h4 className="text-2xl mb-3 font-semibold dark:text-white">Front End</h4>
                    <div className=" font-medium grid gap-1.5 text-black/80 dark:text-[#ddd] text-lg">
                      <div>React & Next</div>
                      <div>TailwindCSS</div>
                      <div>HTML & CSS</div>
                      <div>Vite</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl mb-3 font-semibold dark:text-white">Back End</h4>
                    <div className=" font-medium grid gap-1.5 text-black/80 dark:text-[#ddd] text-lg">
                      <div>Node.js</div>
                      <div>Express.js</div>
                      <div>Laravel</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl mb-3 font-semibold dark:text-white">Databases</h4>
                    <div className=" font-medium grid gap-1.5 text-black/80 dark:text-[#ddd] text-lg">
                      <div>Prisma</div>
                      <div>MongoDB</div>
                      <div>SQL</div>
                      <div>Firebase</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl mb-3 font-semibold dark:text-white">Others</h4>
                    <div className=" font-medium grid gap-1.5 text-black/80 dark:text-[#ddd] text-lg">
                      <div>Framer</div>
                      <div>Git & GitHub</div>
                      <div>Thirdweb</div>
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}
