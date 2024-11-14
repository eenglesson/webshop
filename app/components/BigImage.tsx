import Image from 'next/image';
import React from 'react';

export default function BigImage() {
  return (
    <>
      <div className='w-full h-[300px] overflow-hidden relative rounded-xl'>
        <Image
          src='/climbingski.avif'
          alt='skiImage'
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className='absolute inset-0 flex items-center justify-start bg-black bg-opacity-25 text-white text-lg font-semibold p-4 sm:p-8'>
          <div className=''>
            <h2 className='text-h5 sm:text-h3 font-'>Outdoor Clothing</h2>
            <p className='text-tiny sm:text-small font-medium'>
              Gear, footwear, and clothing — new designs and <br /> iconic
              performers that help you make the most of life outside.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
