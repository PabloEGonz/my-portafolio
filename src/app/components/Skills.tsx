import { NextPage } from 'next';

interface Props {}

const Skills: NextPage<Props> = ({}) => {
  return (
    <div className='relative h-[130vh] md:h-[100vh]'>
      <div className='gradient-bg'>
        <svg xmlns='http://www.w3.org/2000/svg'>
          <defs>
            <filter id='goo'>
              <feGaussianBlur
                in='SourceGraphic'
                stdDeviation='10'
                result='blur'
              />
              <feColorMatrix
                in='blur'
                mode='matrix'
                values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8'
                result='goo'
              />
              <feBlend in='SourceGraphic' in2='goo' />
            </filter>
          </defs>
        </svg>
        <filter id='grainy'>
          <feTurbulence
            type='fractalNoise'
            baseFrequency='0.8'
            numOctaves='2'
            result='noise'
          />
          <feColorMatrix type='saturate' values='0' />
          <feComposite
            operator='in'
            in2='SourceGraphic'
            in='noise'
            result='grain'
          />
          <feBlend in='SourceGraphic' in2='grain' mode='multiply' />
        </filter>
        <div className='gradients-container'>
          <div className='g1'></div>
          <div className='g2'></div>
          <div className='g3'></div>
          <div className='g4'></div>
          <div className='g5'></div>
          <div className='interactive'></div>
        </div>
      </div>
      <section className='absolute top-10 md:top-1/3 right-1/4 grid grid-cols-1 gap-4 pb-20 md:grid-cols-3 lg:gap-40'>
        <div>
          <h5 className='mb-3 text-3xl font-bold text-black drop-shadow-lg'>Languages</h5>
          <ul className='grid gap-1'>
            <li className='rounded bg-white/30 backdrop-blur-xl p-2 text-sm md:text-lg text-black hover:bg-black/40 hover:text-white shadow-2xl transition-colors duration-700'>
              JavaScript
            </li>
            <li className='rounded bg-white/30 backdrop-blur-xl p-2 text-sm md:text-lg text-black hover:bg-black/40 hover:text-white shadow-2xl transition-colors duration-700'>
              TypeScript
            </li>
            <li className='rounded bg-white/30 backdrop-blur-xl p-2 text-sm md:text-lg text-black hover:bg-black/40 hover:text-white shadow-2xl transition-colors duration-700'>
              Ruby
            </li>
            <li className='rounded bg-white/30 backdrop-blur-xl p-2 text-sm md:text-lg text-black hover:bg-black/40 hover:text-white shadow-2xl transition-colors duration-700'>
              CSS & SASS
            </li>
            <li className='rounded bg-white/30 backdrop-blur-xl p-2 text-sm md:text-lg text-black hover:bg-black/40 hover:text-white shadow-2xl transition-colors duration-700'>
              HTML
            </li>
          </ul>
        </div>
        <div>
          <h5 className='mb-3 text-3xl font-bold text-black drop-shadow-lg'>Frameworks</h5>
          <ul className='grid gap-1'>
            <li className='rounded bg-white/30 backdrop-blur-xl p-2 text-sm md:text-lg text-black hover:bg-black/40 hover:text-white shadow-2xl transition-colors duration-700'>
              React JS
            </li>
            <li className='rounded bg-white/30 backdrop-blur-xl p-2 text-sm md:text-lg text-black hover:bg-black/40 hover:text-white shadow-2xl transition-colors duration-700'>
              Ruby on Rails
            </li>
            <li className='rounded bg-white/30 backdrop-blur-xl p-2 text-sm md:text-lg text-black hover:bg-black/40 hover:text-white shadow-2xl transition-colors duration-700'>
              Next JS
            </li>
            <li className='rounded bg-white/30 backdrop-blur-xl p-2 text-sm md:text-lg text-black hover:bg-black/40 hover:text-white shadow-2xl transition-colors duration-700'>
              Vite
            </li>
          </ul>
        </div>
        <div>
          <h5 className='mb-3 text-3xl font-bold text-black drop-shadow-lg'>Skills </h5>
          <ul className='grid gap-1'>
            <li className='rounded bg-white/30 backdrop-blur-xl p-2 text-sm md:text-lg text-black hover:bg-black/40 hover:text-white shadow-2xl transition-colors duration-700'>
              Data Mangement
            </li>
            <li className='rounded bg-white/30 backdrop-blur-xl p-2 text-sm md:text-lg text-black hover:bg-black/40 hover:text-white shadow-2xl transition-colors duration-700'>
              Version Control
            </li>
            <li className='rounded bg-white/30 backdrop-blur-xl p-2 text-sm md:text-lg text-black hover:bg-black/40 hover:text-white shadow-2xl transition-colors duration-700'>
              CLI
            </li>
            <li className='rounded bg-white/30 backdrop-blur-xl p-2 text-sm md:text-lg text-black hover:bg-black/40 hover:text-white shadow-2xl transition-colors duration-700'>
              Web Developement
            </li>
            <li className='rounded bg-white/30 backdrop-blur-xl p-2 text-sm md:text-lg text-black hover:bg-black/40 hover:text-white shadow-2xl transition-colors duration-700'>
              API Design
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Skills;
