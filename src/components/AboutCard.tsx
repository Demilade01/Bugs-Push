import React from 'react'
import { about } from '../constants'
import { RiRobot3Fill } from 'react-icons/ri'
import { FaPlusCircle } from 'react-icons/fa'

const AboutCard = () => {
  return (
    <div className="container box-border bg-about min-w-screen">
    <div className='flex justify-center items-center'>
      {about.slice(0, 1).map((about) => (
      <div
        key={about.title}
        className='bg-box m-4 flex justify-center items-center rounded-lg w-full lg:p-40 md:p-20 border-r-10'
      >
        <div className='grid grid-cols-1 gap-2 items-center justify-center text-center'>
        <div className='pt-10'>
          <h3 className='text-white text-2xl font-bold'>{about.title}</h3>
        </div>
        <div className='mt-1 m-5'>
          <h2 className=' text-white pt-20'>{about.subTitle}</h2>
        </div>
        <div className='mt-20 pb-10'>
          <button
          className=' bg-white hover:bg-box duration-500 transition-all text-gray-800 hover:text-white py-2 px-4 rounded-[5px] inline-flex items-center'
          onClick={() => window.location.href = '/manual'}
          >
          <div style={{ position: 'relative', display: 'inline-block' }} >
            <RiRobot3Fill />
            <FaPlusCircle className='w-2 h-3' style={{ position: 'absolute', bottom: 0, right: 0 }} />
          </div>
          <h4 className='ml-2'>Connect Manually</h4>
          </button>
        </div>
        </div>
      </div>
      ))}
    </div>
</div>
  )
}

export default AboutCard