import Navbar from '@/app/components/Navbar';
import { products } from '@/app/data/products';
import { ProductTypes } from '@/app/types';
import Image from 'next/image';

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
      <section className='md:flex md:flex-row flex-col pt-8'>
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

        <div className='md:w-1/2 h-full w-full flex flex-col gap-2 md:gap-4 md:pl-4'>
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
                className='text-gray-700 text-tiny sm:text-small md:text-body font-normal leading-relaxed'
              >
                {line}
              </p>
            ))}
          </div>
          {/* color picker */}
          <aside>
            <p>Color</p>
            <div className='flex gap-2'>
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className={`h-6 w-6 sm:h-8 sm:w-8 rounded-full ${color}`}
                />
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
