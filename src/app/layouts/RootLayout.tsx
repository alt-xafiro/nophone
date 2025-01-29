import clsx from 'clsx';

import { spaceGrotesk } from '@shared/ui';

import '../styles/globals.css';

export function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full min-h-full">
      <body
        className={clsx(
          spaceGrotesk.className,
          'h-full min-h-full w-full min-w-[375px]',
          'break-words bg-black text-white'
        )}
      >
        {children}
      </body>
    </html>
  );
}
