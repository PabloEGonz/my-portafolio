'use-client';
import { NextPage } from 'next';
import { BackgroundGradient } from '../Background';
import ThreeObject from './ThreeObject';

interface Props {}

const Contact: NextPage<Props> = ({}) => {
  return (
    <section
      id='contact'
      className='flex flex-col items-center py-10 lg:flex-row lg:justify-between lg:gap-20 lg:px-40'
    >
      <div className='absolute left-0 flex h-full w-full overflow-x-hidden'>
        <ThreeObject />
      </div>
      <h3 className='w-1/1 z-10 p-10 text-4xl font-semibold text-black lg:w-1/3 lg:p-0'>
        Contact me so we can discuss how I can help bring your digital projects
        to life, and let&apos;s make something great together!
      </h3>
      <BackgroundGradient containerClassName='px-2 lg:px-10 w-[90%] lg:w-1/3 lg:p-2'>
        <form
          action='https://formspree.io/f/xwkjrpwp'
          method='post'
          className='flex flex-col gap-5 rounded-xl bg-white/30 p-5 backdrop-blur-lg'
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
