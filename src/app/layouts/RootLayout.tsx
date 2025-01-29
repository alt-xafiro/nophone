import clsx from 'clsx';

import { spaceGrotesk } from '@shared/ui';

import '../styles/globals.css';

export function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full min-h-full scroll-smooth">
      <body
        className={clsx(
          'h-full min-h-full w-full min-w-[375px]',
          'bg-white',
          spaceGrotesk.className,
          'break-wordstext-[22px] text-black'
        )}
      >
        {children}
      </body>
    </html>
  );
}
