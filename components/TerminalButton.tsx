'use client';

import { Terminal as TerminalIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Terminal } from './terminal';
import { useState } from 'react';
import { useTerminalContext } from '@/hooks/use-terminal';

export function TerminalButton() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const { isHeroTerminalVisible } = useTerminalContext();

  const toggleTerminal = () => {
    setIsTerminalOpen((prev) => !prev);
  };

  // Don't render the button if hero terminal is visible
  if (isHeroTerminalVisible) {
    return null;
  }

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 z-50 hidden md:flex"
        onClick={toggleTerminal}
      >
        <TerminalIcon className="h-4 w-4" />
      </Button>

      {isTerminalOpen && <Terminal onClose={() => setIsTerminalOpen(false)} />}
    </>
  );
}