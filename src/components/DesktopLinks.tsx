import Link from 'next/link';

const DesktopLinks = () => {
  return (
    <ul className='mx-auto hidden gap-12 lg:flex'>
      <Link className='link-underline text-lg font-light text-white' href='/'>
        Home
      </Link>
      <Link className='link-underline text-lg font-light text-white' href='#projects'>
        Projects
      </Link>
      <Link className='link-underline text-lg font-light text-white' href='#contact'>
        Contact
      </Link>
    </ul>
  );
};

export default DesktopLinks;
