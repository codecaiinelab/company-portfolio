import React, {useState} from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const handleClose =()=> setNav(!nav)

  return (
       <div className='w-screen h-[70px] z-10 bg-gray-200 border-b border-white-500 fixed'>
          <div className='px-2 flex justify-between items-center w-full h-full'>
             <div className='flex items-center'>
                <h1 className='font-bold text-[20px]'>Del Consult</h1>
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
             </div>
            <div className='hidden md:flex pr-4'>
              <button className='px-8 py-3'>Quotation</button>
            </div>
            <div className='md:hidden mr-4' onClick={handleClick}>
                {!nav ? <Bars3Icon className='w-5' />: <XMarkIcon className='w-5' />}
            </div>
         </div>


         <ul className={!nav ? 'hidden' : 'absolute bg-gray-200 w-full px-8'}>
          <li className='border-b-2 border-gray-300 w-full'>Home</li>
          <li className='border-b-2 border-gray-300 w-full'>About</li>
          <li className='border-b-2 border-gray-300 w-full'>Services</li>
          <li className='border-b-2 border-gray-300 w-full'>Projects</li>
          <li className='border-b-2 border-gray-300 w-full'>Contact</li>

          <div className='flex flex-col my-4'>
              <button className='px-8 py-3'>Quotation</button>
          </div>
        </ul>
      </div>
  )
}

export default Navbar