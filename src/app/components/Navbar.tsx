import { NextPage } from 'next';

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  return (
    <nav className='fixed inset-x-0  left-0 top-0 z-10 border-b border-secondary bg-black p-6'>
      <ul className='flex  w-4/6 gap-12 '>
        <li className='text-primary hover:text-secondary'>About</li>
        <li className='text-primary hover:text-secondary'>Home</li>
        <li className='text-primary hover:text-secondary'>Projects</li>
      </ul>
    </nav>
  );
};

export default Navbar;
