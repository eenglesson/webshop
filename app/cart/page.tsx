import { Suspense } from 'react';
import { CartPageClient } from './CartPageClient';

export default function CartPage() {
  return (
    <>
      <h1 className='text-h4 sm:text-h3 mt-8 font-semibold mb-4'>
        Shopping Cart
      </h1>
      <Suspense fallback={<p className='text-gray-500'>Loading cart...</p>}>
        <CartPageClient />
      </Suspense>
    </>
  );
}
