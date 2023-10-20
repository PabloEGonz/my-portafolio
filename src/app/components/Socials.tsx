import { NextPage } from 'next';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiWellfound, SiGmail } from 'react-icons/si';

interface Props {
  direction: String;
}

const Socials: NextPage<Props> = ({ direction }) => {
  return (
    <ul className={`flex flex-${direction} p-2 justify-center`}>
      <li className='m-4 text-2xl text-white hover:scale-110 hover:text-black'>
        <a href='https://github.com/PabloEGonz'>
          <BsGithub />
        </a>
      </li>
      <li className='m-4 text-2xl text-white hover:scale-110 hover:text-black'>
        <a href='https://www.linkedin.com/in/pabloezekielgonz/'>
          <BsLinkedin />
        </a>
      </li>
      <li className='m-4 text-3xl text-white hover:scale-110 hover:text-black'>
        <a href='https://wellfound.com/u/pabloezekielgonz'>
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
