'use client';

import { socialLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { AnimatedSection } from '../animated-section';

const socialIcons = {
  github: <Github />,
  linkedin: <Linkedin />,
  twitter: <Twitter />,
};

export default function Contact() {
  return (
    <AnimatedSection id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-headline mb-4">Connect With Me</h2>
        <p className="text-lg text-muted-foreground mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <Button asChild>
            <a href={socialLinks.email}>
              <Mail className="mr-2 h-4 w-4" /> Email Me
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
          {socialLinks.linkedin && (
            <Button variant="outline" asChild>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}
