import clsx from 'clsx';

import { CustomComponentProps } from '@shared/lib';

type ButtonProps = CustomComponentProps & {
  href?: string;
};

export function Button({ children, className, href }: ButtonProps) {
  return (
    <p className={clsx(className, 'flex')}>
      <a
        className={clsx(
          className,
          'inline-block min-h-[60px] min-w-[150px] max-w-[200px] rounded-[6px] pb-[15px] pl-[40px] pr-[40px] pt-[15px] text-center',
          'bg-black transition-colors hover:bg-zinc-900 active:bg-zinc-800',
          'font-semibold leading-[30px] text-white',
          'cursor-pointer'
        )}
        href={href}
      >
        {children}
      </a>
    </p>
  );
}
