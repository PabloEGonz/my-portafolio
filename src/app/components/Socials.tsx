import { NextPage } from 'next';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiWellfound, SiGmail } from 'react-icons/si';

interface Props {
  direction: String;
}

const Socials: NextPage<Props> = ({ direction }) => {
  return (
    <ul className={`flex flex-${direction} justify-center p-2`}>
      <li className='m-4 text-2xl text-white hover:scale-110 hover:text-black'>
        <a
          href='https://github.com/PabloEGonz'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsGithub />
        </a>
      </li>
      <li className='m-4 text-2xl text-white hover:scale-110 hover:text-black'>
        <a
          href='https://www.linkedin.com/in/pabloezekielgonz/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsLinkedin />
        </a>
      </li>
      <li className='m-4 text-3xl text-white hover:scale-110 hover:text-black'>
        <a
          href='https://wellfound.com/u/pabloezekielgonz'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SiWellfound />
        </a>
      </li>
      <li className='m-4 text-2xl text-white hover:scale-110 hover:text-black'>
        <a href='mailto:ezekielgonzalezr@gmail.com'>
          <SiGmail />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
