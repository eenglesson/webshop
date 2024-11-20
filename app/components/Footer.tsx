'use client';

import React from 'react';

import { Mail, Phone } from 'lucide-react';

type Link = {
  name: string;
  path: string;
};

export default function Footer() {
  const companyLinks: Link[] = [
    { name: 'All', path: '/' },
    { name: 'Apparel', path: '/?filter=Apparel' },
    { name: 'Accessories', path: '/?filter=Accessories' },
  ];

  const socialLinks: Link[] = [
    { name: 'Twitter', path: '#' },
    { name: 'Facebook', path: '#' },
    { name: 'LinkedIn', path: '#' },
  ];

  return (
    <footer className='shadow-[0px_-1px_6px_0px_rgba(0,_0,_0,_0.05)] mt-32 flex justify-center'>
      <div className='flex flex-col w-full gap-12 py-12 px-4 sm:px-8 border-b md:flex-row border-grey30 max-w-[1400px]'>
        <aside className='flex flex-col gap-4 w-full '>
          <div>
            <p className='text-h4 text-slate-900 font-semibold'>
              Arc&apos;teryx
            </p>
          </div>

          <p className='shrink-0 text-bodyMedium sm:text-bodyDefault max-w-[600px]'>
            Arc'teryx is a high-performance outdoor equipment company known for
            leading innovations in climbing, skiing, and alpine technologies
          </p>
          <div className='flex flex-col gap-2'>
            <a
              className='hover:underline group flex items-center gap-2'
              href='mailto:SalahLegal@outlook.com'
            >
              <Mail size={16} />
              <span className='text-dark70 text-bodyMedium sm:text-bodyDefault hover:text-black'>
                Arcteryx@support.com
              </span>
            </a>
            <a className='hover:underline group flex items-center gap-2'>
              <Phone size={16} />
              <span className='text-dark70 text-bodyMedium sm:text-bodyDefault hover:text-black'>
                +49 759 283 273
              </span>
            </a>
          </div>
        </aside>
        <section className='flex flex-wrap w-full gap-6 sm:gap-12 xl:justify-between'>
          <div>
            <h4 className='font-normal text-bodyMedium sm:text-bodyDefault md:text-h4'>
              Company
            </h4>
            <ul className='list-none flex flex-col gap-2 mt-3'>
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className='hover:text-darkGray text-bodyMedium sm:text-bodyDefault'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className='font-normal text-bodyMedium sm:text-bodyDefault md:text-h4'>
              Social Media
            </h4>
            <ul className='list-none flex flex-col gap-2 mt-3'>
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className='hover:text-darkGray text-bodyMedium sm:text-bodyDefault'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='font-normal text-bodyMedium sm:text-bodyDefault md:text-h4'>
              Contact Office
            </h4>
            <p className='mt-3 text-bodyMedium sm:text-bodyDefault max-w-[200px] lg:w-full'>
              Vallgatan 8, 411 16 Gothenburg, Sweden
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
}
