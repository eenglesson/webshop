'use client'; // Client Component for interactivity
import { useState, cloneElement, ReactElement } from 'react';

type InteractiveIconProps = {
  children: ReactElement; // Icon component passed as children
  initialColor?: string; // Default color (e.g., 'text-gray-500')
  activeColor?: string; // Color when active (e.g., 'text-red-600 fill-red-600')
  hoverColor?: string; // Color on hover (e.g., 'hover:text-red-600 hover:fill-red-600')
  size?: string; // Tailwind size classes (e.g., 'w-6 h-6')
  onClick?: () => void; // Optional callback on click
  strokeWidth?: number; // Stroke width for SVG icons
};

export default function InteractiveIcon({
  children,
  initialColor = 'text-gray-500',
  activeColor = 'text-red-600',
  hoverColor = 'hover:text-red-600',
  size = 'w-6 h-6',
  strokeWidth = 2,
  onClick,
}: InteractiveIconProps) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    if (onClick) onClick(); // Trigger optional click callback
  };

  // Clone the child to pass strokeWidth and className dynamically
  const clonedIcon = cloneElement(children, {
    strokeWidth,
    className: `${size} ${isActive ? activeColor : initialColor} ${hoverColor}`,
  });

  return (
    <div onClick={handleClick} className='cursor-pointer'>
      {clonedIcon}
    </div>
  );
}
