import clsx from 'clsx';

import Image from 'next/image';

import { CustomComponentProps } from '@shared/lib';

type LogoProps = CustomComponentProps;

export function Logo({ className }: LogoProps) {
  return (
    <div
      className={clsx(
        className,
        'relative flex h-[38px] w-[131px] items-center justify-center'
      )}
    >
      <Image fill={true} src="/images/logo.svg" alt="Nophone logo." />
    </div>
  );
}
