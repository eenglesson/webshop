import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <div className='max-w-[1400px] mx-auto px-4 sm:px-8'>{children}</div>
      </body>
    </html>
  );
}
