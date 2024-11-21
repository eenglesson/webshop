'use client'; // This component will run on the client-side
import { useState } from 'react';

type ColorPickerProps = {
  colors: string[];
  initialColor: string;
  onColorSelect: (color: string) => void;
};

export default function ColorPicker({
  colors,
  initialColor,
  onColorSelect,
}: ColorPickerProps) {
  const [selectedColor, setSelectedColor] = useState<string>(initialColor);

  return (
    <aside>
      <div className='flex gap-2'>
        {colors.map((color, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedColor(color);
              onColorSelect(color);
            }}
            className={`relative h-6 w-6 lg:h-8 lg:w-8 rounded-full cursor-pointer ${color} ${
              selectedColor === color
                ? `ring-[1.5px] ring-offset-2 ring-black`
                : ''
            }`}
            style={{ outlineOffset: '-1px' }}
            aria-label={`Select ${color} color`}
          />
        ))}
      </div>
    </aside>
  );
}
