'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Terminal as TerminalIcon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>(['Welcome! Type "help" to see available commands']);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const commands = {
    help: () => {
      setOutput(prev => [...prev, 'Available commands:', '  about - Learn more about me', '  projects - View my projects', '  blog - Read my blog posts', '  contact - Get in touch', '  clear - Clear terminal', '  exit - Close terminal']);
    },
    about: () => {
      router.push('/about');
      setIsOpen(false);
    },
    projects: () => {
      router.push('/projects');
      setIsOpen(false);
    },
    blog: () => {
      router.push('/blog');
      setIsOpen(false);
    },
    contact: () => {
      router.push('/contact');
      setIsOpen(false);
    },
    clear: () => {
      setOutput([]);
    },
    exit: () => {
      setIsOpen(false);
    },
  };

  const handleCommand = (cmd: string) => {
    setOutput(prev => [...prev, `> ${cmd}`]);
    const command = cmd.toLowerCase().trim();
    
    if (command in commands) {
      commands[command as keyof typeof commands]();
    } else {
      setOutput(prev => [...prev, `Command not found: ${cmd}. Type "help" for available commands.`]);
    }
    
    setInput('');
  };

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4"
        onClick={() => setIsOpen(true)}
      >
        <TerminalIcon className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-[400px] h-[300px] bg-background border rounded-lg shadow-lg">
      <div className="flex items-center justify-between p-2 border-b">
        <span className="text-sm font-medium">Terminal</span>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="h-[calc(300px-80px)] p-2">
        {output.map((line, i) => (
          <div key={i} className="text-sm font-mono whitespace-pre-wrap">
            {line}
          </div>
        ))}
      </ScrollArea>
      <div className="p-2 border-t">
        <div className="flex items-center">
          <span className="text-sm font-mono mr-2">{'>'}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && input.trim()) {
                handleCommand(input);
              }
            }}
            className="flex-1 bg-transparent border-none outline-none text-sm font-mono"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}