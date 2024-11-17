'use client';

import { ShoppingBag, User } from 'lucide-react';
import React from 'react';
import { useCart } from '../context/CartContext'; // Import useCart
import Link from 'next/link'; // Import Link for navigation

export default function ShoppingBagUser() {
  const { cartItems } = useCart(); // Access cartItems from context

  const orderCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className='flex gap-6'>
      <User className='cursor-pointer' />
      <aside className='relative group'>
        <Link href='/cart'>
          <ShoppingBag className='cursor-pointer' />
          {orderCount > 0 && (
            <span className='absolute top-4 -right-2 bg-red-500 text-white text-[12px] font-medium rounded-md w-[18px] h-[18px] flex items-center justify-center cursor-pointer group-hover:bg-black transition-transform duration-150'>
              {orderCount}
            </span>
          )}
        </Link>
      </aside>
    </div>
  );
}
