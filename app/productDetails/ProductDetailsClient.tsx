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
import { HeartIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductDetailsClientProps {
  product: ProductTypes;
}

export default function ProductDetailsClient({
  product,
}: ProductDetailsClientProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState('');
  const [isFavorited, setIsFavorited] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState('next'); // 'next' or 'prev'

  // Create an images array with the same image repeated
  const images = [product.image, product.image, product.image];

  function toggleFavorites() {
    setIsFavorited((prev) => !prev); // Toggle favorite status

    // Show toast message based on the new status
    if (isFavorited) {
      toast.message(
        `(${product.title}) has been removed from your favorites.`,
        {
          duration: 3000,
        }
      );
    } else {
      toast.message(`(${product.title}) has been added to your favorites.`, {
        duration: 3000,
      });
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setDirection('next');
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    },
    onSwipedRight: () => {
      setDirection('prev');
      setCurrentImageIndex(
        (currentImageIndex - 1 + images.length) % images.length
      );
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const variants = {
    enter: (direction: 'next' | 'prev') => ({
      x: direction === 'next' ? 1000 : -1000,
      opacity: 0,
      zIndex: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 0,
    },
    exit: (direction: 'next' | 'prev') => ({
      x: direction === 'next' ? -1000 : 1000,
      opacity: 0,
      zIndex: 0,
    }),
  };

  return (
    <section className='md:flex md:flex-row h-full w-full flex-col pt-8'>
      <div className='flex flex-col items-center justify-center md:w-1/2 h-full w-full'>
        {/* Main Image */}
        <div
          {...handlers}
          className='relative w-full max-w-[700px] overflow-hidden'
          style={{ paddingBottom: '120%' }}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentImageIndex}
              custom={direction}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className='absolute top-0 left-0 w-full h-full'
            >
              <Image
                src={images[currentImageIndex]}
                alt={product.title}
                sizes='(max-width: 700px) 100vw, 700px'
                fill
                className='object-cover object-top'
              />
            </motion.div>
          </AnimatePresence>
          {/* Left Arrow */}
          <button
            onClick={() => {
              setDirection('prev');
              setCurrentImageIndex(
                (currentImageIndex - 1 + images.length) % images.length
              );
            }}
            className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 z-10'
          >
            <ChevronLeft size={24} />
          </button>
          {/* Right Arrow */}
          <button
            onClick={() => {
              setDirection('next');
              setCurrentImageIndex((currentImageIndex + 1) % images.length);
            }}
            className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 z-10'
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Thumbnails Section */}
        <aside className='flex flex-row gap-2 mt-2 w-full justify-center'>
          {images.map((img, index) => (
            <div
              key={index}
              className='relative flex-1 overflow-hidden cursor-pointer'
              style={{ paddingBottom: '30%' }}
              onClick={() => {
                setDirection(index > currentImageIndex ? 'next' : 'prev');
                setCurrentImageIndex(index);
              }}
            >
              <Image
                src={img}
                alt={`${product.title} thumbnail ${index + 1}`}
                sizes='(max-width: 700px) 33vw, 700px'
                fill
                className={`object-cover object-center ${
                  index === currentImageIndex ? 'border border-primary' : ''
                }`}
              />
            </div>
          ))}
        </aside>
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
            onClick={toggleFavorites}
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
