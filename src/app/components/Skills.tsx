import { NextPage } from 'next';
import BackgroundGradient from './BackgroundGradient';
interface Props {}

const Skills: NextPage<Props> = ({}) => {
  return (
    <div className='relative h-[120vh] min-h-[100vh] overflow-hidden rounded-3xl md:h-[100vh]'>
      <BackgroundGradient />
      <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center'>
        <section className='grid grid-cols-1 gap-4 pb-20 md:grid-cols-3 lg:gap-40'>
          <div>
            <h5 className='mb-3 text-3xl font-bold text-black drop-shadow-lg'>
              Languages
            </h5>
            <ul className='grid gap-1'>
              <li className='rounded bg-white/30 p-2 text-sm text-black shadow-2xl backdrop-blur-xl transition-colors duration-700 hover:bg-black/40 hover:text-white md:text-lg'>
                JavaScript
              </li>
              <li className='rounded bg-white/30 p-2 text-sm text-black shadow-2xl backdrop-blur-xl transition-colors duration-700 hover:bg-black/40 hover:text-white md:text-lg'>
                TypeScript
              </li>
              <li className='rounded bg-white/30 p-2 text-sm text-black shadow-2xl backdrop-blur-xl transition-colors duration-700 hover:bg-black/40 hover:text-white md:text-lg'>
                Ruby
              </li>
              <li className='rounded bg-white/30 p-2 text-sm text-black shadow-2xl backdrop-blur-xl transition-colors duration-700 hover:bg-black/40 hover:text-white md:text-lg'>
                CSS & SASS
              </li>
              <li className='rounded bg-white/30 p-2 text-sm text-black shadow-2xl backdrop-blur-xl transition-colors duration-700 hover:bg-black/40 hover:text-white md:text-lg'>
                HTML
              </li>
            </ul>
          </div>
          <div>
            <h5 className='mb-3 text-3xl font-bold text-black drop-shadow-lg'>
              Frameworks
            </h5>
            <ul className='grid gap-1'>
              <li className='rounded bg-white/30 p-2 text-sm text-black shadow-2xl backdrop-blur-xl transition-colors duration-700 hover:bg-black/40 hover:text-white md:text-lg'>
                React JS
              </li>
              <li className='rounded bg-white/30 p-2 text-sm text-black shadow-2xl backdrop-blur-xl transition-colors duration-700 hover:bg-black/40 hover:text-white md:text-lg'>
                Ruby on Rails
              </li>
              <li className='rounded bg-white/30 p-2 text-sm text-black shadow-2xl backdrop-blur-xl transition-colors duration-700 hover:bg-black/40 hover:text-white md:text-lg'>
                Next JS
              </li>
              <li className='rounded bg-white/30 p-2 text-sm text-black shadow-2xl backdrop-blur-xl transition-colors duration-700 hover:bg-black/40 hover:text-white md:text-lg'>
                Vite
              </li>
            </ul>
          </div>
          <div>
            <h5 className='mb-3 text-3xl font-bold text-black drop-shadow-lg'>
              Skills{' '}
            </h5>
            <ul className='grid gap-1'>
              <li className='rounded bg-white/30 p-2 text-sm text-black shadow-2xl backdrop-blur-xl transition-colors duration-700 hover:bg-black/40 hover:text-white md:text-lg'>
                Data Mangement
              </li>
              <li className='rounded bg-white/30 p-2 text-sm text-black shadow-2xl backdrop-blur-xl transition-colors duration-700 hover:bg-black/40 hover:text-white md:text-lg'>
                Version Control
              </li>
              <li className='rounded bg-white/30 p-2 text-sm text-black shadow-2xl backdrop-blur-xl transition-colors duration-700 hover:bg-black/40 hover:text-white md:text-lg'>
                CLI
              </li>
              <li className='rounded bg-white/30 p-2 text-sm text-black shadow-2xl backdrop-blur-xl transition-colors duration-700 hover:bg-black/40 hover:text-white md:text-lg'>
                Web Developement
              </li>
              <li className='rounded bg-white/30 p-2 text-sm text-black shadow-2xl backdrop-blur-xl transition-colors duration-700 hover:bg-black/40 hover:text-white md:text-lg'>
                API Design
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
