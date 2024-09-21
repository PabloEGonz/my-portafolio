'use client';
import NavList from './NavItem';
import { useScroll } from './NavbarHelper';

const styles = {
  active: {
    visibility: 'visible',
    transition: 'all 0.5s',
  },
  hidden: {
    visibility: 'hidden',
    transition: 'all 0.5s',
    transform: 'translateY(-100%)',
  },
};

const visible =
  'navbar fixed inset-x-0 left-0 top-0 z-30 justify-center p-6 lg:bg-white/50 lg:backdrop-blur-3xl transition-all duration-500 ease-in-out visible';
const hidden =
  'translate-y-[-100%] transition-all duration-500 ease-in-out invisible';
const Navbar = ({}) => {
  const { scrollDirection } = useScroll();

  return (
    <nav className={scrollDirection === 'down' ? visible : hidden}>
      <div className='navbar-start w-full lg:hidden'>
        <div className='dropdown'>
          <label
            tabIndex={0}
            className='border-1 btn btn-ghost border-black bg-black text-white'
          >
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
            className='menu dropdown-content rounded-box z-[1] mt-3 w-52 bg-white/30 p-2 shadow backdrop-blur-lg'
          >
            <li className='text-lg text-black hover:font-semibold'>
              <a href='#home'>Home</a>
            </li>
            <li className='text-lg text-black hover:font-semibold'>
              <a href='#projects'>Projects</a>
            </li>
            <li className='text-lg text-black hover:font-semibold'>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <NavList />
    </nav>
  );
};

export default Navbar;
