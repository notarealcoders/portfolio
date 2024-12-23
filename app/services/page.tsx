import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code2, Palette, Wrench, ArrowRight, 
  Database, Cloud, Shield, Gauge, 
  Users, BookOpen, LineChart, MessageSquare 
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="text-4xl font-bold mb-8">Services</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Additional Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Consulting Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {consultingServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="text-muted-foreground mb-6">
          Let's discuss your specific requirements and create a tailored solution for your business.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </div>
  );
}

const coreServices = [
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
    title: 'Backend Development',
    description: 'Robust and scalable server-side solutions.',
    icon: Database,
    features: [
      'API Development',
      'Database Design',
      'Authentication',
      'Cloud Integration',
    ],
  },
];

const additionalServices = [
  {
    title: 'Cloud Solutions',
    description: 'Cloud infrastructure setup and management.',
    icon: Cloud,
    features: [
      'AWS/Azure/GCP',
      'Server Management',
      'Scalability',
      'Cost Optimization',
    ],
  },
  {
    title: 'Security Audit',
    description: 'Comprehensive security assessment and implementation.',
    icon: Shield,
    features: [
      'Vulnerability Testing',
      'Security Best Practices',
      'Compliance Review',
      'Security Training',
    ],
  },
  {
    title: 'Performance Optimization',
    description: 'Improve application speed and efficiency.',
    icon: Gauge,
    features: [
      'Load Testing',
      'Code Optimization',
      'Caching Strategies',
      'Performance Monitoring',
    ],
  },
];

const consultingServices = [
  {
    title: 'Technical Consulting',
    description: 'Expert advice on technology choices and implementation.',
    icon: Wrench,
    features: [
      'Architecture Review',
      'Technology Selection',
      'Best Practices',
      'Risk Assessment',
    ],
  },
  {
    title: 'Team Training',
    description: 'Upskill your development team with custom workshops.',
    icon: Users,
    features: [
      'Custom Workshops',
      'Code Reviews',
      'Best Practices',
      'Mentoring',
    ],
  },
  {
    title: 'Project Management',
    description: 'Efficient project planning and execution.',
    icon: LineChart,
    features: [
      'Agile Methods',
      'Resource Planning',
      'Risk Management',
      'Progress Tracking',
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
            <ArrowRight className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full" asChild>
        <Link href="/contact">Get Started</Link>
      </Button>
    </Card>
  );
}