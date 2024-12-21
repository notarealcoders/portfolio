import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { socialLinks } from '@/config/social';

export function SocialLinks() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Connect</h3>
      <div className="flex space-x-4">
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Twitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </a>
        <a
          href={`mailto:${socialLinks.email}`}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Mail className="h-5 w-5" />
          <span className="sr-only">Email</span>
        </a>
      </div>
      <p className="text-sm text-muted-foreground">
        Email: {socialLinks.email}
      </p>
    </div>
  );
}