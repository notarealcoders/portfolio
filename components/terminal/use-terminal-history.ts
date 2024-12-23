'use client';

import { useState, useCallback } from 'react';

export type TerminalLine = {
  content: string;
  type: 'input' | 'output' | 'error' | 'info';
};

export function useTerminalHistory() {
  const [history, setHistory] = useState<TerminalLine[]>([
    { 
      content: 'Welcome to my interactive portfolio!\nType "help" to see available commands.',
      type: 'info'
    }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const addLine = useCallback((line: TerminalLine) => {
    setHistory(prev => [...prev, line]);
  }, []);

  const addCommand = useCallback((command: string) => {
    setCommandHistory(prev => [...prev, command]);
    setHistoryIndex(-1);
  }, []);

  const navigateHistory = useCallback((direction: 'up' | 'down'): string => {
    if (commandHistory.length === 0) return '';

    const newIndex = direction === 'up'
      ? Math.min(historyIndex + 1, commandHistory.length - 1)
      : Math.max(-1, historyIndex - 1);
    
    setHistoryIndex(newIndex);
    return newIndex === -1 ? '' : commandHistory[commandHistory.length - 1 - newIndex];
  }, [commandHistory, historyIndex]);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  return {
    history,
    addLine,
    addCommand,
    navigateHistory,
    clearHistory
  };
}