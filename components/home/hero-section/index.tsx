'use client';

import { motion } from 'framer-motion';
import { HeroContent } from './hero-content';
import { Scene } from '@/components/3d/scene';
import { useTerminalContext } from '@/hooks/use-terminal';
import { useEffect } from 'react';

export function HeroSection() {
  const { setHeroTerminalVisible } = useTerminalContext();

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
            className="relative"
          >
            <Scene />
          </motion.div>
        </div>
      </div>
    </section>
  );
}