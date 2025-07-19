"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { AnimatedSection } from '../animated-section';

export default function Projects() {
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  return (
    <AnimatedSection id="projects">
      <h2 className="text-3xl font-bold text-center mb-12 font-headline">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            custom={index}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                  <Image src={project.image} alt={project.name} layout="fill" objectFit="cover" data-ai-hint={project.dataAiHint} />
                </div>
                <CardTitle>{project.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" asChild size="sm">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button asChild size="sm">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
