"use client";

import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area"; // Ensure ScrollArea is defined

export function Terminal({ onClose }: { onClose: () => void }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([
    'Welcome! Type "help" to see available commands.',
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputEndRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: () => {
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
    clear: () => {
      setOutput([]);
    },
    joke: async () => {
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
    exit: () => {
      onClose(); // Calls onClose when the terminal should be closed
    },
  };

  const handleCommand = (cmd: string) => {
    setOutput((prev) => [...prev, `> ${cmd}`]);
    const command = cmd.toLowerCase().trim();

    if (command in commands) {
      commands[command as keyof typeof commands]();
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

  return (
    <div className="fixed bottom-4 right-4 w-[400px] h-[300px] bg-background border rounded-lg shadow-lg">
      <div className="flex items-center justify-between p-2 border-b">
        <span className="text-sm font-medium">Terminal</span>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="h-4 w-4" />
        </button>
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
