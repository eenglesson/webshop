// app/page.tsx
'use client';
import { Suspense, useState } from 'react';
import ProductList from './components/ProductList';
import FilterProducts from './components/FilterProducts';
import BigImage from './components/BigImage';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'popular'>(
    'popular'
  );
  const [productCount, setProductCount] = useState<number>(0);

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

        <Suspense fallback={<p>Loading products...</p>}>
          <ProductList
            searchQuery={searchQuery}
            sortOrder={sortOrder}
            onCountChange={setProductCount}
          />
        </Suspense>
      </section>
    </>
  );
}
