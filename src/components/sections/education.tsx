"use client";

import { motion } from 'framer-motion';
import { education } from '@/lib/data';
import { AnimatedSection } from '../animated-section';
import { EducationCard } from '../education-card';

export default function Education() {
  return (
    <AnimatedSection id="education">
      <h2 className="text-3xl font-bold text-center mb-12 font-headline">Education</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {education.map((edu, index) => (
           <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex justify-center"
          >
            <EducationCard education={edu} />
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
