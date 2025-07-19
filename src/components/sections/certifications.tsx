"use client";

import { motion } from 'framer-motion';
import { certifications } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedSection } from '../animated-section';
import { cn } from '@/lib/utils';

export default function Certifications() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  const effectClasses = [
    'cert-effect-1',
    'cert-effect-2',
    'cert-effect-3',
    'cert-effect-4',
  ];

  return (
    <AnimatedSection id="certifications">
      <h2 className="text-3xl font-bold text-center mb-12 font-headline">Certifications</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h-full"
          >
            <a href={cert.url} target="_blank" rel="noopener noreferrer" className="h-full block">
              <Card className={cn(
                "h-full flex flex-col items-center justify-center text-center p-4 cert-card-base",
                effectClasses[index % effectClasses.length]
              )}>
                <CardContent className="p-0">
                  <p className="font-semibold text-sm">{cert.name}</p>
                  <p className="text-xs text-muted-foreground">{cert.provider}</p>
                </CardContent>
              </Card>
            </a>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
