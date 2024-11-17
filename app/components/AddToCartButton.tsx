// components/AddToCartButton.tsx

'use client';

import { Button } from '@/components/ui/button';
import { ProductTypes } from '@/app/types';
import React from 'react';
import { useCart } from '../context/CartContext';

interface AddToCartButtonProps {
  product: ProductTypes;
  selectedColor: string;
  selectedSize: string;
}

export default function AddToCartButton({
  product,
  selectedColor,
  selectedSize,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const handleAddToBag = () => {
    if (!selectedColor || !selectedSize) {
      console.log('Please select color and size');
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
    console.log('Added to bag:', cartItem);
  };

  return (
    <Button className='w-64 h-10 md:w-80 lg:h-12' onClick={handleAddToBag}>
      Add to bag
    </Button>
  );
}
