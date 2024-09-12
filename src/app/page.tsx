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
export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between'>
      <section id='home' className='hero min-h-screen'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='mb-5 pt-16 text-7xl text-primary bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]  from-violet-600  via-indigo-600 via-sky-400 via-teal-500 to-pink text-transparent bg-clip-text animate-gradient duration-300'>
              Hey there I&apos;m Ezequiel
            </h1>
            <h2 className='mb-6 bg-primary text-4xl text-secondary'>
              I&apos;m a full-stack software developer
            </h2>
            <p className={rubik.className + ' py-6 font-sans text-lg font-light'}>
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
        <div className='left-0 hidden rounded-e-lg  bg-purple lg:fixed lg:block z-10'>
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
