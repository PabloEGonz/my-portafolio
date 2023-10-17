import { NextPage } from 'next';

interface Props {}

const About: NextPage<Props> = ({}) => {
  return (
    <section className='min-h-screen p-52 text-secondary'>
      <h2 className='text-6xl'>About me</h2>
      <p className='py-10 pr-64 text-2xl font-thin text-primary'>
        Hello I’m a software developer! I can help you build a product , feature
        or website Look through some of my work and experience! If you like what
        you see and have a project you need coded, don’t hesitate to contact me.
      </p>
      <button type='button' className='hover:bg-pink btn bg-purple text-white'>
        Get my resume
      </button>
    </section>
  );
};

export default About;
