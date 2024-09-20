import About from '../components/About';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import Timeline from '../components/projects/Timeline';
import Hero from '@/components/hero/Hero';

const type =
  'lg:relative lg:w-max lg:before:absolute lg:before:inset-0 lg:before:h-20 lg:before:animate-typewriter before:bg-white dark:before:bg-black  lg:after:absolute lg:after:inset-0 lg:after:w-0.5 lg:after:w-1 lg:after:animate-caret lg:after:bg-black dark:after:bg-white';
export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between'>
      <Hero />
      <Timeline />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
