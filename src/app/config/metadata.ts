import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://nophone.vercel.app'),
  title: 'Nophone',
  description: 'A new era of communication.',
  authors: [
    {
      name: 'Safiro',
      url: 'https://github.com/alt-xafiro'
    }
  ],
  icons: [
    '/favicon.ico',
    {
      type: 'image/svg+xml',
      sizes: 'any',
      url: '/favicon.svg'
    },
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png'
    }
  ],
  manifest: '/manifest.webmanifest',
  openGraph: {
    siteName: 'Nophone',
    url: 'https://nophone.vercel.app',
    images: [
      {
        url: 'https://nophone.vercel.app/opengraph-image.png',
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    images: ['https://nophone.vercel.app/opengraph-image.png']
  }
};
