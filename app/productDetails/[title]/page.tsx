import Navbar from '@/app/components/Navbar';
import { products } from '@/app/data/products';
import { Product } from '@/app/types';
import Image from 'next/image';

interface ProductDetailsProps {
  params: any; // Temporarily set to 'any' to see if type mismatch errors go away
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsProps) {
  const { title } = await params;

  // Find the product by title (you could use an ID instead if it's more unique)
  const product: Product | undefined = products.find(
    (item) => item.title === decodeURIComponent(title)
  );

  if (!product) {
    return <p>Product not found.</p>;
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

        <div className='md:w-1/2 h-full w-full md:pl-4'>
          <h1 className='text-h4 md:text-h2 lg:text-h1 font-medium'>
            {product.title}
          </h1>
          <span className='text-small sm:text-body font-medium'>
            ${product.price}.00
          </span>
          <p className=''>{product.about}</p>
        </div>
      </section>
    </>
  );
}
