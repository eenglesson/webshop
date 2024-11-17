// app/[title]/page.tsx

import React from 'react';
import Navbar from '@/app/components/Navbar';

import { ProductTypes } from '@/app/types';
import { products } from '@/app/data/products';
import ProductDetailsClient from '../ProductDetailsClient';

type ProductDetailsProps = {
  params: any; // Temporarily set to 'any' to see if type mismatch errors go away
};

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
      <ProductDetailsClient product={product} />
    </>
  );
}
