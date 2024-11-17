// components/ProductDetailsClient.tsx

'use client';

import React, { useState } from 'react';
import Accordion from '@/app/components/Accordion';
import AddToCartButton from '@/app/components/AddToCartButton';
import ColorPicker from '@/app/components/ColorPicker';
import InteractiveIcon from '@/app/components/InteractiveIcon';
import SizeSelector from '@/app/components/SizeSelector';
import { extraConfig, menuConfig } from '@/app/data/products';
import { splitTextAfterStops } from '@/app/functions';
import { ProductTypes } from '@/app/types';
import { HeartIcon } from 'lucide-react';
import Image from 'next/image';

interface ProductDetailsClientProps {
  product: ProductTypes;
}

export default function ProductDetailsClient({
  product,
}: ProductDetailsClientProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState('');

  return (
    <section className='md:flex md:flex-row h-full w-full flex-col pt-8 pb-32'>
      <div className='flex items-center justify-center md:w-1/2 h-full w-full '>
        <div
          className='relative w-full max-w-[700px]'
          style={{ paddingBottom: '120%' }}
        >
          <Image
            src={product.image}
            alt={product.title}
            sizes='(max-width: 700px) 100vw, 700px'
            fill
            className='object-cover object-top'
          />
        </div>
      </div>

      <div className='md:w-1/2 h-full w-full flex mt-4 md:mt-0 flex-col gap-6 lg:gap-10 md:pl-4'>
        {/* Title and Price */}
        <aside className='flex flex-col'>
          <h1 className='text-h4 md:text-h2 lg:text-h1 font-medium '>
            {product.title}
          </h1>
          <span className='text-h4 md:-mt-2 sm:text-h3 font-normal'>
            ${product.price}.00
          </span>
        </aside>

        {/* About Text */}
        <div className='space-y-2'>
          {splitTextAfterStops(product.about, 2).map((line, index) => (
            <p
              key={index}
              className='text-gray-700 text-small lg:text-body font-normal leading-relaxed'
            >
              {line}
            </p>
          ))}
        </div>

        {/* Color Picker and Size Selector */}
        <div className='flex flex-col gap-6'>
          <aside className='flex flex-col gap-2'>
            <p className='text-small text-black font-medium'>Colors</p>
            <div className='pl-[2px]'>
              <ColorPicker
                colors={product.colors}
                initialColor={product.colors[0]}
                onColorSelect={setSelectedColor}
              />
            </div>
          </aside>
          <SizeSelector sizes={product.sizes} onSizeSelect={setSelectedSize} />
        </div>

        {/* Add to Cart and Wishlist */}
        <aside className='flex w-full items-center gap-6 md:gap-8'>
          <AddToCartButton
            product={product}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
          />
          <InteractiveIcon
            initialColor='text-darkGray'
            activeColor='text-red-500 fill-red-500'
            hoverColor='hover:text-red-500 transition-colors duration-50'
            size='w-7 h-7 lg:w-8 lg:h-8'
            strokeWidth={1.5}
          >
            <HeartIcon />
          </InteractiveIcon>
        </aside>

        {/* Accordion for Additional Information */}
        <Accordion data={product} menu={menuConfig} extra={extraConfig} />
      </div>
    </section>
  );
}
