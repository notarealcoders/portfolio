'use client';

import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

type CommandResult = {
  output: string;
  type: 'output' | 'error' | 'info';
};

const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "What's a programmer's favorite place? The foo bar!",
  "Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25!",
];

export function useTerminalCommands() {
  const router = useRouter();
  const { setTheme } = useTheme();

  const getRandomJoke = () => jokes[Math.floor(Math.random() * jokes.length)];

  const commands: Record<string, (args?: string[]) => CommandResult> = {
    help: () => ({
      output: `Available commands:
  about     - Learn more about me
  projects  - View my projects
  blog      - Read my blog posts
  contact   - Get my contact info
  theme     - Toggle dark/light mode
  clear     - Clear terminal
  joke      - Get a random dev joke
  whoami    - Display current user
  exit      - Close terminal`,
      type: 'info'
    }),

    about: () => {
      router.push('/about');
      return { output: 'Navigating to About page...', type: 'info' };
    },

    projects: () => {
      router.push('/projects');
      return { output: 'Loading projects...', type: 'info' };
    },

    blog: () => {
      router.push('/blog');
      return { output: 'Opening blog...', type: 'info' };
    },

    contact: () => {
      router.push('/contact');
      return { output: 'Opening contact page...', type: 'info' };
    },

    theme: () => {
      setTheme(theme => theme === 'dark' ? 'light' : 'dark');
      return { output: 'Theme toggled!', type: 'info' };
    },

    clear: () => ({
      output: 'CLEAR',
      type: 'info'
    }),

    joke: () => ({
      output: getRandomJoke(),
      type: 'output'
    }),

    whoami: () => ({
      output: 'guest@portfolio',
      type: 'output'
    }),

    exit: () => ({
      output: 'Closing terminal...',
      type: 'info'
    })
  };

  const processCommand = (input: string): CommandResult => {
    const [cmd, ...args] = input.trim().toLowerCase().split(' ');

    if (!cmd) {
      return { output: '', type: 'output' };
    }

    const command = commands[cmd];
    if (!command) {
      return {
        output: `Command not found: ${cmd}. Type 'help' for available commands.`,
        type: 'error'
      };
    }

    return command(args);
  };

  return { processCommand };
}