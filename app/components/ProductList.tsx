'use client';
import React from 'react';
import CardProduct from './CardProduct';
import { products } from '../data/products';
import { Product } from '../types';

type SortOrder = 'asc' | 'desc' | 'popular';

export default function ProductList({
  filter,
  searchQuery,
  sortOrder,
}: {
  filter: 'All' | 'Apparel' | 'Accessories';
  searchQuery: string;
  sortOrder: SortOrder;
}) {
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

  return (
    <section className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 pb-12'>
      {filteredProducts.map((product: Product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </section>
  );
}
