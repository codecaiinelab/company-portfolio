import React from 'react'

import { images } from '../constants';
import { TruckIcon, HomeIcon, HomeModernIcon } from '@heroicons/react/24/solid'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-white-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Welcome to </p>
                <h1 className='py-3 text-6xl md:text-7xl font-bold'>Del Consult</h1>
                <p className='text-2xl'>Ghana Accra east legon.</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Learn more about us</button>
            </div>
            <div>
                <img className='w-full' src={images.engineer_material} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Home