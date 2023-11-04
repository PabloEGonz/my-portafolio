import { NextPage } from 'next';

interface Props {}

const About: NextPage<Props> = ({}) => {
  return (
    <section id='about' className='p-10 text-secondary lg:p-52'>
      <h2 className='text-6xl'>About me</h2>
      <p className='py-10 text-2xl font-thin text-primary lg:pr-64'>
        Hello I’m a software developer! I can help you build a product , feature
        or website Look through some of my work and experience! If you like what
        you see and have a project you need coded, don’t hesitate to contact me.
      </p>
      <a
        href='https://docs.google.com/document/d/1vDG_LiYK4fE7tvUjZlCVZRz3X1YyGbd6hbugheDhOWs/edit'
        className='btn bg-purple text-white hover:bg-pink'
      >
        Get my resume
      </a>
    </section>
  );
};

export default About;
