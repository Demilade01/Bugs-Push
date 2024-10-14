import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className='relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32'>
      <div className='container'>
        <div className='relative z-2 max-w-512 max-lg:max-w-388'>

          <h1 className='mb-6 h4 text-p4 max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12 lg:h1'>Your Trusted Blockchain and Solution! Crypto Rectification</h1>

          <div>
            <Button btnName='Connect' className=''/>
          </div>


          <p className='text-p4'>Your go-to online tool to <span className='bg-blue-950'>seamlessly and efficiently</span>fix any blockchain issues you might encounter</p>

          <div>
            <img 
              src='/public/assets/hero_img_1.png' 
              alt='hero' 
              className='w-full max-lg:w-96 max-md:w-80 max-md:mt-8'
            />

            <div>
              <img 
                src='/public/assets/etherium.png' 
                alt='hero' 
                className='w-full max-lg:w-96 max-md:w-80 max-md:mt-8'
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero