import clsx from 'clsx';

import { CustomComponentProps } from '@shared/lib';

type FooterProps = CustomComponentProps;

export function Footer({ className }: FooterProps) {
  return (
    <div
      className={clsx(
        className,
        'relative flex justify-center bg-white text-black'
      )}
    >
      <div className="relative flex h-screen max-h-[1440px] min-h-[200px] w-full max-w-[1120px] flex-col items-center justify-center pl-[20px] pr-[20px]">
        <p className="text-center text-[40px] lg:text-[50px]">
          Turn&nbsp;off the&nbsp;noise,
          <br className="hidden lg:block" />{' '}
          <span className="font-semibold">
            get a&nbsp;no<s>phone.</s>
          </span>
        </p>
      </div>
    </div>
  );
}
