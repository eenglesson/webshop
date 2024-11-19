// components/Navbar.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { links, FilterType } from '../types';
import ShoppingBagUser from './ShoppingBagUser';
import { useFilter } from '../context/FilterContext';

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
      stiffness: 800,
      damping: 80,
      delay: 0,
    },
  },
};

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { filter, setFilter } = useFilter();
  const [activeLink, setActiveLink] = useState<FilterType>('All');
  const [isOpen, setIsOpen] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
    setHasClicked(true);
  };

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active link when filter changes
  useEffect(() => {
    setActiveLink(filter);
  }, [filter]);

  const handleLinkClick = (newFilter?: FilterType) => {
    if (pathname === '/') {
      if (newFilter) {
        router.push(`/?filter=${newFilter}`);
        setActiveLink(newFilter);
        setFilter(newFilter);
      } else {
        router.push('/');
        setActiveLink('All');
        setFilter('All');
      }
      setIsOpen(false);
      setHasClicked(true);
    } else {
      if (newFilter) {
        router.push(`/?filter=${newFilter}`);
      } else {
        router.push('/');
      }
    }
  };

  return (
    <>
      {/* Navbar for smaller screens */}
      <nav className='sticky top-0 z-50 flex sm:hidden w-screen items-center shadow-[0px_1px_6px_0px_rgba(0,_0,_0,_0.05)] justify-between py-4 px-4 bg-white'>
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
        <ShoppingBagUser />
        <ul
          className={`absolute left-0 w-screen z-20 flex flex-col pb-[50px] pt-[100px] pl-[48px] gap-6 bg-white rounded-b-3xl shadow-xl transition-all duration-300 ease-in-out ${
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

      {/* Larger screen navbar */}
      <nav className='sticky top-0 z-50 hidden sm:flex items-center shadow-[0px_1px_6px_0px_rgba(0,_0,_0,_0.05)] justify-between py-4 bg-white w-screen'>
        <div className='flex w-full mx-auto items-center px-8 max-w-[1400px] justify-be tween'>
          <div
            className='flex-shrink-0 cursor-pointer'
            onClick={() => handleLinkClick()}
          >
            <p className='text-h4 text-slate-900 font-semibold'>
              Arc&apos;teryx
            </p>
          </div>

          {/* Center section with the links */}
          <div className='flex gap-8'>
            {links.map((link) => (
              <p
                key={link.filter}
                onClick={() => handleLinkClick(link.filter)}
                className={`text-body font-normal cursor-pointer ${
                  activeLink === link.filter
                    ? 'text-darkGray'
                    : 'text-black hover:text-darkGray'
                }`}
              >
                {link.label}
              </p>
            ))}
          </div>

          <ShoppingBagUser />
        </div>
      </nav>
    </>
  );
}
