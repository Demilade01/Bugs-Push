import React from 'react'
import { RiRobot3Fill } from "react-icons/ri";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ManualConnection = () => {
  const navigate = useNavigate()



  return (
    <section className="text-white py-16 px-8 md:px-16 lg:px-24">
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0">
      {/* Left Side: Manual Connection Info */}
      <div className="lg:w-1/2">
        <div className='flex flex-1 items-center justify-center py-2 px-2'>
          <div className='h-4 w-1 bg1' />
          <p className='cs bg-text px-2 uppercase'>Manual Connection</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">You can choose to Connect Manually</h2>
        <p className="text-lg text-gray-400 mb-6 mr-8">
          While our automatic connection tools are designed for seamless integration, some situations call for a little extra control. That's where "Connect Manually" comes in. This option gives you the power to hand-pick your wallet and tailor the connection process to your specific needs. Whether you prefer the familiarity of a direct address or the security of a QR Code scan, "Connect Manually" offers the flexibility you crave.
        </p>
        <button
          className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
          onClick={() => navigate('/manual')}
        >
          Connect Manually
        </button>
      </div>

      {/* Right Side: NFT/Avatar Display */}
      <div className="lg:w-1/2 grid grid-cols-2 gap-4">
        <img src="../public/assets/blog11.jpeg" alt="NFT 1" className="w-full h-auto rounded-lg" />
        <img src="../public/assets/about_img_2.png" alt="NFT 2" className="w-full h-auto rounded-lg" />
        <img src="../public/assets/about_img_3.png" alt="NFT 3" className="w-full h-auto rounded-lg" />
        <img src="../public/assets/blog9.jpeg" alt="NFT 4" className="w-full h-auto rounded-lg" />
      </div>
    </div>
  </section>
);
};

export default ManualConnection

