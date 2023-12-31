'use-client';
import { NextPage } from 'next';

interface Props {}

const Contact: NextPage<Props> = ({}) => {
  return (
    <section
      id='contact'
      className='flex flex-col pb-11 lg:min-h-screen lg:flex-row lg:p-52'
    >
      <h3 className='w-1/1  p-10 text-3xl text-secondary lg:w-1/3 lg:p-0'>
        Let&apos;s connect and discuss how I can help bring your digital
        projects to life. Reach out through this form, and let&apos;s make
        something great together!
      </h3>
      <form
        action='https://formspree.io/f/xwkjrpwp'
        method='post'
        className='flex flex-col gap-5 px-10 lg:w-2/3 lg:px-20'
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
          className='btn bg-purple text-white hover:bg-pink lg:w-fit'
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
