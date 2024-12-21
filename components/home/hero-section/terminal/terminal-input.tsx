'use client';

import { useRef, useEffect } from 'react';

interface TerminalInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export function TerminalInput({ value, onChange, onSubmit }: TerminalInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="flex items-center">
      <span className="text-sm font-mono text-emerald-500 mr-2">{'>'}</span>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && value.trim()) {
            onSubmit();
          }
        }}
        className="flex-1 bg-transparent border-none outline-none text-sm font-mono text-foreground"
        autoFocus
      />
    </div>
  );
}