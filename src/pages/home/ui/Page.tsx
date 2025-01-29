import Image from 'next/image';

import { Button, Logo, SvgIcon } from '@shared/ui';

export function Page() {
  return (
    <>
      <div className="fixed left-0 top-0 flex h-[64px] w-full justify-center pt-[26px]">
        <header className="z-10 w-full max-w-[1120px] pl-[20px] pr-[20px]">
          <Logo />
        </header>
      </div>

      <div className="fixed -z-10 flex h-screen w-full items-center justify-center">
        <div className="relative h-[635px] max-h-full w-[352px]">
          <Image
            fill
            className="object-contain"
            src="/images/nophone.png"
            sizes="352px"
            alt="Nophone."
            quality={90}
            priority
          />
        </div>
      </div>

      <div className="absolute left-0 top-0 -z-10 h-screen max-h-[1400px] min-h-[400px] w-full bg-white"></div>

      <main className="relative flex flex-col items-stretch justify-start">
        <h1 className="sr-only">Nophone</h1>

        <div className="relative flex justify-center bg-white text-black mix-blend-exclusion">
          <div className="relative flex h-screen max-h-[1400px] min-h-[400px] w-full max-w-[1120px] flex-col items-center justify-center pl-[20px] pr-[20px]">
            <p className="mb-[60px] text-center text-[40px] font-medium lg:text-[60px]">
              A&nbsp;new era of <s>communication.</s>
            </p>
            <Button href="#more">Learn More</Button>
          </div>
        </div>

        <div
          id="more"
          className="h-screen max-h-[1400px] min-h-[400px] w-full bg-black mix-blend-exclusion"
        ></div>

        <div className="flex h-screen max-h-[1400px] min-h-[400px] justify-center bg-black text-white mix-blend-exclusion">
          <div className="flex w-full max-w-[1120px] justify-center pl-[20px] pr-[20px] lg:mr-[600px]">
            <div className="flex flex-col items-center gap-[10px] lg:flex-row">
              <SvgIcon
                className="mt-0 h-[74px] w-[72px] lg:mt-[20px]"
                icon="no-notifications"
              />
              <p className="max-w-[160px] text-center lg:text-left">
                <span className="text-[90px] leading-none">0</span>
                <br /> Silly
                <br /> Notifications
              </p>
            </div>
          </div>
        </div>

        <div className="h-[10vh] w-full bg-black mix-blend-exclusion"></div>

        <div className="h-[70vh] max-h-[1000px] min-h-[300px] w-full bg-white mix-blend-exclusion"></div>

        <div className="flex h-screen max-h-[1400px] min-h-[400px] items-center justify-center bg-white text-black mix-blend-exclusion">
          <div className="flex w-full max-w-[1120px] justify-center pl-[20px] pr-[20px] lg:ml-[600px]">
            <div className="flex flex-col items-center gap-[10px] lg:flex-row">
              <p className="max-w-[160px] text-center lg:text-right">
                <span className="text-[90px] leading-none">0</span>
                <br /> Unwanted
                <br /> Nightcalls
              </p>
              <SvgIcon
                className="-order-1 mt-0 h-[73px] w-[73px] lg:order-none lg:mt-[20px]"
                icon="no-calls"
              />
            </div>
          </div>
        </div>

        <div className="h-[30vh] max-h-[550px] min-h-[200px] w-full bg-white mix-blend-exclusion"></div>

        <div className="relative flex justify-center bg-white text-black">
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
      </main>
    </>
  );
}
