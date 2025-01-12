import { ThemeController } from './theme-controller';

export const Header = () => {
  return (
    <header className='flex items-center justify-between px-3 py-2 sm:px-6 sm:py-4'>
      <div className='w-16 sm:w-24'>{/* Left side empty for balance */}</div>
      <h1 className='mx-2 truncate text-xl font-bold sm:text-2xl'>NextJS Template</h1>
      <div className='w-16 sm:w-24'>
        <ThemeController />
      </div>
    </header>
  );
};
