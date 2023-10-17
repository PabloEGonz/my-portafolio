import { NextPage } from 'next';

interface Props {}

const Contact: NextPage<Props> = ({}) => {
  return (
    <section className='flex min-h-screen p-52'>
      <h3 className='w-1/3 text-3xl'>
        I'm always interested in hearing about new projects, so if you would
        like to get in contact with me.
      </h3>
      <form action='post' className='flex flex-col gap-5 p-10'>
        <input type='text' placeholder='Name' />
        <input type='text' placeholder='Email' />
        <textarea name='comments' id='comments' cols={30} rows={10}>
          Write anything
        </textarea>
      </form>
    </section>
  );
};

export default Contact;
