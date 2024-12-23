"use client";

import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/typewriter-effect";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal } from "../terminal";

export function HeroSection() {
  return (
    <section
      className="min-h-[90vh] flex items-center"
      aria-labelledby="hero-heading"
    >
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 id="hero-heading" className="sr-only">
              Hero Section
            </h1>
            <TypewriterEffect
              words={[
                "Hi, I'm John Doe",
                "Full-Stack Developer",
                "UI/UX Enthusiast",
                "Problem Solver",
              ]}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
            <p className="mt-4 text-lg text-gray-600">
              I build scalable web applications and delightful user experiences.
            </p>
            <Link
              href="#contact"
              className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
            >
              Get in Touch
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Terminal isHeroTerminal={true} />
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
