'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { ShoppingBag, User } from 'lucide-react';

type NavLink = {
  label: string;
  filter: 'All' | 'Apparel' | 'Accessories';
};

const links: NavLink[] = [
  { label: 'All', filter: 'All' },
  { label: 'Apparel', filter: 'Apparel' },
  { label: 'Accessories', filter: 'Accessories' },
];

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
  );
}
