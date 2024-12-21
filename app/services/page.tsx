import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code2, Palette, Wrench, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="text-4xl font-bold mb-8">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    icon: Code2,
    features: [
      'Responsive Design',
      'Performance Optimization',
      'SEO Best Practices',
      'Modern Frameworks',
    ],
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design solutions that enhance user experience.',
    icon: Palette,
    features: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Design Systems',
    ],
  },
  {
    title: 'Technical Consulting',
    description: 'Expert advice on technology choices and implementation.',
    icon: Wrench,
    features: [
      'Architecture Review',
      'Code Review',
      'Performance Audit',
      'Security Assessment',
    ],
  },
];

function ServiceCard({ 
  title, 
  description, 
  icon: Icon, 
  features 
}: {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
}) {
  return (
    <Card className="p-6">
      <Icon className="h-12 w-12 mb-4" />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <ArrowRight className="h-4 w-4 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <Button className="w-full" asChild>
        <Link href="/contact">Get Started</Link>
      </Button>
    </Card>
  );
}