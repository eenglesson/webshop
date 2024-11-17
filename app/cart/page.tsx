'use client';

import React, { Suspense } from 'react';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';
import { useSearchParams } from 'next/navigation';

export default function CartPage() {
  const { cartItems } = useCart();
  const searchParams = useSearchParams();

  const filter = searchParams.get('filter'); // Example: Get a 'filter' query param

  const filteredItems = filter
    ? cartItems.filter((item) =>
        item.title.toLowerCase().includes(filter.toLowerCase())
      )
    : cartItems;

  return (
    <>
      <Navbar />
      <div className='max-w-3xl mx-auto mt-8'>
        <h1 className='text-2xl font-bold mb-4'>Your Cart</h1>
        <Suspense fallback={<p>Loading...</p>}>
          {filteredItems.length > 0 ? (
            <ul className='space-y-4'>
              {filteredItems.map((item) => (
                <li
                  key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
                  className='flex items-center justify-between border p-4 rounded-lg'
                >
                  <div className='flex items-center gap-4'>
                    <img
                      src={item.image}
                      alt={item.title}
                      className='w-16 h-16 object-cover rounded-lg'
                    />
                    <div>
                      <h2 className='text-lg font-medium'>{item.title}</h2>
                      <p className='text-sm text-gray-500'>
                        Color: {item.selectedColor} | Size: {item.selectedSize}
                      </p>
                      <p className='text-sm font-bold text-gray-800'>
                        ${item.price}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className='text-gray-500'>Your cart is currently empty.</p>
          )}
        </Suspense>
      </div>
    </>
  );
}
