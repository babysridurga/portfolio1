import { motion } from 'framer-motion';
import { education } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import { AnimatedSection } from '../animated-section';

export default function Education() {
  return (
    <AnimatedSection id="education">
      <h2 className="text-3xl font-bold text-center mb-12 font-headline">Education</h2>
      <div className="max-w-2xl mx-auto">
        {education.map((edu, index) => (
           <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center gap-4 bg-primary/5">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <CardTitle>{edu.institution}</CardTitle>
                  <CardDescription>{edu.degree}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-6 grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-semibold">{edu.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">CGPA</p>
                  <p className="font-semibold">{edu.cgpa}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
