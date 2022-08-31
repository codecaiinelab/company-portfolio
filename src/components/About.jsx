import React from 'react'

import { images } from '../constants';
import { ClockIcon, ChatBubbleLeftRightIcon, BanknotesIcon,  LockClosedIcon} from '@heroicons/react/24/solid'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className=''>
                <h2 className='text-5xl font-bold'>Site and Civil Engineering Services</h2>
                <p className='text-2xl py-6 text-gray-500'>From a small building addition to a major expansion, KCI conducts feasibility studies, prepares conceptual and final designs, and produces construction documents as we shepherd each project through the local permitting and regulatory processes. Our LEED- and ISI Envision-accredited engineers and planners prepare sustainable site plans that incorporate water efficient landscaping, water use reduction, innovative stormwater management, reduced site disturbance, and construction waste management to maximize green building potential.</p>
            </div>

            <div className='grid md:grid-cols-4 gap-8 px-2 text-center mt-20'>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <div className='text-gray-500 flex justify-center'> <ClockIcon className='w-[100px]' /></div>
                    <p className='text-xl mt-2'>Save time</p>
                </div>
                <div  className='border py-8 rounded-xl shadow-xl' >
                   <div className='text-gray-500 flex justify-center'> <ChatBubbleLeftRightIcon className='w-[100px]' /></div>
                   <p className='text-xl mt-2'>Support</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                <div className='text-gray-500 flex justify-center'> <LockClosedIcon className='w-[100px]' /></div>
                    <p className='text-xl mt-2'>Transactions</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                <div className='text-gray-500 flex justify-center'> <BanknotesIcon className='w-[100px]' /></div>
                    <p className='text-xl mt-2'>Transactions</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About