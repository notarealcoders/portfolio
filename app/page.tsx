import { HeroSection } from '@/components/home/hero-section';
import { AboutPreview } from '@/components/home/sections/about-preview';
import { SkillsShowcase } from '@/components/home/sections/skills-showcase';
import { FeaturedProjects } from '@/components/home/featured-projects';
import { Process } from '@/components/home/process';
import { Stats } from '@/components/home/stats';
import { Testimonials } from '@/components/home/testimonials';
import { ContactCTA } from '@/components/home/sections/contact-cta';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <HeroSection />
        <AboutPreview />
        <SkillsShowcase />
        <FeaturedProjects />
        <Process />
        <Stats />
        <Testimonials />
        <ContactCTA />
      </main>
    </div>
  );
}