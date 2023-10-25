import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Socials from './components/Socials';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between dark:bg-black'>
      <section id='home' className='hero min-h-screen'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-6xl text-primary'>
              Hey there I&apos;m Ezequiel
            </h1>
            <h2 className='mb-6 bg-primary text-4xl text-secondary'>
              I&apos;m a full-stack software developer
            </h2>
            <p className='py-6 text-secondary'>
              Full-Stack Developer, Ruby is my go-to programming language,
              trilingual, Stack: JavaScript, Ruby, Rails, React, Redux. seeking
              growth and open to new challenges
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
