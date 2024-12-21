import { useRouter } from 'next/navigation';

interface CommandResult {
  output: string;
  type?: 'output' | 'error';
}

export const useTerminalCommands = () => {
  const router = useRouter();

  const commands: Record<string, () => CommandResult> = {
    help: () => ({
      output: `Available commands:
  about     - Learn more about me
  projects  - View my projects
  skills    - List my technical skills
  contact   - Get in touch
  clear     - Clear terminal
  github    - Visit my GitHub profile
  linkedin  - Visit my LinkedIn profile
  whoami    - Display current user
  echo      - Repeat the input
  date      - Show current date`
    }),
    about: () => {
      router.push('/about');
      return { output: 'Navigating to About page...' };
    },
    projects: () => {
      router.push('/projects');
      return { output: 'Navigating to Projects page...' };
    },
    contact: () => {
      router.push('/contact');
      return { output: 'Navigating to Contact page...' };
    },
    skills: () => ({
      output: `Technical Skills:
  • Frontend: React, Next.js, TypeScript
  • Backend: Node.js, Python, PostgreSQL
  • Tools: Git, Docker, AWS
  • Other: UI/UX Design, Agile`
    }),
    clear: () => ({ output: 'CLEAR' }),
    github: () => {
      window.open('https://github.com/yourusername', '_blank');
      return { output: 'Opening GitHub profile...' };
    },
    linkedin: () => {
      window.open('https://linkedin.com/in/yourusername', '_blank');
      return { output: 'Opening LinkedIn profile...' };
    },
    whoami: () => ({ output: 'guest@portfolio' }),
    date: () => ({ output: new Date().toLocaleString() }),
    echo: () => ({ output: 'Usage: echo <message>' }),
  };

  const processCommand = (input: string): CommandResult => {
    const [cmd, ...args] = input.trim().toLowerCase().split(' ');

    if (cmd === 'echo' && args.length > 0) {
      return { output: args.join(' ') };
    }

    if (cmd === 'sudo') {
      return { 
        output: 'Permission denied: Nice try! 😄',
        type: 'error'
      };
    }

    const command = commands[cmd];
    if (!command) {
      return { 
        output: `Command not found: ${cmd}. Type 'help' for available commands.`,
        type: 'error'
      };
    }

    return command();
  };

  return { processCommand };
};