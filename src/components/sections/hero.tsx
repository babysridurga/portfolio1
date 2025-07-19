"use client";

import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, LoaderCircle, CheckCircle } from 'lucide-react';
import { personalData, internships, education } from '@/lib/data';
import { suggestBioImprovements } from '@/ai/flows/suggest-bio-improvements';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { AnimatedSection } from '../animated-section';

const workExperienceText = internships.map(i => `${i.role} at ${i.company}: ${i.description}`).join('\n');
const educationText = education.map(e => `${e.degree} from ${e.institution} (${e.duration})`).join('\n');

export default function Hero() {
  const [currentBio, setCurrentBio] = useState(personalData.bio);
  const [suggestedBio, setSuggestedBio] = useState('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleSuggestion = () => {
    startTransition(async () => {
      try {
        const result = await suggestBioImprovements({
          currentBio,
          education: educationText,
          workExperience: workExperienceText,
        });
        if (result.improvedBio) {
          setSuggestedBio(result.improvedBio);
          toast({
            title: "AI Suggestion Ready",
            description: "We've generated a new bio for you. Review and accept it if you like.",
          });
        }
      } catch (error) {
        console.error('Error getting bio suggestion:', error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to get AI suggestion. Please try again.",
        });
      }
    });
  };

  const acceptSuggestion = () => {
    setCurrentBio(suggestedBio);
    setSuggestedBio('');
    toast({
      title: "Bio Updated!",
      description: "Your bio has been updated with the AI suggestion.",
    });
  };

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
          <Textarea
            value={currentBio}
            onChange={(e) => setCurrentBio(e.target.value)}
            className="min-h-[120px] text-lg text-muted-foreground mb-4 bg-background/50"
            placeholder="Your bio goes here..."
          />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button onClick={handleSuggestion} disabled={isPending} className="w-full sm:w-auto">
              {isPending ? (
                <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              Enhance with AI
            </Button>
            {suggestedBio && (
              <Button onClick={acceptSuggestion} variant="secondary" className="w-full sm:w-auto">
                <CheckCircle className="mr-2 h-4 w-4" />
                Accept Suggestion
              </Button>
            )}
          </motion.div>

          {suggestedBio && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6"
            >
              <Card className="bg-primary/5">
                <CardContent className="p-4">
                  <p className="font-semibold text-primary mb-2">AI Suggestion:</p>
                  <p className="text-muted-foreground">{suggestedBio}</p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}
