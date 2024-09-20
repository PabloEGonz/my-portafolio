'use-client';
import { NextPage } from 'next';
import { BackgroundGradient } from './Background';

interface Props {}

const Contact: NextPage<Props> = ({}) => {
  return (
    <section
      id='contact'
      className='flex lg:gap-20 flex-col pb-11 lg:min-h-screen lg:flex-row lg:justify-between lg:p-40'
    >
      <h3 className='w-1/1  p-10 text-3xl text-secondary lg:w-1/3 lg:p-0'>
        Let&apos;s connect and discuss how I can help bring your digital
        projects to life. Reach out through this form, and let&apos;s make
        something great together!
      </h3>
      <BackgroundGradient containerClassName='px-10 lg:w-1/3 lg:p-2'>
        <form
          action='https://formspree.io/f/xwkjrpwp'
          method='post'
          className='flex flex-col gap-5 p-5 bg-white/30 backdrop-blur-lg rounded-xl'
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
          <button
            type='submit'
            className='btn bg-black text-white hover:bg-black/10 lg:w-fit'
          >
            Submit
          </button>
        </form>
      </BackgroundGradient>
    </section>
  );
};

export default Contact;
