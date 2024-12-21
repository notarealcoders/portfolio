import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
}

const blogPosts = [
  {
    title: 'Building Scalable Applications with Next.js',
    date: 'March 15, 2024',
    description: 'Learn how to build and deploy scalable applications using Next.js and Vercel.',
    tags: ['Next.js', 'React', 'Performance'],
    slug: 'scalable-nextjs',
  },
  {
    title: 'The Future of Web Development',
    date: 'March 10, 2024',
    description: 'Exploring upcoming trends and technologies in web development.',
    tags: ['Web Development', 'Trends', 'Technology'],
    slug: 'future-web-dev',
  },
  // Add more blog posts as needed
];

function BlogCard({ 
  title, 
  date, 
  description, 
  tags, 
  slug 
}: {
  title: string;
  date: string;
  description: string;
  tags: string[];
  slug: string;
}) {
  return (
    <Card className="p-6">
      <div className="flex items-center text-sm text-muted-foreground mb-4">
        <Calendar className="h-4 w-4 mr-2" />
        {date}
      </div>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="text-sm text-muted-foreground">
            #{tag}
          </span>
        ))}
      </div>
      <Button variant="ghost" className="group" asChild>
        <Link href={`/blog/${slug}`}>
          Read More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </Card>
  );
}