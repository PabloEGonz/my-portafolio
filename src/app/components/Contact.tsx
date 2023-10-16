'use-client';
import { NextPage } from 'next';

interface Props {}

const Contact: NextPage<Props> = ({}) => {
  return (
    <section className='flex min-h-screen p-52'>
      <h3 className='w-1/3 text-3xl text-secondary'>
        I'm always interested in hearing about new projects, so if you would
        like to get in contact with me.
      </h3>
      <form
        action='https://formspree.io/f/xwkjrpwp'
        method='post'
        className='flex w-2/3 flex-col gap-5 px-20'
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
        <textarea name='comments' id='comments' cols={30} rows={5} placeholder='Write me Something' className='textarea textarea-bordered'>
        </textarea>
        <button type='submit' className='btn bg-purple w-1/6 hover:bg-pink'>Submit</button>
      </form>
    </section>
  );
};

export default Contact;
