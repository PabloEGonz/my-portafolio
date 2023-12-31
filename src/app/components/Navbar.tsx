'use client';
import { NextPage } from 'next';
import ThemeSwitch from './ThemeSwitch';
import NavList from './NavItem';

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  return (
    <nav className='navbar fixed inset-x-0  left-0 top-0 z-10 justify-between border-b border-secondary bg-primary p-6 dark:bg-black'>
      <div className='navbar-start lg:hidden'>
        <div className='dropdown '>
          <label tabIndex={0} className='btn btn-circle btn-ghost text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block h-5 w-5 stroke-current'
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
            className='menu dropdown-content rounded-box z-[1] mt-3 w-52 bg-black p-2 shadow'
          >
            <li className='text-white hover:font-semibold hover:text-secondary dark:text-primary dark:hover:text-secondary'>
              <a href='#home'>Home</a>
            </li>
            <li className='text-white hover:font-semibold hover:text-secondary dark:text-primary dark:hover:text-secondary'>
              <a href='#projects'>Projects</a>
            </li>
            <li className='text-white hover:font-semibold hover:text-secondary dark:text-primary dark:hover:text-secondary'>
              <a href='#about'>About</a>
            </li>
            <li className='text-white hover:font-semibold hover:text-secondary dark:text-primary dark:hover:text-secondary'>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <NavList />
      </div>
      <ThemeSwitch />
    </nav>
  );
};

export default Navbar;
