"use client";

import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface TerminalProps {
  onClose?: () => void;
  isHeroTerminal?: boolean;
}

const commands: { [key: string]: Function } = {
  help: (setOutput: React.Dispatch<React.SetStateAction<string[]>>) => {
    setOutput((prev) => [
      ...prev,
      "Available commands:",
      "  about      - Learn more about me",
      "  projects   - View my projects",
      "  blog       - Read my blog posts",
      "  contact    - Get in touch",
      "  clear      - Clear terminal",
      "  joke       - Get a random developer joke",
      "  ascii      - Display some ASCII art",
      "  theme      - Toggle between light and dark mode",
      "  exit       - Close terminal",
    ]);
  },
  clear: (setOutput: React.Dispatch<React.SetStateAction<string[]>>) => {
    setOutput([]);
  },
  joke: async (setOutput: React.Dispatch<React.SetStateAction<string[]>>) => {
    try {
      const res = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?type=single"
      );
      const data = await res.json();
      if (data.joke) {
        setOutput((prev) => [...prev, data.joke]);
      } else {
        setOutput((prev) => [
          ...prev,
          "Failed to fetch a joke. Please try again.",
        ]);
      }
    } catch (error) {
      setOutput((prev) => [...prev, "Error fetching joke."]);
    }
  },
  exit: (onClose?: () => void) => {
    if (onClose) onClose();
  },
};

export function Terminal({ onClose, isHeroTerminal = false }: TerminalProps) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([
    'Welcome! Type "help" to see available commands.',
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputEndRef = useRef<HTMLDivElement>(null);

  const handleCommand = (cmd: string) => {
    setOutput((prev) => [...prev, `> ${cmd}`]);
    const command = cmd.toLowerCase().trim();

    if (command in commands) {
      if (command === "exit") {
        commands[command](onClose);
      } else {
        commands[command](setOutput);
      }
    } else {
      setOutput((prev) => [
        ...prev,
        `Command not found: ${cmd}. Type "help" for available commands.`,
      ]);
    }

    setInput("");
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [output]);

  const terminalClasses = cn(
    "bg-background border rounded-lg shadow-lg",
    isHeroTerminal
      ? "w-full h-[300px]"
      : "fixed bottom-4 right-4 w-[400px] h-[300px] z-50"
  );

  return (
    <div className={terminalClasses}>
      <div className="flex items-center justify-between p-2 border-b">
        <span className="text-sm font-medium">Terminal</span>
        {!isHeroTerminal && onClose && (
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <ScrollArea className="h-[calc(300px-80px)] p-2">
        {output.map((line, i) => (
          <div key={i} className="text-sm font-mono whitespace-pre-wrap">
            {line}
          </div>
        ))}
        <div ref={outputEndRef} />
      </ScrollArea>

      <div className="p-2 border-t">
        <div className="flex items-center">
          <span className="text-sm font-mono mr-2">{">"}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && input.trim()) {
                handleCommand(input);
              }
            }}
            className="flex-1 bg-transparent border-none outline-none text-sm font-mono"
            placeholder="Type a command..."
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
