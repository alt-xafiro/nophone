import type { NextConfig } from 'next';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';

const nextConfig: NextConfig = {
  images: {
    contentDispositionType: 'inline',
    deviceSizes: [...imageConfigDefault.deviceSizes, 352, 704]
  }
};

export default nextConfig;
