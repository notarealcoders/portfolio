import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ProjectCard } from './project-card';

const featuredProjects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform with Stripe integration',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['Next.js', 'TypeScript', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project',
  },
];

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