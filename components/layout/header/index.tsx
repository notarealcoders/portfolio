'use client';

import Link from 'next/link';
import { NavLinks } from './nav-links';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-8 flex items-center space-x-2">
          <span className="text-xl font-bold">Portfolio</span>
        </Link>
        <nav className="flex flex-1 items-center justify-between">
          <NavLinks />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}