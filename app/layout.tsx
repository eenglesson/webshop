'use client';

import './globals.css';
import React from 'react';
import { Providers } from './providers';
import { Toaster } from 'sonner';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div className='max-w-[1400px] mx-auto px-4 sm:px-8'>
          <Providers>{children}</Providers>
          <Toaster position='bottom-right' richColors />
        </div>
      </body>
    </html>
  );
}
