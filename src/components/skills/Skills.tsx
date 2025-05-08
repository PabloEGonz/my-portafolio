import BackgroundGradient from './BackgroundGradient';
import { NextPage } from 'next';
import Item from './Item';

interface Props {}

const frontEnd = ['React', 'Next.js', 'Vite', 'HTML', 'CSS', 'SASS'];
const backEnd = ['Ruby on Rails', 'PostgreSQL', 'Ruby', 'MongoDB', 'Node.js'];
const libraries = [
  'Axios',
  'Redux Toolkit',
  'Tailwind CSS',
  'Bootstrap',
  'Three.js',
  'Framer Motion',
];
const testing = ['Capybara', 'Selenium', 'RSpec', 'Jest'];
const tools = [
  'Git & GitHub',
  'WordPress',
  'Elementor',
  'ESLint',
  'Vercel',
  'Heroku',
];

const Skills: NextPage<Props> = ({}) => {
  return (
    <div className='relative w-full py-16 md:py-20 overflow-hidden rounded-3xl'>
      <div className='absolute left-0 top-0 h-full w-full'>
        <BackgroundGradient />
      </div>
      <div className='flex items-center justify-center'>
        <section className='flex flex-shrink flex-row flex-wrap justify-center gap-10 pb-10 lg:gap-20'>
          <div className='order-first basis-1/3 md:basis-1/4 lg:basis-auto'>
            <h5 className='mb-3 text-3xl font-bold text-black drop-shadow-lg'>
              Frontend
            </h5>
            <ul className='grid gap-1 md:gap-1.5'>
              {frontEnd.map((language) => (
                <Item item={language} key={language} />
              ))}
            </ul>
          </div>
          <div className='basis-1/3 md:basis-1/4 lg:basis-auto'>
            <h5 className='mb-3 text-3xl font-bold text-black drop-shadow-lg'>
              Backend
            </h5>
            <ul className='grid gap-1 md:gap-1.5'>
              {backEnd.map((framework) => (
                <Item item={framework} key={framework} />
              ))}
            </ul>
          </div>
          <div className='order-first basis-1/3 md:basis-1/4 lg:order-last lg:basis-auto'>
            <h5 className='mb-3 text-3xl font-bold text-black drop-shadow-lg'>
              Libraries
            </h5>
            <ul className='grid gap-1 md:gap-1.5'>
              {libraries.map((library) => (
                <Item item={library} key={library} />
              ))}
            </ul>
          </div>
          <div className='basis-1/3 md:basis-1/4 lg:basis-auto'>
            <h5 className='mb-3 text-3xl font-bold text-black drop-shadow-lg'>
              Testing
            </h5>
            <ul className='grid gap-1 md:gap-1.5'>
              {testing.map((test) => (
                <Item item={test} key={test} />
              ))}
            </ul>
          </div>
          <div className='basis-1/3 md:basis-1/4 lg:basis-auto'>
            <h5 className='mb-3 text-3xl font-bold text-black drop-shadow-lg'>
              Tools
            </h5>
            <ul className='grid gap-1 md:gap-1.5'>
              {tools.map((tool) => (
                <Item item={tool} key={tool} />
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
