'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Updated import
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ProductTypes } from '../types';

type CardProductProps = {
  product: ProductTypes;
};

const availableColors = [
  'bg-green-600',
  'bg-slate-400',
  'bg-blue-500',
  'bg-red-600',
  'bg-slate-800',
  'bg-purple-500',
  'bg-orange-500',
];

export default function CardProduct({ product }: CardProductProps) {
  const router = useRouter(); // Now using from 'next/navigation'

  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    const colorCount = Math.floor(Math.random() * 3) + 3;
    const shuffledColors = [...availableColors].sort(() => 0.5 - Math.random());
    setColors(shuffledColors.slice(0, colorCount));
  }, []);

  const handleClick = () => {
    router.push(`/productDetails/${product.title}`);
  };

  return (
    <Card
      className='w-full h-full max-w-[600px] border-none shadow-none mx-auto overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-102 cursor-pointer flex flex-col'
      onClick={handleClick}
    >
      <div className='relative w-full' style={{ paddingBottom: '128.57%' }}>
        <Image
          src={product.image}
          alt={product.title}
          fill // Enables the image to fill its container
          sizes='(max-width: 768px) 100vw, 50vw' // Full width on small screens, half on larger screens
          className='object-cover' // Applies the "cover" object-fit style
        />
        <div className='absolute inset-0 flex items-end justify-center gap-2 p-2 '>
          <div className='flex items-center justify-center gap-1 sm:gap-2 flex-wrap'>
            {product.badges?.slice(0, 3).map((badge, index) => (
              <aside
                key={`badge-${index}`}
                className='bg-white py-1 shrink-0 px-2 sm:px-3 rounded-sm'
              >
                <p className='text-tiny sm:text-small text-black font-normal'>
                  {badge}
                </p>
              </aside>
            ))}
          </div>
        </div>
      </div>
      <div className='border-l border-r border-b rounded-bl-xl rounded-br-xl'>
        <CardContent className='p-4 pb-2 sm:pb-4 flex-grow flex flex-col gap-1'>
          <div>
            <h3 className='text-small md:text-h6 font-semibold'>
              {product.title}
            </h3>
            <p className='text-tiny sm:text-small font-light text-muted-foreground'>
              {product.category}
            </p>
          </div>
          <div className='flex gap-1'>
            {colors.map((color, index) => (
              <span
                key={index}
                className={`h-[10px] w-[10px] sm:h-[14px] sm:w-[14px] rounded-full ${color}`}
              />
            ))}
          </div>
        </CardContent>
        <CardFooter className='p-4 pt-0 flex justify-between items-center mt-auto'>
          <span className='text-small xl:text-h6 font-semibold'>
            ${product.price}.00
          </span>
        </CardFooter>
      </div>
    </Card>
  );
}
