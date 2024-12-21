import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Github, Globe } from 'lucide-react';
import Link from 'next/link';

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground mt-2">Some of my recent work</p>
          </div>
          <Button variant="ghost" asChild>
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

const featuredProjects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform with Stripe integration',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['Next.js', 'TypeScript', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project',
  },
  // Add more projects...
];

function ProjectCard({ title, description, image, tags, liveUrl, githubUrl }: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}) {
  return (
    <Card className="group overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        <div className="flex gap-4">
          <Button size="sm" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <Globe className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Source
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}