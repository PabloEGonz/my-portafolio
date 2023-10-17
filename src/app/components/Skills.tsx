import { NextPage } from 'next';

interface Props {}

const Skills: NextPage<Props> = ({}) => {
  return (
    <section className='grid grid-cols-3 gap-40 pb-20'>
      <div>
        <h5 className='text-3xl font-bold mb-3'>Languages</h5>
        <ul className='grid gap-1'>
          <li className='rounded bg-secondary p-2 font-bold text-sm'>JavaScript</li>
          <li className='rounded bg-secondary p-2 font-bold text-sm'>TypeScript</li>
          <li className='rounded bg-secondary p-2 font-bold text-sm'>Ruby</li>
          <li className='rounded bg-secondary p-2 font-bold text-sm'>CSS & SASS</li>
          <li className='rounded bg-secondary p-2 font-bold text-sm'>HTML</li>
        </ul>
      </div>
      <div>
        <h5 className='text-3xl font-bold mb-3'>Frameworks</h5>
        <ul className='grid gap-1'>
          <li className='rounded bg-secondary p-2 font-bold text-sm'>React JS</li>
          <li className='rounded bg-secondary p-2 font-bold text-sm'>Ruby on Rails</li>
          <li className='rounded bg-secondary p-2 font-bold text-sm'>Next JS</li>
          <li className='rounded bg-secondary p-2 font-bold text-sm'>Vite</li>
        </ul>
      </div>
      <div>
        <h5 className='text-3xl font-bold mb-3'>Skills </h5>
        <ul className='grid gap-1'>
          <li className='rounded bg-secondary p-2 font-bold text-sm'>Data Mangement</li>
          <li className='rounded bg-secondary p-2 font-bold text-sm'>Version Control</li>
          <li className='rounded bg-secondary p-2 font-bold text-sm'>CLI</li>
          <li className='rounded bg-secondary p-2 font-bold text-sm'>Web Developement</li>
          <li className='rounded bg-secondary p-2 font-bold text-sm'>API Design</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
