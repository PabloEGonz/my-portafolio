import BackgroundGradient from '../BackgroundGradient';
import { NextPage } from 'next';
import Item from './Item';

interface Props {}

const frontEnd = ['React', 'Next.js', 'Vite', 'HTML', 'CSS', 'SASS'];
const backEnd = ['Ruby on Rails', 'PostgreSQL', 'Ruby', 'MongoDB', 'Node.js'];
const libraries = ['Axios', 'Redux Toolkit', 'Tailwind CSS', 'Bootstrap', 'Three.js', 'Framer Motion'];
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
    <div className='relative w-full overflow-hidden rounded-3xl h-[120vh] lg:h-[70vh]'>
      <BackgroundGradient />
      <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center'>
        <section className='flex flex-row flex-wrap flex-shrink gap-6 pb-10 lg:gap-20 justify-center'>
          <div className='basis-1/3 lg:basis-auto order-first'>
            <h5 className='mb-3 text-3xl font-bold text-black drop-shadow-lg'>
              Frontend
            </h5>
            <ul className='grid gap-1 md:gap-1.5'>
              {frontEnd.map((language) => (
                <Item item={language} key={language} />
              ))}
            </ul>
          </div>
          <div className='basis-1/3 lg:basis-auto'>
            <h5 className='mb-3 text-3xl font-bold text-black drop-shadow-lg'>
              Backend
            </h5>
            <ul className='grid gap-1 md:gap-1.5'>
              {backEnd.map((framework) => (
                <Item item={framework} key={framework} />
              ))}
            </ul>
          </div>
          <div className='basis-1/3 lg:basis-auto order-first lg:order-last'>
            <h5 className='mb-3 text-3xl font-bold text-black drop-shadow-lg'>
              Libraries
            </h5>
            <ul className='grid gap-1 md:gap-1.5'>
              {libraries.map((library) => (
                <Item item={library} key={library} />
              ))}
            </ul>
          </div>
          <div className='basis-1/3 lg:basis-auto'>
            <h5 className='mb-3 text-3xl font-bold text-black drop-shadow-lg'>
              Testing
            </h5>
            <ul className='grid gap-1 md:gap-1.5'>
              {testing.map((test) => (
                <Item item={test} key={test} />
              ))}
            </ul>
          </div>
          <div className='basis-1/3 lg:basis-auto'>
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
