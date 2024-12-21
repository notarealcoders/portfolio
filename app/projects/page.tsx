import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Globe } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Stripe integration.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project',
  },
  {
    title: 'AI Chat Application',
    description: 'Real-time chat application powered by OpenAI API.',
    tags: ['React', 'Node.js', 'OpenAI', 'Socket.io'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project',
  },
  // Add more projects as needed
];

function ProjectCard({ 
  title, 
  description, 
  tags, 
  liveUrl, 
  githubUrl 
}: {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}) {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
      <div className="flex gap-4">
        <Button asChild>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <Globe className="mr-2 h-4 w-4" />
            Live Demo
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Source Code
          </a>
        </Button>
      </div>
    </Card>
  );
}