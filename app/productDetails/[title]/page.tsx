import Accordion from '@/app/components/Accordion';
import ColorPicker from '@/app/components/ColorPicker';
import InteractiveIcon from '@/app/components/InteractiveIcon';
import Navbar from '@/app/components/Navbar';
import { products } from '@/app/data/products';
import { ProductTypes } from '@/app/types';
import { Button } from '@/components/ui/button';
import { HeartIcon } from 'lucide-react';
import Image from 'next/image';

const menuConfig = [
  { id: 1, name: 'Features', key: 'features' }, // Maps to `product.features`
  { id: 2, name: 'Care Instructions', key: 'care' }, // Maps to `product.care`
  { id: 3, name: 'Shipping', key: 'shippingReturns' }, // Maps to `product.shippingReturns`
  { id: 4, name: 'Returns', key: 'returns' }, // Maps to `product.returns`
];

const extraConfig = {
  shippingReturns: [
    'Standard shipping is free for all orders over $50.',
    'Orders are typically processed within 1-2 business days and delivered within 3-5 business days.',
    'Expedited shipping options are available at checkout for an additional fee.',
    'Learn more about our shipping options and policies.',
  ],
  returns: [
    "We offer a 30-day return policy. If you're not completely satisfied with your purchase, return it within 30 days for a full refund",
    'To initiate a return, contact our customer service team or visit our returns page.',
  ],
};

type ProductDetailsProps = {
  params: any; // Temporarily set to 'any' to see if type mismatch errors go away
};

function splitTextAfterStops(text: string, minStops: number): string[] {
  const words = text.split(' '); // Split into words
  let currentPart = '';
  let stopCount = 0;

  const parts: string[] = [];

  for (const word of words) {
    currentPart += `${word} `; // Add the word to the current part
    if (word.includes('.')) stopCount++; // Increment full stop count if "." is found

    // Split the text once the required number of full stops is reached
    if (stopCount >= minStops) {
      parts.push(currentPart.trim()); // Push the current part
      currentPart = ''; // Start a new part
      stopCount = 0; // Reset full stop count
    }
  }

  // Push the remaining text as the last part
  if (currentPart.trim()) {
    parts.push(currentPart.trim());
  }

  return parts;
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsProps) {
  const { title } = await params;

  // Find the product by title (you could use an ID instead if it's more unique)
  const product: ProductTypes | undefined = products.find(
    (item) => item.title === decodeURIComponent(title)
  );

  if (!product) {
    return (
      <>
        <Navbar />
        <div className='flex justify-center items-center h-screen'>
          <p className='text-xl font-medium'>Product not found.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className='md:flex md:flex-row h-full w-full flex-col pt-8 pb-32'>
        <div className='flex items-center justify-center md:w-1/2 h-full w-full '>
          <div
            className='relative w-full max-w-[700px]'
            style={{ paddingBottom: '120%' }}
          >
            <Image
              src={product.image}
              alt={product.title}
              fill // Replaces layout="fill"
              className='object-cover object-top' // Replaces objectFit="cover" and objectPosition="top"
            />
          </div>
        </div>

        <div className='md:w-1/2 h-full w-full flex mt-4 md:mt-0 flex-col gap-6 lg:gap-10 md:pl-4'>
          {/* title and price */}

          <aside className='flex flex-col'>
            <h1 className='text-h4 md:text-h2 lg:text-h1 font-medium '>
              {product.title}
            </h1>
            <span className='text-h4 md:-mt-2 sm:text-h3 font-normal'>
              ${product.price}.00
            </span>
          </aside>
          {/* about text */}
          <div className='mt-2 space-y-2'>
            {/* Render dynamically split text */}
            {splitTextAfterStops(product.about, 2).map((line, index) => (
              <p
                key={index}
                className='text-gray-700 text-tiny sm:text-small lg:text-body font-normal leading-relaxed'
              >
                {line}
              </p>
            ))}
          </div>

          {/* color picker */}
          <aside className='flex flex-col gap-1'>
            <p className='text-small text-black'>Colors</p>
            <div className='pl-[2px]'>
              <ColorPicker
                colors={product.colors}
                initialColor={product.colors[0]}
              />
            </div>
          </aside>
          <aside className='flex w-full items-center gap-6 md:gap-8'>
            <Button className='w-64 h-10 md:w-80 lg:h-12'>Add to bag</Button>
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
          <Accordion data={product} menu={menuConfig} extra={extraConfig} />
        </div>
      </section>
    </>
  );
}
