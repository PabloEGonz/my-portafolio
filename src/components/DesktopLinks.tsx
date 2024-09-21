import Link from 'next/link';

const DesktopLinks = () => {
  return (
    <ul className='mx-auto hidden gap-12 lg:flex'>
      <Link className='link-underline text-lg font-light hover:font-normal text-black' href='/'>
        Home
      </Link>
      <Link className='link-underline text-lg font-light hover:font-normal text-black' href='#projects'>
        Projects
      </Link>
      <Link className='link-underline text-lg font-light hover:font-normal text-black' href='#contact'>
        Contact
      </Link>
    </ul>
  );
};

export default DesktopLinks;
