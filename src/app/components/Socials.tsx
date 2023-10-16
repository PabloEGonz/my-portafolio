import { NextPage } from 'next';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiWellfound, SiGmail } from 'react-icons/si';

interface Props {}

const Socials: NextPage<Props> = ({}) => {
  return (
    <div className='bg-purple rounded fixed left-0'>
      <ul className='flex-col p-2'>
        <li className='m-4 text-2xl text-white hover:text-black hover:scale-110'>
          <a href='https://github.com/PabloEGonz'>
            <BsGithub />
          </a>
        </li>
        <li className='m-4 text-2xl text-white hover:text-black hover:scale-110'>
          <a href='https://www.linkedin.com/in/pabloezekielgonz/'>
            <BsLinkedin />
          </a>
        </li>
        <li className='m-4 text-3xl text-white hover:text-black hover:scale-110'>
          <a href='https://wellfound.com/u/pabloezekielgonz'>
            <SiWellfound />
          </a>
        </li>
        <li className='m-4 text-2xl text-white hover:text-black hover:scale-110'>
          <a href='mailto:ezekielgonzalezr@gmail.com'>
            <SiGmail />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
