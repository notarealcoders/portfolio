import { HeroSection } from '@/components/home/hero-section';
import { FeaturedProjects } from '@/components/home/featured-projects';
import { LatestPosts } from '@/components/home/latest-posts';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <HeroSection />
        <FeaturedProjects />
        <LatestPosts />
      </main>
    </div>
  );
}