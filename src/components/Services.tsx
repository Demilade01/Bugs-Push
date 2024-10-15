import React from 'react'
import { steps } from '../constants'

const Services = () => {
  return (
    <div className='container'>
      <div>
        <div className='flex flex-1 items-center justify-center py-2 px-2'>
          <div className='h-4 w-1 bg-gray-300' />
          <p className='px-2'>Simple Steps</p>
        </div>
      </div>
      <div className='flex flex-col pt-1 items-center justify-center py-3'>
        <h1 className='text-2xl text-white font-bold'>How to fix Web3 Related Issues</h1>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1'>
        {steps.map((step) => (
        <div
        key={step.id}
        className='boder-box h-40 bg-gray-800  m-4 p-4 flex justify-center items-center rounded-lg md:box-content' // This line modifies the div colors
        >
          <div className='grid grid-cols-1 gap-2 items-center justify-center text-center'>
            {/* for the circle */}
          <div className=''>
          <h3 className='text-blue-600 text-4xl font-bold'>{step.id}</h3>
          </div>
          <div className='-mt-2'>
          <h2 className='text-white text-p1  '>{step.title}</h2>
          </div>
        </div>
        </div>
        ))}
        </div>
    </div>
  )
}

export default Services