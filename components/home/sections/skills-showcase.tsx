'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Code2, Database, Cloud, Palette } from 'lucide-react';

const skills = [
  {
    name: 'Frontend',
    icon: Code2,
    description: 'Building responsive and interactive user interfaces',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    name: 'Backend',
    icon: Database,
    description: 'Developing robust server-side applications',
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'Redis']
  },
  {
    name: 'DevOps',
    icon: Cloud,
    description: 'Managing cloud infrastructure and deployment',
    technologies: ['AWS', 'Docker', 'CI/CD', 'Kubernetes']
  },
  {
    name: 'Design',
    icon: Palette,
    description: 'Creating beautiful and intuitive user experiences',
    technologies: ['Figma', 'Adobe XD', 'UI/UX', 'Design Systems']
  }
];

export function SkillsShowcase() {
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
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground">
            A comprehensive toolkit for building modern applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <skill.icon className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-muted-foreground mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm bg-muted px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}