import clsx from 'clsx';

import { CustomComponentProps } from '@shared/lib';
import { Logo } from '@shared/ui';

type HeaderProps = CustomComponentProps;

export function Header({ className }: HeaderProps) {
  return (
    <div
      className={clsx(
        className,
        'fixed left-0 top-0 flex h-[64px] w-full justify-center pt-[26px]'
      )}
    >
      <header className="z-10 w-full max-w-[1120px] pl-[20px] pr-[20px]">
        <Logo />
      </header>
    </div>
  );
}
