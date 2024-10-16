import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='container'>
      <div className='flex items-center justify-center'>
        <a href="/">
          <img src="/public/assets/logo_mini.svg" alt="logo" className='w-23 h-23' />
        </a>
      </div>

      <div className='border-box pt-5'>
        <div className='flex items-center justify-center space-x-4 p-2'>
          <div className=' p-2 rounded-[5px] bg-box'>
        <FaFacebookF className='text-white'/>
          </div>
          <div className=' p-2 rounded-[5px] bg-box'>
        <FiInstagram className='text-white'/>
          </div>
          <div className=' p-2 rounded-[5px] bg-box'>
        <FaXTwitter className='text-white'/>
          </div>
          <div className=' p-2 rounded-[5px] bg-box'>
        <FaWhatsapp className='text-white'/>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center pt-5'>
        <p className='text-p1'>Copyright © 2024. All Rights <span className='text-white'>Reserved Web 3 Resolver</span></p>
      </div>
    </div>
  )
}

export default Footer


// linear-gradient(108.18deg,#ea4c89 -12.02%,#4d44c6 60%) text
// linear-gradient(108.18deg, #ea4c891a -2.02%, #4d44c61a); border