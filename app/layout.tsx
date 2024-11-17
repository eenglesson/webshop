'use client';

import './globals.css';
import React, { Suspense } from 'react';
import { Providers } from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div className='max-w-[1400px] mx-auto px-4 sm:px-8'>
          <Providers>
            {/* Wrap children with Suspense */}
            <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
          </Providers>
        </div>
      </body>
    </html>
  );
}
