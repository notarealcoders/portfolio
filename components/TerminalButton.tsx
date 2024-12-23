'use client';

import { useState } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Terminal } from './terminal';
import { motion, AnimatePresence } from 'framer-motion';

export function TerminalButton() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 z-50 shadow-lg hover:shadow-xl transition-shadow"
        onClick={() => setIsTerminalOpen(true)}
      >
        <TerminalIcon className="h-4 w-4" />
      </Button>

      <AnimatePresence>
        {isTerminalOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-16 right-4 z-50 w-[400px] h-[300px]"
          >
            <Terminal onClose={() => setIsTerminalOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}