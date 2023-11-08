import { NextPage } from 'next';

interface Props {}

const About: NextPage<Props> = ({}) => {
  return (
    <section id='about' className='p-10 lg:p-52'>
      <h2 className='text-6xl text-secondary '>About me</h2>
      <p className='py-10 text-2xl font-thin dark:text-primary lg:pr-64'>
        Hello, I&apos;m Pablo, a skilled software developer ready to assist you in
        building your next product, feature, or website. Please take a moment to
        explore my portfolio and experience. If you&apos;re impressed with what you
        find and have a project in mind that needs coding, feel free to reach
        out to me. I&apos;m here to help bring your ideas to life!
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
