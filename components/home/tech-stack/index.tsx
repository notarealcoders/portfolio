'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  Code2, Database, Cloud, Palette, Terminal, 
  GitBranch, Layout, Shield, Cpu, Gauge
} from 'lucide-react';

const technologies = [
  {
    category: 'Frontend',
    icon: Layout,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    icon: Database,
    items: ['Node.js', 'Python', 'PostgreSQL', 'Redis']
  },
  {
    category: 'DevOps',
    icon: Cloud,
    items: ['Docker', 'AWS', 'CI/CD', 'Kubernetes']
  },
  {
    category: 'Tools',
    icon: Terminal,
    items: ['Git', 'VS Code', 'Postman', 'Linux']
  },
];

export function TechStack() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A carefully selected set of technologies I use to build robust and scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6">
                <tech.icon className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-semibold mb-4">{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.items.map((item) => (
                    <li key={item} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}