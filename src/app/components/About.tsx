import { NextPage } from 'next';

interface Props {}

const About: NextPage<Props> = ({}) => {
  return (
    <section id='about' className='text-secondary lg:p-52 p-10'>
      <h2 className='text-6xl'>About me</h2>
      <p className='text-2xl font-thin text-primary py-10 lg:pr-64'>
        Hello I’m a software developer! I can help you build a product , feature
        or website Look through some of my work and experience! If you like what
        you see and have a project you need coded, don’t hesitate to contact me.
      </p>
      <button type='button' className='btn bg-purple text-white hover:bg-pink'>
        Get my resume
      </button>
    </section>
  );
};

export default About;
