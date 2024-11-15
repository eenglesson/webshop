'use client';
import { Suspense, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import FilterProducts from './components/FilterProducts';
import BigImage from './components/BigImage';

export default function Home() {
  const [filter, setFilter] = useState<'All' | 'Apparel' | 'Accessories'>(
    'All'
  );
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'popular'>(
    'popular'
  );
  const [productCount, setProductCount] = useState<number>(0);

  // Use `window.location.search` to get the query parameters
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const filterParam = params.get('filter') as
      | 'All'
      | 'Apparel'
      | 'Accessories';
    setFilter(filterParam || 'All');
  }, []); // Only run on mount

  return (
    <>
      <section className='flex flex-col gap-8'>
        <Suspense fallback={<p>Loading navbar...</p>}>
          <Navbar setFilter={setFilter} />
        </Suspense>
        <div className='flex flex-col border-b-[0.5px] pb-4 gap-4'>
          <BigImage />
          <FilterProducts
            onSearch={setSearchQuery}
            onSortChange={setSortOrder}
            productCount={productCount}
            filter={filter}
          />
        </div>

        <Suspense fallback={<p>Loading products...</p>}>
          <ProductList
            filter={filter}
            searchQuery={searchQuery}
            sortOrder={sortOrder}
            onCountChange={setProductCount}
          />
        </Suspense>
      </section>
    </>
  );
}
