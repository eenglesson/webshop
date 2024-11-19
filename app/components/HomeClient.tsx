'use client';
import { useEffect, useState } from 'react';
import BigImage from './BigImage';
import FilterProducts from './FilterProducts';
import Navbar from './Navbar';
import ProductList from './ProductList';

export default function HomeClient() {
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
        <div className='flex flex-col border-b-[0.5px] pb-4 gap-4'>
          <BigImage />
          <FilterProducts
            onSearch={setSearchQuery}
            onSortChange={setSortOrder}
            productCount={productCount}
          />
        </div>

        <ProductList
          searchQuery={searchQuery}
          sortOrder={sortOrder}
          onCountChange={setProductCount}
        />
      </section>
    </>
  );
}
