'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PackageCheckIcon } from 'lucide-react';
import Image from 'next/image';

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  selectedColor: string;
  selectedSize: string;
}

export default function OrderConfirmationPage() {
  const [orderDetails, setOrderDetails] = useState<CartItem[]>([]);
  const [orderNumber, setOrderNumber] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Generate the order number on the client
    setOrderNumber(`#${Math.floor(100000 + Math.random() * 900000)}`);
  }, []);

  useEffect(() => {
    // Retrieve order details from sessionStorage
    const storedOrder = sessionStorage.getItem('orderDetails');
    if (storedOrder) {
      setOrderDetails(JSON.parse(storedOrder));
    }
  }, []);

  // Calculate the total price of the order
  const calculateTotalPrice = (items: CartItem[]) => {
    return items
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const calculateItemPrice = (item: CartItem) => {
    return (item.price * item.quantity).toFixed(2);
  };

  const totalPrice = calculateTotalPrice(orderDetails);

  if (orderDetails.length === 0) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <p>No order details available.</p>
      </div>
    );
  }

  return (
    <div className='flex justify-center items-center h-full'>
      <Card className='shadow-none rounded-lg flex flex-col p-6 max-w-[600px] w-full'>
        <div className='flex justify-center'>
          <PackageCheckIcon
            className='text-green-600'
            size={64}
            strokeWidth={1.5}
          />
        </div>
        <h1 className='text-h4 font-semibold text-center text-green-600'>
          Thank You for Your Order!
        </h1>

        <p className='text-center text-small'>
          Your order has been successfully placed.
        </p>

        <div className='mt-6'>
          <h2 className='text-h6 font-medium'>Order Summary</h2>
          <div className='mt-4 border-t pt-4 space-y-3'>
            <div className='flex justify-between'>
              <p>Order Number</p>
              <p className='hover:text-primary'>{orderNumber}</p>
            </div>
            <div className='flex justify-between'>
              <p>Total</p>
              <p>${totalPrice}</p>
            </div>
          </div>

          <h3 className='mt-6 text-h6 font-medium'>Items Ordered</h3>
          <ul className='mt-4 space-y-3'>
            {orderDetails.map((item) => (
              <div
                key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
                className='flex w-full items-center pb-3 border-b'
              >
                <div className='flex h-full w-full gap-4'>
                  {/* Product Image */}
                  <div className='relative shrink-0 w-[50px] h-[65px] overflow-hidden rounded-lg'>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes='(max-width: 768px) 100vw, 50vw'
                      className='object-cover'
                    />
                  </div>

                  {/* Product Info */}
                  <div className='flex flex-col w-full justify-between'>
                    <aside className='flex flex-col'>
                      <h2 className='text-body font-medium'>{item.title}</h2>
                      <p className='text-tiny sm:text-small font-normal'>
                        {item.selectedSize}
                      </p>
                      <p className='text-tiny sm:text-small font-normal'>
                        Qty {item.quantity}
                      </p>
                    </aside>
                  </div>

                  {/* Price */}
                  <aside className='flex flex-col justify-center'>
                    <h3 className='text-body font-normal'>
                      ${calculateItemPrice(item)}
                    </h3>
                  </aside>
                </div>
              </div>
            ))}
          </ul>
        </div>

        <div className='mt-6 flex flex-col justify-center sm:flex-row gap-4'>
          <Button onClick={() => router.push('/')}>Continue Shopping</Button>
        </div>
      </Card>
    </div>
  );
}
