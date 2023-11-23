import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Socials from './components/Socials';
import { Rubik } from 'next/font/google';

const rubik = Rubik({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});
const type =
  'lg:relative lg:w-max lg:before:absolute lg:before:inset-0 lg:before:h-20 lg:before:animate-typewriter before:bg-white dark:before:bg-black  lg:after:absolute lg:after:inset-0 lg:after:w-0.5 lg:after:w-1 lg:after:animate-caret lg:after:bg-black dark:after:bg-white';
export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between dark:bg-black'>
      <section id='home' className='hero min-h-screen'>
        <div className='hero-content text-center'>
          <div className='mt-24 lg:mt-2 lg:max-w-2xl'>
            <h1 className={type + ' mb-5 text-6xl text-primary'}>
              Hey there I&apos;m Ezequiel
            </h1>
            <h2 className='transition duration-1000 mx-auto py-1 mb-6 max-w-md bg-primary text-4xl text-secondary hover:bg-secondary dark:hover:text-white hover:text-primary'>
              I&apos;m a full-stack software developer
            </h2>
            <p
              className={
                rubik.className +
                ' mx-auto max-w-md py-6 font-sans text-lg font-light dark:text-secondary'
              }
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
        <div className='left-0 hidden rounded  bg-purple lg:fixed lg:block'>
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
