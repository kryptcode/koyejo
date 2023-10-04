import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='w-full sticky z-30 top-0 left-0 right-0 h-[12vh] shadow-md bg-white border-b-[2.5px] border-black '>
        <div className='w-[90%] mx-auto flex justify-between text-lg items-center h-full  '>
            <div className='text-3xl font-black'>
                KA.
            </div>

            <div className='flex space-x-6 font-medium'>
                <Link href={'#'} className='hover:text-[#f04d39]'>
                    About
                </Link>
                <Link href={'#'} className='hover:text-[#f04d39]'>
                    Work
                </Link>
            </div>

            <label className='swap swap-rotate md:hidden'>
                <input type="checkbox" name="" id="" />

                <div className="swap-off fill-current text-xl">
                    <GiHamburgerMenu />
                </div>
                <div className="swap-on fill-current text-2xl">
                    <FaTimes />
                </div>
            </label>
        </div>
    </div>
  )
}

export default Navbar