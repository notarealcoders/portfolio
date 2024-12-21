'use client';

import { Button } from '@/components/ui/button';
import { TypewriterEffect } from '@/components/typewriter-effect';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TypewriterEffect
        words={[
          "Hi, I'm John Doe",
          "Full-Stack Developer",
          "UI/UX Enthusiast",
          "Problem Solver"
        ]}
        className="text-4xl md:text-5xl lg:text-6xl font-bold"
      />
      <p className="mt-6 text-xl text-muted-foreground max-w-[600px]">
        Crafting scalable, user-friendly, and visually appealing digital experiences
        that make a difference.
      </p>
      <div className="flex flex-wrap gap-4 mt-8">
        <Button size="lg" asChild>
          <Link href="/projects">
            View My Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </motion.div>
  );
}