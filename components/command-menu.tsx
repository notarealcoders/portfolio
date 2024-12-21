'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { FileCode, Home, User, Mail, BookOpen, Briefcase } from 'lucide-react';

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => runCommand(() => router.push('/'))}>
            <Home className="mr-2 h-4 w-4" />
            Home
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push('/about'))}>
            <User className="mr-2 h-4 w-4" />
            About
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push('/projects'))}>
            <FileCode className="mr-2 h-4 w-4" />
            Projects
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push('/services'))}>
            <Briefcase className="mr-2 h-4 w-4" />
            Services
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push('/blog'))}>
            <BookOpen className="mr-2 h-4 w-4" />
            Blog
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push('/contact'))}>
            <Mail className="mr-2 h-4 w-4" />
            Contact
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}