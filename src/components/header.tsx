"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download, Menu, X, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { navLinks, personalData } from '@/lib/data';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Header() {
  const [activeLink, setActiveLink] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = navLinks.map(link => document.getElementById(link.id));
      let currentSection = 'about';
      
      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop - 100;
          if (window.scrollY >= sectionTop) {
            currentSection = section.id;
          }
        }
      });
      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 20 } },
  };

  const navItemVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const NavContent = () => (
    <>
      {navLinks.map((link, index) => (
        <motion.li key={link.id} variants={navItemVariants} transition={{ delay: 0.1 * index }}>
          <Link href={`#${link.id}`} passHref>
            <Button
              variant="link"
              className={`text-base font-medium transition-colors hover:text-primary ${activeLink === link.id ? 'text-primary' : 'text-muted-foreground'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Button>
          </Link>
        </motion.li>
      ))}
    </>
  );

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg border-b' : 'bg-transparent'}`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <motion.div variants={navItemVariants} className="flex items-center gap-2">
          <Code className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold font-headline">Portfolio</span>
        </motion.div>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-2">
            <NavContent />
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <motion.div variants={navItemVariants}>
            <Button asChild>
              <a href={personalData.resumeUrl} download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </motion.div>
          <motion.div variants={navItemVariants}>
            <ThemeToggle />
          </motion.div>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col items-center justify-center h-full">
                  <ul className="flex flex-col items-center space-y-6">
                    <NavContent />
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
