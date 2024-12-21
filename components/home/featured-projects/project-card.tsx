import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Globe } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export function ProjectCard({ title, description, image, tags, liveUrl, githubUrl }: ProjectCardProps) {
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