// components/AddToCartButton.tsx

'use client';
import { useRouter } from 'next/navigation'; // Updated import
import { Button } from '@/components/ui/button';
import { ProductTypes } from '@/app/types';
import React from 'react';

import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

type AddToCartButtonProps = {
  product: ProductTypes;
  selectedColor: string;
  selectedSize: string;
};

export default function AddToCartButton({
  product,
  selectedColor,
  selectedSize,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const router = useRouter(); // Now using from 'next/navigation'

  const handleAddToBag = () => {
    if (!selectedColor || !selectedSize) {
      toast.error('Please select a color and size.');
      return;
    }

    const cartItem = {
      id: product.id.toString(),
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: 1,
      selectedColor,
      selectedSize,
    };

    addToCart(cartItem);

    // Trigger notification
    toast('Product has been added', {
      description: `${product.title} (${cartItem.selectedSize})`,
      action: {
        label: 'View Cart',
        onClick: () => {
          router.push('/cart');
        },
      },
    });
  };

  return (
    <Button className='w-64 h-10 md:w-80 lg:h-12' onClick={handleAddToBag}>
      Add to bag
    </Button>
  );
}
