'use client';

import { useCart } from '../context/CartContext';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckIcon } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'; // Import ShadCN select components
import { useRouter } from 'next/navigation';

export function CartPageClient() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const router = useRouter();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className='flex flex-col md:flex-row gap-8'>
      <aside className='md:w-1/2 max-h-[1000px] overflow-y-auto'>
        {cartItems.length > 0 ? (
          <ul className='space-y-4'>
            {cartItems.map((item) => (
              <Card
                key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
                className='flex w-full shadow-none items-center border p-4 rounded-lg'
              >
                <div className='flex h-full w-full gap-4'>
                  {/* Product Image */}
                  <div
                    className='relative w-32 h-32 overflow-hidden rounded-lg'
                    onClick={() => router.push(`/productDetails/${item.title}`)}
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
                        className='text-h5 w-fit font-medium hover:underline decoration-[1.5px] underline-offset-1 cursor-pointer'
                        onClick={() =>
                          router.push(`/productDetails/${item.title}`)
                        }
                      >
                        {item.title}
                      </h2>
                      <p className='text-small text-gray-500'>
                        {item.selectedSize}
                      </p>

                      {/* Quantity Select Dropdown */}
                      <div className='flex items-center gap-2'>
                        <p className='text-small'>Qty</p>
                        <Select
                          value={String(item.quantity)}
                          onValueChange={(value) =>
                            updateQuantity(
                              item.id,
                              item.selectedColor,
                              item.selectedSize,
                              Number(value)
                            )
                          }
                        >
                          <SelectTrigger className='w-fit border-none focus:ring-0 h-fit py-0 px-1 gap-1 bg-transparent shadow-none'>
                            <SelectValue placeholder='Qty' />
                          </SelectTrigger>
                          <SelectContent
                            position='popper'
                            className='shadow-none text-small'
                          >
                            <SelectGroup>
                              <SelectLabel>Quantity</SelectLabel>
                              {[...Array(10)].map((_, index) => (
                                <SelectItem
                                  className='cursor-pointer text-small'
                                  key={index + 1}
                                  value={String(index + 1)}
                                >
                                  {index + 1}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </aside>
                    <div className='flex items-center gap-1'>
                      <CheckIcon color='rgb(34 197 94)' />
                      <p className='text-small font-light text-darkGray'>
                        in stock
                      </p>
                    </div>
                  </div>

                  {/* Price and Remove Button */}
                  <aside className='flex flex-col items-end justify-between'>
                    <p className='text-h6 font-medium'>
                      ${item.quantity * item.price}.00
                    </p>

                    <Button
                      variant='link'
                      className='bg-transparent p-0 text-primary shadow-none hover:text-red-500 hover:no-underline'
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
              </Card>
            ))}
          </ul>
        ) : (
          <p className='text-gray-500'>Your cart is currently empty.</p>
        )}
      </aside>

      {/* Order Summary */}
      {cartItems.length > 0 && (
        <aside className='w-full md:w-1/2 m-auto'>
          <Card className='p-6 shadow-none'>
            <h2 className='text-h5 font-medium mb-4'>Order Summary</h2>
            <div className='flex flex-col gap-4'>
              <div className='flex justify-between'>
                <p className='text-small'>Subtotal</p>
                <p className='text-small'>${totalPrice}.00</p>
              </div>
              <div className='flex justify-between'>
                <p className='text-small'>Shipping</p>
                <p className='text-small'>Free</p>
              </div>
              <div className='flex justify-between'>
                <p className='text-small'>Estimated Tax</p>
                <p className='text-small'>$0.00</p>
              </div>
              <div className='flex justify-between'>
                <p className='text-small font-medium'>Total</p>
                <p className='text-small font-medium'>${totalPrice}.00</p>
              </div>
              <Button className='w-full h-10'>Proceed to Checkout</Button>
            </div>
          </Card>
        </aside>
      )}
    </div>
  );
}