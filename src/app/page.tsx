import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Socials from './components/Socials';
import { Rubik } from 'next/font/google';
import ThreeAnimate from './components/ThreeAnimate';

const rubik = Rubik({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});
const type =
  'lg:relative lg:w-max lg:before:absolute lg:before:inset-0 lg:before:h-20 lg:before:animate-typewriter before:bg-white dark:before:bg-black  lg:after:absolute lg:after:inset-0 lg:after:w-0.5 lg:after:w-1 lg:after:animate-caret lg:after:bg-black dark:after:bg-white';
export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between'>
      <section id='home' className='hero min-h-screen overflow-hidden'>
        <ThreeAnimate />
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='animate-gradient mb-5 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-600 via-indigo-600  via-sky-400  via-teal-500 to-pink bg-clip-text pt-16 text-7xl text-primary text-transparent duration-300'>
              Hey there I&apos;m Ezequiel
            </h1>
            <h2 className='mb-6 bg-white/30 backdrop-blur-md text-4xl text-black p-3 rounded-lg'>
              I&apos;m a full-stack software developer
            </h2>
            <p
              className={rubik.className + ' py-6 font-sans text-lg font-light bg-white/50 backdrop-blur-md rounded-lg'}
            >
              Certified Full-stack web developer with experience in
              collaborative environments, persistent in overcoming obstacles
              with a positive mindset. Constantly seeking new learning
              opportunities and demonstrating a strong determination to achieve
              set goals. Skilled in building web applications using Ruby on
              Rails, React, and Next.js.
            </p>
            <div className='rounded bg-purple lg:hidden'>
              <Socials direction='row' />
            </div>
          </div>
        </div>
        <div className='left-0 z-10 hidden  rounded-e-lg bg-purple lg:fixed lg:block'>
          <Socials direction='col' />
        </div>
      </section>
      <Projects />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
