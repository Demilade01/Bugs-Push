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
    <header className='absolute left-0 top-0 z-50 w-full'>
      <div className='container flex justify-between h-14 items-center max-lg:py-10'>
        <a href="/" className='flex lg:flex-1 cursor-pointer z-2'>
        <img src="/public/assets/logo_mini.svg" alt="logo" className="w-10 h-10 object-contain" />
        </a>
        <div className={clsx('w-full max-lg:fixed top-6 right-20', { 'max-lg:opacity-100': isOpen, 'max-lg:opacity-0': !isOpen })}>
        <div className='max-lg:relative max-lg:flex max-lg:flex-col max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4'>
          <nav className='max-lg:relative max-lg:px-12 max-lg:my-auto'>
          <ul className='flex max-lg:block max-lg:px-12'>
            <li className=''>
            <a href="/" className='nav-link base-bold transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4'>Connect</a>
            </li>
            <li className='nav-li'>
            <a href="/" className='nav-link base-bold'>Connect Manually</a>
            </li>
          </ul>
          </nav>
        </div>
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

