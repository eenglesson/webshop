'use client';
import { Suspense, useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
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

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname === '/') {
      const filterParam = searchParams.get('filter') as
        | 'All'
        | 'Apparel'
        | 'Accessories';
      setFilter(filterParam || 'All');
    }
  }, [pathname, searchParams]);

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

        <ProductList
          filter={filter}
          searchQuery={searchQuery}
          sortOrder={sortOrder}
          onCountChange={setProductCount}
        />
      </section>
    </>
  );
}
