// components/SizeSelector.tsx

'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';

type SizeSelectorProps = {
  sizes: string[];
  onSizeSelect: (size: string) => void;
};

export default function SizeSelector({
  sizes,
  onSizeSelect,
}: SizeSelectorProps) {
  const [selectedSize, setSelectedSize] = React.useState('');

  React.useEffect(() => {
    if (sizes.length === 1) {
      setSelectedSize(sizes[0]);
      onSizeSelect(sizes[0]);
    }
  }, [sizes, onSizeSelect]);

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
    onSizeSelect(size);
  };

  return (
    <div>
      <div className='text-sm mb-2 font-medium'>Sizes</div>
      <div className='flex flex-wrap gap-2'>
        {sizes.map((size) => (
          <Button
            key={size}
            className={`text-sm sm:text-md font-normal ${
              selectedSize === size
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-black border-gray-300'
            } border shadow-none hover:border-primary hover:bg-primary hover:text-white rounded-md p-2 sm:p-4 transition duration-300`}
            aria-selected={selectedSize === size}
            onClick={() => handleSizeClick(size)}
          >
            {size}
          </Button>
        ))}
      </div>
    </div>
  );
}
