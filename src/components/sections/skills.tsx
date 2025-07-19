
"use client";

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '../animated-section';
import { CheckCircle } from 'lucide-react';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <AnimatedSection id="skills">
      <h2 className="text-3xl font-bold text-center mb-12 font-headline">Technical Skills</h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Badge variant="secondary" className="text-base py-2 px-4 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              {skill.name}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
}
