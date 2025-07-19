import Image from 'next/image';
import { motion } from 'framer-motion';
import { certifications } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedSection } from '../animated-section';

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
          >
            <Card className="h-full flex flex-col items-center justify-center text-center p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <Image
                src={cert.logo}
                alt={`${cert.name} logo`}
                width={64}
                height={64}
                className="mb-4 rounded-md"
                data-ai-hint={cert.dataAiHint}
              />
              <CardContent className="p-0">
                <p className="font-semibold text-sm">{cert.name}</p>
                <p className="text-xs text-muted-foreground">{cert.provider}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
