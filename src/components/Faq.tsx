import React from 'react'
import { faq } from '../constants'

const Faq = () => {
  return (
    <div className="container box-border object-contain">
        <div className='grid grid-cols-1 md:grid-cols-1 gap-4 min-w-screen mx-auto'>
        {faq.map((faq) => (
          <div
          key={faq.id}
          className='bg-box m-4 flex justify-center items-center rounded-lg md:box-content p-10' // Removed fixed height
          >
          <div className='grid grid-cols-1 gap-2 items-center justify-center text-center'>
            <div className='flex-start items-start pl-2 gap-2 pb-2'>
            <h2 className='text-white font-bold'>{faq.id}</h2>
            <h3 className='text-white text-[17px] font-bold'>{faq.title}</h3>
            </div>
            <div className='-mt-2'>
            <h2 className=' text-p1  '>{faq.subTitle}</h2>
            </div>
          </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Faq