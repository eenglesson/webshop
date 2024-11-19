// app/layout.tsx
'use client';
import './globals.css';
import React, { Suspense } from 'react';
import { Providers } from './providers';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Suspense fallback={<p>Loading...</p>}>
            <Navbar />
          </Suspense>
          <div className='max-w-[1400px] mt-4 sm:mt-8 mx-auto px-4 sm:px-8'>
            {children}
            <Toaster position='bottom-right' richColors />
          </div>
        </Providers>
      </body>
    </html>
  );
}
