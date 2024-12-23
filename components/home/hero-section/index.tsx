'use client';

import { motion } from 'framer-motion';
import { HeroContent } from './hero-content';
import { Terminal } from '@/components/terminal';
import { useTerminalContext } from '@/hooks/use-terminal';

export function HeroSection() {
  const { setHeroTerminalVisible } = useTerminalContext();

  // Set hero terminal visible when component mounts
  useEffect(() => {
    setHeroTerminalVisible(true);
    return () => setHeroTerminalVisible(false);
  }, [setHeroTerminalVisible]);

  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-3xl" />
            <Terminal isHeroTerminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}