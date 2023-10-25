'use-client';
import { NextPage } from 'next';

interface Props {}

const Contact: NextPage<Props> = ({}) => {
  return (
    <section
      id='contact'
      className='flex pb-11 lg:min-h-screen flex-col lg:flex-row lg:p-52'
    >
      <h3 className='w-1/1  p-10 text-3xl text-secondary lg:w-1/3 lg:p-0'>
        I'm always interested in hearing about new projects, so if you would
        like to get in contact with me.
      </h3>
      <form
        action='https://formspree.io/f/xwkjrpwp'
        method='post'
        className='flex flex-col gap-5 lg:px-20 px-10 lg:w-2/3'
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
        <button type='submit' className='btn bg-purple hover:bg-pink lg:w-1/6'>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
