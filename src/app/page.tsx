import Contact from '../components/contact/Contact';
import Skills from '../components/skills/Skills';
import Timeline from '../components/projects/Timeline';
import Hero from '@/components/hero/Hero';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between'>
      <Hero />
      <Timeline />
      <Skills />
      <Contact />
    </main>
  );
}
