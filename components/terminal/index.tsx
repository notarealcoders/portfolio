'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useTerminalCommands } from './use-terminal-commands';
import { useTerminalHistory } from './use-terminal-history';
import { TerminalInput } from './terminal-input';
import { TerminalLine } from './terminal-line';
import { cn } from '@/lib/utils';

interface TerminalProps {
  onClose?: () => void;
  className?: string;
  isStatic?: boolean;
}

export function Terminal({ onClose, className, isStatic = false }: TerminalProps) {
  const [input, setInput] = useState('');
  const { processCommand } = useTerminalCommands();
  const { history, addLine, addCommand, navigateHistory, clearHistory } = useTerminalHistory();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleCommand = () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    addLine({ content: trimmedInput, type: 'input' });
    addCommand(trimmedInput);

    const result = processCommand(trimmedInput);
    
    if (result.output === 'CLEAR') {
      clearHistory();
    } else {
      addLine({ content: result.output, type: result.type });
    }

    setInput('');
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className={cn(
      "relative bg-card border rounded-lg shadow-xl overflow-hidden backdrop-blur-sm",
      "transition-all duration-200 ease-in-out",
      className
    )}>
      {/* Terminal Header */}
      <div className="flex items-center justify-between p-3 border-b bg-muted/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors" />
            <div className="h-3 w-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors" />
            <div className="h-3 w-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" />
          </div>
          <span className="text-sm font-medium ml-2 text-muted-foreground">guest@portfolio</span>
        </div>
        {!isStatic && onClose && (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose} 
            className="h-6 w-6 hover:bg-muted/80"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Terminal Content */}
      <ScrollArea 
        className={cn(
          "overflow-auto",
          isStatic ? "h-[calc(400px-4rem)]" : "h-[calc(100%-4rem)]"
        )}
        ref={scrollAreaRef}
      >
        <div className="p-4 space-y-2">
          {history.map((line, i) => (
            <TerminalLine key={i} {...line} />
          ))}
          <TerminalInput
            value={input}
            onChange={setInput}
            onSubmit={handleCommand}
            onNavigateHistory={navigateHistory}
          />
        </div>
      </ScrollArea>
    </div>
  );
}