import { HeroSection } from '@/components/home/hero-section';
import { FeaturedProjects } from '@/components/home/featured-projects';
import { TechStack } from '@/components/home/tech-stack';
import { Process } from '@/components/home/process';
import { Stats } from '@/components/home/stats';
import { Testimonials } from '@/components/home/testimonials';
import { LatestPosts } from '@/components/home/latest-posts';
import { CTA } from '@/components/home/cta';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <HeroSection />
        <TechStack />
        <FeaturedProjects />
        <Process />
        <Stats />
        <Testimonials />
        <LatestPosts />
        <CTA />
      </main>
    </div>
  );
}