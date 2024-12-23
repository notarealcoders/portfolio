"use client";

import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/typewriter-effect";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal } from "../terminal";

export function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                "Problem Solver",
              ]}
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
            />
            <p className="mt-6 text-xl text-muted-foreground max-w-[600px]">
              Crafting scalable, user-friendly, and visually appealing digital
              experiences that make a difference.
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

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-3xl" />
            <Terminal  />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CodePreview() {
  return (
    <div className="rounded-lg bg-card p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <pre className="font-mono text-sm">
        <code className="text-muted-foreground">
          {`const developer = {
  name: 'John Doe',
  skills: ['React', 'Node.js', 'TypeScript'],
  passion: 'Building amazing web apps',
  coffee: true,
};

while (developer.coffee) {
  developer.code();
  developer.learn();
  developer.create();
}`}
        </code>
      </pre>
    </div>
  );
}
