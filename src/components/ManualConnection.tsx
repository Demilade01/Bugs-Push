import React from 'react'
import { RiRobot3Fill } from "react-icons/ri";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ManualConnection = () => {
  const navigate = useNavigate()



  return (
    <div className='container h-40'>
      <div className="flex flex-col lg:flex-row lg:items-start">
      <div className='flex flex-col items-center justify-center py-2 px-2 lg:w-1/2'>
        <div className='flex items-center'>
        <div className='h-4 w-1 bg1' />
        <p className='px-1 uppercase bg-text'>MANUAL CONNECTION</p>
        </div>

        <h2 className='text-white text-2xl mt-4 lg:mt-0'>You can choose to Connect Manually</h2>

        <p className='text-p1 mt-2 lg:mt-4'>While our automatic connection tools are designed for seamless integration, some situations call for a little extra control. That's where "Connect Manually" comes in. This option gives you the power to hand-pick your wallet and tailor the connection process to your specific needs. Whether you prefer the familiarity of a direct address or the security of a QR code scan, "Connect Manually" offers the flexibility you crave. So, take a deep breath, dive into the details, and connect your wallet just the way you like it.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:w-1/2">
        <div className="sticky top-0">
        <img src="/public/assets/blog11.jpeg" alt="logo" className="object-contain" />
        </div>
        <div className="sticky top-0">
        <img src="/public/assets/about_img_3.png" alt="logo" className="object-contain" />
        </div>
        <div className="sticky top-0">
        <img src="/public/assets/about_img_2.png" alt="logo" className="object-contain" />
        </div>
        <div className="sticky top-0">
        <img src="/public/assets/blog9.jpeg" alt="logo" className="object-contain" />
        </div>
      </div>
      </div>

      <button
        className='bg-[#0d6efd] hover:bg-blue-800 duration-500 transition-all text-white py-2 px-4 rounded inline-flex items-center'
        onClick={() => window.location.href = '/manual'}
      >
        <div style={{ position: 'relative', display: 'inline-block' }} >
          <RiRobot3Fill />
          <FaPlusCircle className='w-2 h-3' style={{ position: 'absolute', bottom: 0, right: 0 }} />
        </div>
        <h4 className='ml-2'>Connect Manually</h4>
      </button>
    </div>
  )
}

export default ManualConnection

