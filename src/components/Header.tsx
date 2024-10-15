import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import clsx from 'clsx';
import Button from './Button';

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={clsx('fixed left-0 top-0 z-50 w-full duration-500 transition-all', hasScrolled && 'py-1 bg-blue-950 backdrop-blur-[8px]')}>
      <div className='container flex justify-between h-14 items-center max-lg:py-10'>
        <a href="/" className='flex lg:flex-1 cursor-pointer z-2'>
        <img src="/public/assets/logo_mini.svg" alt="logo" className="w-10 h-10 object-contain" />
        </a>

        <div>
          <nav className={clsx('lg:flex lg:space-x-10 lg:items-center lg:justify-end lg:flex-1', isOpen ? 'block' : 'hidden')}>
            <a href="/" className='text-p4 font-bold text-lg'>Connect</a>
            <a href="/#about" className='text-p4 font-bold text-lg'>Connect Manually</a>
            <button className='hidden lg:block'>Get Started</button>
          </nav>
        </div>
        <button className='lg:hidden z-2 size-10 right-17 flex justify-center items-center' onClick={() => setIsOpen((prevState) => !prevState)}>
        {isOpen ? (
          <IoCloseSharp className='w-20 h-20'/>
        ) : (
          <GiHamburgerMenu className='w-20 h-20' />
        )}
        </button>
      </div>
    </header>
  );
};

export default Header;


{/* */}

