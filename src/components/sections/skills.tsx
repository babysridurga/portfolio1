import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { Progress } from '@/components/ui/progress';
import { AnimatedSection } from '../animated-section';

export default function Skills() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <AnimatedSection id="skills">
      <h2 className="text-3xl font-bold text-center mb-12 font-headline">Technical Skills</h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div key={index} variants={itemVariants}>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-foreground">{skill.name}</span>
              <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
}
