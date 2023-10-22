import { NextPage } from 'next';

interface Props {}

const Skills: NextPage<Props> = ({}) => {
  return (
    <section className='grid lg:grid-cols-3 grid-cols-1 lg:gap-40  gap-4 pb-20'>
      <div>
        <h5 className='mb-3 text-3xl font-bold text-primary'>Languages</h5>
        <ul className='grid gap-1'>
          <li className='hover:bg-pink rounded bg-purple/90 dark:bg-purple/40 p-2 text-sm font-bold text-white'>
            JavaScript
          </li>
          <li className='hover:bg-pink rounded bg-purple/90 dark:bg-purple/40 p-2 text-sm font-bold text-white'>
            TypeScript
          </li>
          <li className='hover:bg-pink rounded bg-purple/90 dark:bg-purple/40 p-2 text-sm font-bold text-white'>
            Ruby
          </li>
          <li className='hover:bg-pink rounded bg-purple/90 dark:bg-purple/40 p-2 text-sm font-bold text-white'>
            CSS & SASS
          </li>
          <li className='hover:bg-pink rounded bg-purple/90 dark:bg-purple/40 p-2 text-sm font-bold text-white'>
            HTML
          </li>
        </ul>
      </div>
      <div>
        <h5 className='mb-3 text-3xl font-bold text-primary'>Frameworks</h5>
        <ul className='grid gap-1'>
          <li className='hover:bg-pink rounded bg-purple/90 dark:bg-purple/40 p-2 text-sm font-bold text-white'>
            React JS
          </li>
          <li className='hover:bg-pink rounded bg-purple/90 dark:bg-purple/40 p-2 text-sm font-bold text-white'>
            Ruby on Rails
          </li>
          <li className='hover:bg-pink rounded bg-purple/90 dark:bg-purple/40 p-2 text-sm font-bold text-white'>
            Next JS
          </li>
          <li className='hover:bg-pink rounded bg-purple/90 dark:bg-purple/40 p-2 text-sm font-bold text-white'>
            Vite
          </li>
        </ul>
      </div>
      <div>
        <h5 className='mb-3 text-3xl font-bold text-primary'>Skills </h5>
        <ul className='grid gap-1'>
          <li className='hover:bg-pink rounded bg-purple/90 dark:bg-purple/40 p-2 text-sm font-bold text-white'>
            Data Mangement
          </li>
          <li className='hover:bg-pink rounded bg-purple/90 dark:bg-purple/40 p-2 text-sm font-bold text-white'>
            Version Control
          </li>
          <li className='hover:bg-pink rounded bg-purple/90 dark:bg-purple/40 p-2 text-sm font-bold text-white'>
            CLI
          </li>
          <li className='hover:bg-pink rounded bg-purple/90 dark:bg-purple/40 p-2 text-sm font-bold text-white'>
            Web Developement
          </li>
          <li className='hover:bg-pink rounded bg-purple/90 dark:bg-purple/40 p-2 text-sm font-bold text-white'>
            API Design
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
