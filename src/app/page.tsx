import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';
import Education from '@/components/sections/education';
import Skills from '@/components/sections/skills';
import Certifications from '@/components/sections/certifications';
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
        <Projects />
        <Separator />
        <Education />
        <Separator />
        <Skills />
        <Separator />
        <Certifications />
        <Separator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
