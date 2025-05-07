'use client';
import DesktopLinks from './DesktopLinks';
import { Navbar as Nav } from '@nextui-org/navbar';
import Link from 'next/link';
const Navbar = ({}) => {
  return (
    <Nav
      shouldHideOnScroll
      className='z-40 bg-black py-6 lg:p-6'
    >
      <div className='navbar-start w-full lg:hidden'>
        <div className='dropdown'>
          <label
            tabIndex={0}
            className='border-1 btn-ghost border-black bg-black text-white'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block h-6 w-6 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu gap-3 dropdown-content rounded z-[1] mt-3 w-52 bg-white/95 p-4 text-lg font-light text-black shadow backdrop-blur-3xl'
          >
            <Link href='/'>Home</Link>
            <Link href='#projects'>Projects</Link>
            <Link href='#contact'>Contact</Link>
          </ul>
        </div>
      </div>
      <DesktopLinks />
    </Nav>
  );
};

export default Navbar;
