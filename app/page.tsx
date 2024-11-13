'use client';
import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import FilterProducts from './components/FilterProducts';

export default function Home() {
  const [filter, setFilter] = useState<'All' | 'Apparel' | 'Accessories'>(
    'All'
  );
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'popular'>(
    'popular'
  );

  return (
    <>
      <section className='flex flex-col gap-12'>
        <Navbar setFilter={setFilter} />
        <FilterProducts onSearch={setSearchQuery} onSortChange={setSortOrder} />
        <ProductList
          filter={filter}
          searchQuery={searchQuery}
          sortOrder={sortOrder}
        />
      </section>
    </>
  );
}
