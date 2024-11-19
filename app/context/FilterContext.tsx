// context/FilterContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

type FilterType = 'All' | 'Apparel' | 'Accessories';

type FilterContextType = {
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [filter, setFilter] = useState<FilterType>('All');
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Sync filter state with URL query parameters
  useEffect(() => {
    const filterParam = searchParams.get('filter') as FilterType;
    if (pathname === '/') {
      setFilter(filterParam || 'All');
    }
  }, [pathname, searchParams]);

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};
