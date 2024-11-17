import './globals.css';
import { Providers } from './providers';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <div className='max-w-[1400px] mx-auto px-4 sm:px-8'>
          {' '}
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
