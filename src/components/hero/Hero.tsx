import ThreeAnimate from './ThreeAnimate';
import ProfileCard from './ProfileCard';
import ProfileCardMobile from './ProfileCardMobile';

const Hero = () => {
  return (
    <section id='home' className='hero min-h-screen overflow-hidden'>
      <ThreeAnimate />
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='animate-gradient mb-5 text-7xl font-semibold text-primary bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-600 via-indigo-600  via-sky-400  via-teal-500 to-pink bg-clip-text text-transparent duration-300'>
            Hey there I&apos;m Ezequiel
          </h1>
          <ProfileCard />
          <ProfileCardMobile />
        </div>
      </div>
    </section>
  );
};

export default Hero;
