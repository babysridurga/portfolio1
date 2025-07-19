"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { personalData } from '@/lib/data';
import { AnimatedSection } from '../animated-section';

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % personalData.bio.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatedSection id="about" className="pt-32 md:pt-40">
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center md:justify-start"
        >
          <Image
            src={personalData.profilePicture}
            alt={personalData.name}
            width={200}
            height={200}
            className="rounded-full border-4 border-primary/20 shadow-lg"
            data-ai-hint="profile picture"
          />
        </motion.div>

        <div className="md:col-span-2 text-center md:text-left">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold font-headline mb-4"
          >
            {personalData.name}
          </motion.h1>
          <div className="text-lg text-muted-foreground mb-4 h-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="w-full text-center md:text-left"
              >
                {personalData.bio[index]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
