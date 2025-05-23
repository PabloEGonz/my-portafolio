'use-client';
import { NextPage } from 'next';
import { BackgroundGradient } from '../Background';
import ThreeObject from './ThreeObject';

interface Props {}

const Contact: NextPage<Props> = ({}) => {
  return (
    <section
      id='contact'
      className='flex flex-col items-center gap-5 pt-10 lg:flex-row lg:justify-between lg:gap-20 lg:px-20'
    >
      <div className='absolute left-0 flex h-full w-full overflow-x-hidden'>
        <ThreeObject />
      </div>
      <div className='w-1/1 z-10 space-y-6 rounded-[2rem] bg-white/30 p-10 text-[#000] backdrop-blur-xl lg:w-2/5 lg:bg-white/0 lg:backdrop-blur-none'>
        <h3 className='text-center text-3xl lg:text-left lg:text-5xl'>
          Ready to bring your digital project to life?
        </h3>
        <h3 className='text-balance text-center text-3xl lg:text-left lg:text-5xl'>
          Let&apos;ss connect.
        </h3>
      </div>
      <BackgroundGradient containerClassName='p-4 w-[90%] md:w-2/3 lg:w-1/3'>
        <form
          action='https://formspree.io/f/xwkjrpwp'
          method='post'
          className='flex flex-col gap-5 rounded-xl bg-white/30 p-4 backdrop-blur-lg'
        >
          <input
            type='text'
            placeholder='Name'
            className='input input-bordered'
          />
          <input
            type='text'
            placeholder='Email'
            className='input input-bordered'
          />
          <textarea
            name='comments'
            id='comments'
            cols={30}
            rows={5}
            placeholder='Write me Something'
            className='textarea textarea-bordered'
          ></textarea>
          <div className='flex flex-wrap justify-between'>
            <button
              type='submit'
              className='btn bg-black text-white hover:bg-black/10'
            >
              Submit
            </button>
            <a
              href='https://docs.google.com/document/d/1Cpk3OEmpYx1Nr-jeeX3SgfUsKTtd4yF1QG6iElh7b2I/edit?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              className='btn bg-black text-white hover:bg-black/10'
            >
              Get my resume
            </a>
          </div>
        </form>
      </BackgroundGradient>
    </section>
  );
};

export default Contact;
