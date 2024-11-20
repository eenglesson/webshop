'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckIcon } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { Input } from '@/components/ui/input';

export default function SummaryForCheckout() {
  const [showSummary, setShowSummary] = useState(false); // Fix state declaration
  const { cartItems, removeFromCart } = useCart();
  const router = useRouter();

  const handleToggleSummary = () => {
    setShowSummary((prev) => !prev);
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <Card className='flex shadow-none h-fit p-4 flex-col'>
      {/* Your Order Section */}
      <aside className='w-full'>
        <div className='flex items-center justify-between border-b pb-4'>
          <h2 className='text-lg font-semibold'>Your Order</h2>
          <Button
            onClick={handleToggleSummary}
            variant='link'
            className='text-primary'
          >
            {showSummary ? 'Hide summary' : 'Show full summary'}
          </Button>
        </div>

        {/* Cart Items List */}
        {showSummary && (
          <div className='border-b py-2'>
            <ul className='pt-4'>
              {cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
                  className='flex w-full items-center pb-4'
                >
                  <div className='flex h-full w-full gap-4'>
                    {/* Product Image */}
                    <div
                      className='relative shrink-0 w-[70px] h-[85px] sm:w-[80px] sm:h-[95px] overflow-hidden rounded-lg'
                      onClick={() =>
                        router.push(`/productDetails/${item.title}`)
                      }
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes='(max-width: 768px) 100vw, 50vw'
                        className='object-cover cursor-pointer hover:scale-105 transition-transform duration-300'
                      />
                    </div>

                    {/* Product Info */}
                    <div className='flex flex-col w-full justify-between'>
                      <aside className='flex flex-col'>
                        <h2
                          className='text-body lg:text-h5 font-medium hover:underline cursor-pointer'
                          onClick={() =>
                            router.push(`/productDetails/${item.title}`)
                          }
                        >
                          {item.title}
                        </h2>
                        <p className='text-tiny sm:text-small font-normal'>
                          {item.selectedSize}
                        </p>
                        <p className='text-tiny sm:text-small font-normal'>
                          Qty {item.quantity}
                        </p>
                      </aside>
                      <div className='flex items-center gap-1'>
                        <CheckIcon color='rgb(34 197 94)' size={18} />
                        <p className='text-tiny sm:text-small font-light text-darkGray'>
                          In stock
                        </p>
                      </div>
                    </div>

                    {/* Price and Remove Button */}
                    <aside className='flex flex-col items-end justify-between'>
                      <h3 className='text-body lg:text-h6 font-medium'>
                        ${item.quantity * item.price}.00
                      </h3>
                      <Button
                        variant='link'
                        className='bg-transparent p-0 h-[24px] text-primary hover:text-red-500'
                        onClick={() =>
                          removeFromCart(
                            item.id,
                            item.selectedColor,
                            item.selectedSize
                          )
                        }
                      >
                        Remove
                      </Button>
                    </aside>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        )}
      </aside>

      {/* Order Summary */}
      <aside className='w-full mt-4'>
        <div className='shadow-none'>
          {/* Discount Code Section */}
          <div className='flex flex-col gap-2 mb-4'>
            <label htmlFor='discountCode' className='text-small font-medium'>
              Discount Code
            </label>
            <div className='flex gap-4'>
              <Input
                id='discountCode'
                type='text'
                placeholder='Enter code'
                className='shadow-none text-small placeholder:text-small placeholder:text-darkGray'
              />
              <Button>Apply</Button>
            </div>
          </div>

          <h2 className='text-h6 lg:text-h5 font-medium mb-4'>Order Summary</h2>
          <div className='flex flex-col gap-4'>
            {/* Subtotal Section */}
            <div className='flex justify-between'>
              <p className='text-small'>Subtotal</p>
              <p className='text-small'>${totalPrice}.00</p>
            </div>
            {/* Shipping Section */}
            <div className='flex justify-between'>
              <p className='text-small'>Shipping</p>
              <p className='text-small'>Free</p>
            </div>
            {/* Estimated Tax Section */}
            <div className='flex justify-between'>
              <p className='text-small'>Estimated Tax</p>
              <p className='text-small'>$0.00</p>
            </div>

            {/* Total Section */}
            <div className='flex justify-between pt-4 border-t'>
              <p className='text-small font-medium'>Total</p>
              <p className='text-small font-medium'>${totalPrice}.00</p>
            </div>
          </div>
        </div>
      </aside>
    </Card>
  );
}
