import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Database, Terminal, Wrench, Award, GraduationCap, Briefcase, Heart } from 'lucide-react';

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

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <GraduationCap className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-semibold">Master of Computer Science</h3>
            <p className="text-muted-foreground">Stanford University</p>
            <p className="text-sm text-muted-foreground">2018 - 2020</p>
          </Card>
          <Card className="p-6">
            <GraduationCap className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-semibold">Bachelor of Computer Science</h3>
            <p className="text-muted-foreground">MIT</p>
            <p className="text-sm text-muted-foreground">2014 - 2018</p>
          </Card>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6">
            <Award className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-semibold">Best Developer Award</h3>
            <p className="text-muted-foreground">TechCorp Annual Awards 2023</p>
          </Card>
          <Card className="p-6">
            <Briefcase className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-semibold">100+ Projects Delivered</h3>
            <p className="text-muted-foreground">Across various industries</p>
          </Card>
          <Card className="p-6">
            <Heart className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-semibold">Open Source Contributor</h3>
            <p className="text-muted-foreground">500+ contributions on GitHub</p>
          </Card>
        </div>
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
      achievements: [
        'Improved application performance by 40%',
        'Led a team of 5 developers',
        'Implemented CI/CD pipeline'
      ]
    },
    {
      title: 'Full-Stack Developer',
      company: 'StartupX',
      period: '2020 - 2022',
      description: 'Built and maintained multiple SaaS applications.',
      achievements: [
        'Developed core product features',
        'Reduced server costs by 30%',
        'Mentored junior developers'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'WebAgency',
      period: '2019 - 2020',
      description: 'Developed responsive web applications using React.',
      achievements: [
        'Created reusable component library',
        'Implemented responsive designs',
        'Optimized build process'
      ]
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
            <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
            <p className="mb-4">{exp.description}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}