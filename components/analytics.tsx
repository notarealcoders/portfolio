'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const log = `Page Loaded: ${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ''}`;
    setLogs(prev => [...prev, log]);
    console.log(`%c${log}`, 'color: #666; font-style: italic;');
  }, [pathname, searchParams]);

  return null;
}