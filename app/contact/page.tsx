import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <Input placeholder="Name" />
            </div>
            <div>
              <Input type="email" placeholder="Email" />
            </div>
            <div>
              <Input placeholder="Subject" />
            </div>
            <div>
              <Textarea placeholder="Message" className="min-h-[150px]" />
            </div>
            <Button className="w-full">Send Message</Button>
          </form>
        </Card>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <a href="mailto:your.email@example.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
                your.email@example.com
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
                github.com/yourusername
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                linkedin.com/in/yourusername
              </a>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Office Hours</h2>
            <p className="text-muted-foreground">
              Monday - Friday<br />
              9:00 AM - 5:00 PM (EST)
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}