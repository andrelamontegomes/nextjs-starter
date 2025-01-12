import { FeatureSection } from '@/components/feature-section';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <div className='container mx-auto my-12 flex-grow px-4'>
        <HeroSection />

        <section className='my-12'>
          <h2 className='mb-8 text-center text-3xl font-bold'>Key Features</h2>
          <FeatureSection />
        </section>
      </div>
      <Footer />
    </div>
  );
}
