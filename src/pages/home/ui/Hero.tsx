import clsx from 'clsx';

import { CustomComponentProps } from '@shared/lib';
import { Button } from '@shared/ui';

type HeroProps = CustomComponentProps;

export function Hero({ className }: HeroProps) {
  return (
    <div
      className={clsx(
        className,
        'relative flex justify-center bg-white text-black mix-blend-exclusion'
      )}
    >
      <div className="relative flex h-screen max-h-[1400px] min-h-[400px] w-full max-w-[1120px] flex-col items-center justify-center pl-[20px] pr-[20px]">
        <p className="mb-[60px] text-center text-[40px] font-medium lg:text-[60px]">
          A&nbsp;new era of <s>communication.</s>
        </p>
        <Button href="#more">Learn More</Button>
      </div>
    </div>
  );
}
