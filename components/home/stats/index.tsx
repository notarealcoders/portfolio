'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Code2, Coffee, Users, Award } from 'lucide-react';

const stats = [
  {
    label: 'Projects Completed',
    value: '50+',
    icon: Code2,
    description: 'Successful project deliveries'
  },
  {
    label: 'Cups of Coffee',
    value: '1,000+',
    icon: Coffee,
    description: 'Fuel for coding sessions'
  },
  {
    label: 'Happy Clients',
    value: '30+',
    icon: Users,
    description: 'Satisfied customers'
  },
  {
    label: 'Awards Won',
    value: '5',
    icon: Award,
    description: 'Industry recognition'
  }
];

export function Stats() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="font-medium mb-2">{stat.label}</p>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}