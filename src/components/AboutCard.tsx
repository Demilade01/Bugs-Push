import React from 'react'
import { about } from '../constants'
import { RiRobot3Fill } from 'react-icons/ri'
import { FaPlusCircle } from 'react-icons/fa'
import Button from './Button'


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
          <Button />
        </div>
        </div>
      </div>
      ))}
    </div>
</div>
  )
}

export default AboutCard