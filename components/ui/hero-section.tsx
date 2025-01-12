import { Button } from '@/components/button';

export const HeroSection = () => {
  return (
    <div className='hero bg-base-200 py-12'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>Welcome to NextJS Template</h1>
          <p className='py-6'>
            A modern, responsive template built with NextJS, TypeScript, and TailwindCSS. Start
            building your next project with confidence.
          </p>
          <Button text='Get Started' />
        </div>
      </div>
    </div>
  );
};
