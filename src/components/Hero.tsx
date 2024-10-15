import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className='relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32'>
      <div className='container'>
          <div className='relative z-2 max-w-512 max-lg:max-w-388'>
            <h1 className='mb-6 h1 text-p4 max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12'>
            Your Trusted Blockchain and Solution!
            Crypto Rectification
            </h1>
            <p className='max-w-440 mb-14 body-1 max-md:mb-10'>
            Your go-to online tool to seamlessly and efficiently fix any blockchain-related issues you might encounter.
            </p>
          </div>

          <div className='absolute w-32 -right-[24px] -top-20 pointer-events-none '>
              <img src='/public/assets/hero_img_1.png' className='size-123 max-lg:h-auto' alt='hero' />
          </div>
          <div>
            
          </div>
        </div>
    </section>
  )
}

export default Hero