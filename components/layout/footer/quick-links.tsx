import Link from 'next/link';
import { navigation } from '@/config/navigation';

export function QuickLinks() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Quick Links</h3>
      <ul className="space-y-2">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}