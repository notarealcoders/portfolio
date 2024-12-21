'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '@/config/navigation';

export function NavLinks() {
  const pathname = usePathname();
  
  return (
    <div className="flex items-center space-x-6">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`text-sm font-medium transition-colors hover:text-foreground/80 ${
            pathname === item.href ? 'text-foreground' : 'text-foreground/60'
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}