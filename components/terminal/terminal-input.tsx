'use client';

import { useRef, useEffect, KeyboardEvent } from 'react';
import { cn } from '@/lib/utils';

interface TerminalInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onNavigateHistory: (direction: 'up' | 'down') => string;
}

export function TerminalInput({
  value,
  onChange,
  onSubmit,
  onNavigateHistory
}: TerminalInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value.trim()) {
      onSubmit();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      onChange(onNavigateHistory('up'));
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      onChange(onNavigateHistory('down'));
    }
  };

  return (
    <div className="flex items-center group">
      <span className={cn(
        "text-sm font-mono mr-2",
        "text-emerald-500 dark:text-emerald-400",
        "group-focus-within:text-emerald-600 dark:group-focus-within:text-emerald-300",
        "transition-colors duration-200"
      )}>
        {'>'}
      </span>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className={cn(
          "flex-1 bg-transparent border-none outline-none",
          "text-sm font-mono",
          "placeholder-muted-foreground/50",
          "focus:ring-0",
          "transition-colors duration-200"
        )}
        placeholder="Type a command..."
        autoFocus
      />
    </div>
  );
}