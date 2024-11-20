// components/ProductList.tsx
'use client';
import React, { useEffect } from 'react';
import CardProduct from './CardProduct';
import { products } from '../data/products';
import { ProductTypes } from '../types';
import { useFilter } from '../context/FilterContext';

type SortOrder = 'asc' | 'desc' | 'popular';

export default function ProductList({
  searchQuery,
  sortOrder,
  onCountChange,
}: {
  searchQuery: string;
  sortOrder: SortOrder;
  onCountChange: (count: number) => void;
}) {
  const { filter } = useFilter();

  const filteredProducts = products
    .filter((product) => {
      const matchesCategory =
        filter === 'All' ||
        (filter === 'Apparel' && !product.isAccessory) ||
        (filter === 'Accessories' && product.isAccessory);

      const matchesSearch =
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortOrder === 'popular') {
        return a.id - b.id;
      } else return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });

  useEffect(() => {
    onCountChange(filteredProducts.length);
  }, [filteredProducts.length, onCountChange]);

  return (
    <section className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
      {filteredProducts.map((product: ProductTypes) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </section>
  );
}
