'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ThemeController } from './theme-controller';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition-colors duration-200 ${
        isActive ? 'text-primary font-medium' : 'hover:text-primary'
      }`}
    >
      {children}
    </Link>
  );
}

export const Header = () => {
  return (
    <header className='flex items-center justify-between border-b px-3 py-2 sm:px-6 sm:py-4'>
      <div className='w-16 sm:w-24'>
        <Link
          href='/'
          className='text-xl font-bold'
        >
          Logo
        </Link>
      </div>

      <nav className='flex gap-6'>
        <NavLink href='/'>Home</NavLink>
        <NavLink href='/about'>About</NavLink>
        <NavLink href='/contact'>Contact</NavLink>
      </nav>

      <div className='flex w-16 justify-end sm:w-24'>
        <ThemeController />
      </div>
    </header>
  );
};
