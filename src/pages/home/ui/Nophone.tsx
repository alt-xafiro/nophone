import Image from 'next/image';

export function Nophone() {
  return (
    <>
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
    </>
  );
}
