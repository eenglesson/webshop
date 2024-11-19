// app/providers.tsx
'use client';

import { CartProvider } from './context/CartContext';
import { FilterProvider } from './context/FilterContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <FilterProvider>{children}</FilterProvider>
    </CartProvider>
  );
}
