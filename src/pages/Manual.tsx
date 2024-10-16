import React from 'react'
import { services } from '../constants'
import ManualCard from '../components/manualCard'
import Faq from '../components/Faq'
import AboutCard from '../components/AboutCard'
import Footer from '../components/Footer'

const Manual = () => {
  return (
    <div className="container">
      <div>
        <div className='flex flex-col items-center justify-center text-center'>
          <div className='flex items-center pb-2'>
            <div className='h-4 w-1 bg1' />
            <p className='px-1 uppercase bg-text'>Issues to resolve</p>
          </div>

          <h2 className='text-white text-2xl font-bold pb-10'>Our Services</h2>
        </div>

        <ManualCard />

        <div className='flex flex-col items-center justify-center text-center pt-10'>
          <div className='flex items-center pb-2 '>
            <div className='h-4 w-1 bg1' />
            <p className='px-1 uppercase bg-text'>faq</p>
          </div>

          <h2 className='text-white text-2xl font-bold'>Still have questions?</h2>
        </div>

        <div className='pt-10 pb-10'>
         <Faq />
        </div>
        <div className='bg-about w-full pt-12 '>
          <AboutCard />
        </div>
        <div className='pt-12'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Manual