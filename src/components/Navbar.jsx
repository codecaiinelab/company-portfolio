import React from 'react';

import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  return (
    <div className='w-screen h-[70px] z-10 bg-zinc-200 fixed'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='font-bold text-[20px]'>Del Consult</h1>
            </div>
        </div>

        <MenuIcon className='w-5'/>
    </div>
  )
}

export default Navbar