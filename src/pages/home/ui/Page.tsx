import { Features } from './Features';
import { Footer } from './Footers';
import { Header } from './Header';
import { Hero } from './Hero';
import { Nophone } from './Nophone';

export function Page() {
  return (
    <>
      <Header />
      <Nophone />

      <main className="relative flex flex-col items-stretch justify-start">
        <h1 className="sr-only">Nophone</h1>

        <Hero />
        <Features />
        <Footer />
      </main>
    </>
  );
}
