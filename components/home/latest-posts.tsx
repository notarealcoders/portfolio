import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';

export function LatestPosts() {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold">Latest Posts</h2>
            <p className="text-muted-foreground mt-2">Thoughts on development and design</p>
          </div>
          <Button variant="ghost" asChild>
            <Link href="/blog">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestPosts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}

const latestPosts = [
  {
    title: 'Building Scalable Applications with Next.js',
    date: 'March 15, 2024',
    description: 'Learn how to build and deploy scalable applications using Next.js and Vercel.',
    tags: ['Next.js', 'React', 'Performance'],
    slug: 'scalable-nextjs',
  },
  // Add more posts...
];

function BlogCard({ title, date, description, tags, slug }: {
  title: string;
  date: string;
  description: string;
  tags: string[];
  slug: string;
}) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center text-sm text-muted-foreground mb-4">
        <Calendar className="h-4 w-4 mr-2" />
        {date}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="text-sm text-muted-foreground">#{tag}</span>
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