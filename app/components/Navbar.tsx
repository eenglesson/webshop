'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { ShoppingBag, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { links } from '../types';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: -80,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      type: 'spring',
      stiffness: 800, // Controls the stiffness of the spring
      damping: 80,
      delay: 0,
    },
  },
};

const orderCount = 2;

export default function Navbar({
  setFilter = () => {},
}: {
  setFilter?: (filter: 'All' | 'Apparel' | 'Accessories') => void;
}) {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path
  const searchParams = useSearchParams(); // Get search parameters from URL
  const [activeLink, setActiveLink] = useState<
    'All' | 'Apparel' | 'Accessories'
  >('All');

  const [isOpen, setIsOpen] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
    setHasClicked(true); // När användaren klickar aktiveras animationerna
  };

  const handleScroll = () => {
    if (window.scrollY > 30) {
      // Replace 100 with any threshold you prefer
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active link when on the home page or based on URL query
  useEffect(() => {
    const filterParam = searchParams.get('filter') as
      | 'All'
      | 'Apparel'
      | 'Accessories';
    if (pathname === '/') {
      setActiveLink(filterParam || 'All'); // Set based on URL or default to 'All'
      setFilter(filterParam || 'All'); // Set filter in the home page
    }
  }, [pathname, searchParams, setFilter]);

  const handleLinkClick = (filter?: 'All' | 'Apparel' | 'Accessories') => {
    if (pathname === '/') {
      // If on the homepage, only set the filter if provided
      if (filter) {
        setFilter(filter);
        setActiveLink(filter);
        setIsOpen(!isOpen);
        setHasClicked(true);
      }
    } else {
      // Navigate to the homepage from any other page
      router.push('/');
      setTimeout(() => {
        if (filter) {
          setFilter(filter);
        }
      }, 0);
    }
  };

  return (
    <>
      {/* navbar för smaller screens */}
      <nav className='flex relative sm:hidden items-center justify-between border-b-[0.5px] py-4'>
        <aside
          onClick={toggleHamburger}
          className='flex flex-col gap-1.5 w-[26px] justify-center h-[26px] cursor-pointer z-30'
        >
          <span
            className={`bg-black h-[2px] rounded-full transition-transform duration-300 ${
              hasClicked
                ? isOpen
                  ? 'animate-line1Open'
                  : 'animate-line1Close'
                : ''
            }`}
          ></span>
          <span
            className={`bg-black h-[2px] rounded-full transition-transform duration-300 ${
              hasClicked
                ? isOpen
                  ? 'animate-line2Open'
                  : 'animate-line2Close'
                : ''
            }`}
          ></span>
        </aside>
        <div className='flex z-40 gap-6 '>
          <User className='cursor-pointer' />
          <aside className='relative group'>
            <ShoppingBag className='cursor-pointer' />
            {orderCount > 0 && (
              <span className='absolute top-4 -right-2 bg-red-500  text-white text-[12px] font-medium rounded-md w-[18px] h-[18px] flex items-center justify-center cursor-pointer group-hover:bg-black transition-transform duration-150 '>
                {orderCount}
              </span>
            )}
          </aside>
        </div>
        <ul
          className={`absolute -left-4 w-screen z-20 flex flex-col pb-[50px] pt-[100px] pl-[48px] gap-6 bg-white rounded-b-3xl shadow-xl transition-all duration-300 ease-in-out ${
            isOpen ? 'top-0' : 'top-[-400px]'
          }`}
        >
          {links.map((link, i) => (
            <motion.div
              key={i}
              variants={fadeInAnimationVariants}
              initial='initial'
              whileInView='animate'
              className='z-20'
            >
              <div
                key={link.filter}
                onClick={() => handleLinkClick(link.filter)}
                className={`text-body w-fit font-normal cursor-pointer ${
                  pathname === '/' && activeLink === link.filter
                    ? 'text-darkGray'
                    : 'text-black hover:text-darkGray'
                }`}
              >
                <p className='text-body'> {link.label}</p>
              </div>
            </motion.div>
          ))}
        </ul>
      </nav>

      {/* navbar fo bigger screens */}
      <nav className='hidden sm:flex relative items-center justify-between border-b-[0.5px] py-4'>
        {/* Left section with the logo */}
        <div
          className='flex-shrink-0 cursor-pointer'
          onClick={() => handleLinkClick()}
        >
          <p className='text-h4 text-slate-900 font-semibold'>Arc&apos;teryx</p>
        </div>

        {/* Center section with the links */}
        <div className='absolute left-1/2 transform -translate-x-1/2 flex gap-8'>
          {links.map((link) => (
            <p
              key={link.filter}
              onClick={() => handleLinkClick(link.filter)}
              className={`text-body font-normal cursor-pointer ${
                pathname === '/' && activeLink === link.filter
                  ? 'text-darkGray'
                  : 'text-black hover:text-darkGray'
              }`}
            >
              {link.label}
            </p>
          ))}
        </div>

        {/* Right section with the shopping bag icon */}
        <div className='flex gap-6 '>
          <User className='cursor-pointer' />
          <aside className='relative group'>
            <ShoppingBag className='cursor-pointer' />
            {orderCount > 0 && (
              <span className='absolute top-4 -right-2 bg-red-500  text-white text-[12px] font-medium rounded-md w-[18px] h-[18px] flex items-center justify-center cursor-pointer group-hover:bg-black transition-transform duration-150 '>
                {orderCount}
              </span>
            )}
          </aside>
        </div>
      </nav>
    </>
  );
}
