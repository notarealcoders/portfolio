'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  Lightbulb, Code2, Search, Rocket,
  ArrowRight
} from 'lucide-react';

const steps = [
  {
    title: 'Discovery',
    icon: Search,
    description: 'Understanding your needs and project requirements through detailed consultation'
  },
  {
    title: 'Planning',
    icon: Lightbulb,
    description: 'Creating a comprehensive roadmap and technical architecture'
  },
  {
    title: 'Development',
    icon: Code2,
    description: 'Building your solution using modern technologies and best practices'
  },
  {
    title: 'Launch',
    icon: Rocket,
    description: 'Deploying and monitoring to ensure everything runs smoothly'
  }
];

export function Process() {
  return (
    <section className="py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Development Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A structured approach to bringing your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <Card className="p-6 text-center h-full">
                <step.icon className="h-8 w-8 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-muted-foreground" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}