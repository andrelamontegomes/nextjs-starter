import { FeatureSection } from '@/components/ui/feature-section';
import { HeroSection } from '@/components/ui/hero-section';

export default function Home() {
  return (
    <div className='container mx-auto my-12 px-4'>
      <HeroSection />

      <section className='my-12'>
        <h2 className='mb-8 text-center text-3xl font-bold'>Key Features</h2>
        <FeatureSection />
      </section>
    </div>
  );
}
