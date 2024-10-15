import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className='relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32'>
      <div className='container'>
          <div className='relative z-2 '>
            <h1 className='mb-6 text-5xl w- text-p4  text-bold max-lg:mb-7 sm:text-center md:text-center  max-md:leading-12'>
            Your Trusted Blockchain and Solution!
            <br />
            Crypto Rectification
            </h1>
            <p className='items-center  text-p4 mb-14 max-md:mb-10'>
            Your go-to online tool to <span className='text-blue-950'>seamlessly and efficiently</span>  fix any blockchain-related issues you might encounter.
            </p>
          {/* <div className='absolute w-[500px] py-10 pointer-events-none -z-2'>
              <img src='/public/assets/hero_img_1.png' className='size-123 max-lg:h-auto' alt='hero' />
            <img src='/public/assets/etherium.png' className='size-123 max-lg:h-auto' alt='hero' />
          </div> */}
          </div>



        </div>
        <div className="flex-1">
          <div className="h-20 w-20 bg-gray-300 rounded-full"></div>
        </div>
        <div>
          <div className="w-24 h-6 rounded-lg bg-purple-300"></div>
        </div>
    </section>
  )
}

export default Hero