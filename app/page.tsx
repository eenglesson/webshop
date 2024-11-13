'use client';
import { Suspense, useState } from 'react';
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
        <Suspense fallback={<p>Loading navbar...</p>}>
          <Navbar setFilter={setFilter} />
        </Suspense>
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
