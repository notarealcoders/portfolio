'use client';

import { useRef, useEffect, KeyboardEvent } from 'react';

interface TerminalInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onNavigateHistory: (direction: 'up' | 'down') => void;
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
      const newValue = onNavigateHistory('up');
      if (newValue !== undefined) onChange(newValue);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newValue = onNavigateHistory('down');
      if (newValue !== undefined) onChange(newValue);
    }
  };

  return (
    <div className="flex items-center">
      <span className="text-sm font-mono text-emerald-500 dark:text-emerald-400 mr-2">{'>'}</span>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-transparent border-none outline-none text-sm font-mono text-foreground"
        autoFocus
      />
    </div>
  );
}