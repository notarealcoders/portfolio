'use client';

import { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { TerminalInput } from './terminal-input';
import { TerminalLine } from './terminal-line';
import { useTerminalCommands } from './use-terminal-commands';
import { useTerminalHistory } from './use-terminal-history';
import { motion } from 'framer-motion';

export function Terminal() {
  const [input, setInput] = useState('');
  const { processCommand } = useTerminalCommands();
  const { history, addLine, addCommand, navigateHistory, clearHistory } = useTerminalHistory();

  const handleCommand = () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    // Add input to history
    addLine({ content: trimmedInput, type: 'input' });
    addCommand(trimmedInput);

    // Process command
    const result = processCommand(trimmedInput);
    
    if (result.output === 'CLEAR') {
      clearHistory();
    } else {
      addLine({ content: result.output, type: result.type });
    }

    setInput('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="rounded-lg bg-card border shadow-xl overflow-hidden"
    >
      <div className="flex items-center gap-2 p-2 border-b bg-muted/50">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
        <span className="text-sm font-medium ml-2">terminal</span>
      </div>
      <div className="p-4">
        <ScrollArea className="h-[300px]">
          <div className="space-y-2">
            {history.map((line, i) => (
              <TerminalLine key={i} content={line.content} type={line.type} />
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
    </motion.div>
  );
}