"use client";

import { motion } from 'framer-motion';
import { internships } from '@/lib/data';
import { Briefcase } from 'lucide-react';
import { AnimatedSection } from '../animated-section';

export default function Experience() {
  if (internships.length === 0) {
    return null;
  }
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' }}
  };

  return (
    <AnimatedSection id="experience">
      <h2 className="text-3xl font-bold text-center mb-12 font-headline">Work Experience</h2>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12"
        >
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex items-start"
            >
              <div className={`flex-shrink-0 w-8 md:w-auto md:flex-1 ${index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:order-2 md:text-left'}`}>
                <div className="font-semibold text-lg">{internship.role}</div>
                <div className="text-primary font-medium">{internship.company}</div>
                <div className="text-sm text-muted-foreground">{internship.duration}</div>
              </div>

              <div className="absolute left-4 top-1 -translate-x-1/2 transform">
                <div className="w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>
              </div>

              <div className={`w-0.5 bg-transparent md:w-8`}></div>

              <div className={`flex-grow pl-10 md:pl-0 md:flex-1 ${index % 2 === 0 ? 'md:pl-10' : 'md:pr-10 md:order-1 md:text-right'}`}>
                <p className="text-muted-foreground">{internship.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
