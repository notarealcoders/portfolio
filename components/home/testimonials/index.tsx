'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "One of the most talented developers I've worked with. Their attention to detail and problem-solving skills are exceptional.",
    author: "Sarah Johnson",
    position: "CTO, TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&q=80"
  },
  {
    quote: "They transformed our vision into reality. The end product exceeded our expectations in terms of both functionality and design.",
    author: "Michael Chen",
    position: "Founder, StartupX",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80"
  },
  {
    quote: "Their technical expertise and ability to deliver complex projects on time make them an invaluable asset to any team.",
    author: "Emily Rodriguez",
    position: "Product Manager, InnovateLabs",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&q=80"
  }
];

export function Testimonials() {
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
          <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col">
                <Quote className="h-8 w-8 mb-4 text-primary" />
                <p className="text-muted-foreground mb-6 flex-1">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}