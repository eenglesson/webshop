'use client';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ListFilter } from 'lucide-react';
import React, { ChangeEvent, useState, useRef, useEffect } from 'react';

type FilterProductsProps = {
  onSearch: (query: string) => void;
  onSortChange: (sortOrder: 'asc' | 'desc' | 'popular') => void;
  productCount: number;
  filter: 'All' | 'Apparel' | 'Accessories';
};

export default function FilterProducts({
  onSearch,
  onSortChange,
  productCount,
  filter,
}: FilterProductsProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSortOrder, setSelectedSortOrder] = useState<
    'asc' | 'desc' | 'popular'
  >('popular');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortChange = (sortOrder: 'asc' | 'desc' | 'popular') => {
    setSelectedSortOrder(sortOrder);
    onSortChange(sortOrder);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !filterRef.current?.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className='flex gap-6 items-center relative justify-between'>
      <div className='flex gap-2 h-full items-center'>
        <div ref={filterRef} className='flex items-center gap-4'>
          <ListFilter
            size={28}
            className={`cursor-pointer hover:scale-105 transition-transform duration-100 ${
              isDropdownOpen ? 'scale-105' : 'scale-100'
            }`}
            onClick={toggleDropdown}
          />
        </div>

        {isDropdownOpen && (
          <Card
            ref={dropdownRef}
            className='absolute top-10 left-0 flex flex-col bg-white shadow-md gap-2 rounded-md p-2 w-40 z-10'
          >
            <p
              onClick={() => handleSortChange('popular')}
              className={`cursor-pointer text-small p-2 rounded-md ${
                selectedSortOrder === 'popular' ? 'bg-gray' : 'hover:bg-gray'
              }`}
            >
              Most Popular
            </p>

            <p
              onClick={() => handleSortChange('asc')}
              className={`cursor-pointer text-small p-2 rounded-md ${
                selectedSortOrder === 'asc' ? 'bg-gray' : 'hover:bg-gray'
              }`}
            >
              Price: Low to High
            </p>
            <p
              onClick={() => handleSortChange('desc')}
              className={`cursor-pointer text-small p-2 rounded-md ${
                selectedSortOrder === 'desc' ? 'bg-gray' : 'hover:bg-gray'
              }`}
            >
              Price: High to Low
            </p>
          </Card>
        )}

        <aside className='flex h-fit items-end gap-0.5'>
          <p className='text-[18px] sm:text-[24px] leading-[0.9]'>
            {productCount}
          </p>
          <p className='leading-none text-[12px] sm:text-[14px]'>{filter}</p>
        </aside>
      </div>
      <div className='flex justify-center w-48 items-center h-[30px]'>
        <Input
          className='shadow-none w-full h-full placeholder:text-small text-small'
          type='search'
          placeholder='Search for a product...'
          onChange={handleSearchChange}
        />
      </div>
    </section>
  );
}
