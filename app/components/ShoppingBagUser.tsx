import { ShoppingBag, User } from 'lucide-react';
import React from 'react';

const orderCount = 1;

export default function ShoppingBagUser() {
  return (
    <div className='flex gap-6 '>
      <User className='cursor-pointer' />
      <aside className='relative group'>
        <ShoppingBag className='cursor-pointer' />
        {orderCount > 0 && (
          <span className='absolute top-4 -right-2 bg-red-500  text-white text-[12px] font-medium rounded-md w-[18px] h-[18px] flex items-center justify-center cursor-pointer group-hover:bg-black transition-transform duration-150 '>
            {orderCount}
          </span>
        )}
      </aside>
    </div>
  );
}
