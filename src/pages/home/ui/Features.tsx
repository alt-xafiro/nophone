import { SvgIcon } from '@shared/ui';

export function Features() {
  return (
    <>
      <div
        id="more"
        className="h-screen max-h-[1400px] min-h-[400px] w-full transform-gpu bg-black mix-blend-exclusion"
      ></div>

      <div className="flex h-screen max-h-[1400px] min-h-[400px] transform-gpu justify-center bg-black text-white mix-blend-exclusion">
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

      <div className="h-[10vh] w-full transform-gpu bg-black mix-blend-exclusion"></div>

      <div className="h-[70vh] max-h-[1000px] min-h-[300px] w-full transform-gpu bg-white mix-blend-exclusion"></div>

      <div className="flex h-screen max-h-[1400px] min-h-[400px] transform-gpu items-center justify-center bg-white text-black mix-blend-exclusion">
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

      <div className="h-[30vh] max-h-[550px] min-h-[200px] w-full transform-gpu bg-white mix-blend-exclusion"></div>
    </>
  );
}
