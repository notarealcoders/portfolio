import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Database, Terminal, Wrench } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="prose dark:prose-invert max-w-none mb-12">
        <p className="text-xl text-muted-foreground">
          I'm a passionate full-stack developer with expertise in building modern web applications.
          With over 5 years of experience, I specialize in creating scalable solutions using cutting-edge technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <SkillSection
          title="Frontend Development"
          icon={<Code2 className="h-6 w-6" />}
          skills={['React', 'Next.js', 'TypeScript', 'Tailwind CSS']}
        />
        <SkillSection
          title="Backend Development"
          icon={<Database className="h-6 w-6" />}
          skills={['Node.js', 'Python', 'PostgreSQL', 'Redis']}
        />
        <SkillSection
          title="DevOps & Tools"
          icon={<Wrench className="h-6 w-6" />}
          skills={['Docker', 'Git', 'CI/CD', 'AWS']}
        />
        <SkillSection
          title="Command Line"
          icon={<Terminal className="h-6 w-6" />}
          skills={['Bash', 'Vim', 'tmux', 'zsh']}
        />
      </div>

      <Timeline />
    </div>
  );
}

function SkillSection({ title, icon, skills }: {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </Card>
  );
}

function Timeline() {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Corp',
      period: '2022 - Present',
      description: 'Leading development of enterprise applications using Next.js and Node.js.',
    },
    {
      title: 'Full-Stack Developer',
      company: 'StartupX',
      period: '2020 - 2022',
      description: 'Built and maintained multiple SaaS applications.',
    },
    {
      title: 'Frontend Developer',
      company: 'WebAgency',
      period: '2019 - 2020',
      description: 'Developed responsive web applications using React.',
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="p-6">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-muted-foreground">{exp.company}</p>
            <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
            <p>{exp.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}