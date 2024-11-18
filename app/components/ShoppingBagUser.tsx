'use client';

import { ShoppingBag, User } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';

export default function ShoppingBagUser() {
  const { cartItems } = useCart(); // Access cartItems from the context

  // Calculate total items dynamically
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className='flex gap-6'>
      <User className='cursor-pointer' />
      <aside className='relative group'>
        <Link href='/cart'>
          <ShoppingBag className='cursor-pointer' />
          {/* Render badge dynamically */}
          {totalItems > 0 && (
            <span className='absolute top-4 group-hover:bg-black -right-2 bg-red-500 text-white text-[12px] font-medium rounded-md w-[18px] h-[18px] flex items-center justify-center transition-transform duration-100'>
              {totalItems}
            </span>
          )}
        </Link>
      </aside>
    </div>
  );
}
