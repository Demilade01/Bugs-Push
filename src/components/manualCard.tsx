import React from 'react'
import { services } from '../constants'

const manualCard = () => {
  return (
    <div className="container box-border">
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {services.map((service) => (
            <div
            key={service.title}
            className='bg-box m-4 flex justify-center items-center p-10 rounded-lg md:box-content mx-auto' // Removed fixed height
            >
            <div className='grid grid-cols-1 gap-2 items-center justify-center text-center'>
              <div className=''>
               <h3 className='text-white text-2xl font-bold pb-5'>{service.title}</h3>
              </div>
              <div className='-mt-2'>
              <h2 className=' text-p1 pb-5'>{service.subTitle}</h2>
              </div>
              <div className='pt-2'>
                <button className='bg-[#0d6efd] hover:bg-blue-800 text-white py-2 px-5 rounded inline-flex items-center'>
                <h4 className=''>{service.btnName}</h4>
              </button>
              </div>
            </div>
            </div>
            ))}
            </div>
        </div>
  )
}

export default manualCard