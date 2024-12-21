'use client';

import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { socialLinks } from '@/config/social';

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
  social    - View social links
  theme     - Toggle dark/light mode
  clear     - Clear terminal
  joke      - Get a random dev joke
  whoami    - Display current user
  secret    - Find an Easter egg
  sudo      - Try to gain root access`,
      type: 'info'
    }),

    about: () => {
      router.push('/about');
      return {
        output: "Navigating to About page...",
        type: 'info'
      };
    },

    projects: () => {
      router.push('/projects');
      return {
        output: "Loading projects...",
        type: 'info'
      };
    },

    blog: () => {
      router.push('/blog');
      return {
        output: "Opening blog...",
        type: 'info'
      };
    },

    contact: () => ({
      output: `📧 Email: ${socialLinks.email}
🔗 LinkedIn: ${socialLinks.linkedin}
🐙 GitHub: ${socialLinks.github}`,
      type: 'output'
    }),

    social: () => ({
      output: `Social Links:
- GitHub: ${socialLinks.github}
- LinkedIn: ${socialLinks.linkedin}
- Twitter: ${socialLinks.twitter}`,
      type: 'output'
    }),

    theme: () => {
      setTheme(theme => theme === 'dark' ? 'light' : 'dark');
      return {
        output: "Theme toggled!",
        type: 'info'
      };
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
      output: "guest@portfolio ~ $",
      type: 'output'
    }),

    secret: () => ({
      output: "🎉 You found the secret command! Here's a fun fact: This terminal was built with React and TypeScript!",
      type: 'info'
    }),

    sudo: () => ({
      output: "Nice try! But you don't have root access here 😄",
      type: 'error'
    })
  };

  const processCommand = (input: string): CommandResult => {
    const [cmd, ...args] = input.trim().toLowerCase().split(' ');

    if (!cmd) {
      return {
        output: '',
        type: 'output'
      };
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