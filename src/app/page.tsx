import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Education from '@/components/sections/education';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';
import Certifications from '@/components/sections/certifications';
import SoftSkills from '@/components/sections/soft-skills';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Separator />
        <Education />
        <Separator />
        <Skills />
        <Separator />
        <Projects />
        <Separator />
        <Experience />
        <Separator />
        <Certifications />
        <Separator />
        <SoftSkills />
        <Separator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
