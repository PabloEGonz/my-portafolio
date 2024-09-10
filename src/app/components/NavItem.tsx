'use client';
import { NextPage } from 'next';
import { useState, useEffect } from 'react';

interface Props {}

const NavList: NextPage<Props> = () => {
  const [isMounted, setMounted] = useState(false);
  const [hash, setHash] = useState('');
  const active =
    'text-black dark:text-secondary font-semibold hover:font-semibold hover:text-secondary dark:hover:text-secondary';
  const notActive =
    'text-white hover:font-semibold hover:text-secondary dark:text-primary dark:hover:text-secondary';
  useEffect(() => {
    if (isMounted) {
      setHash(window.location.hash);
    } else {
      setMounted(true);
    }
  }, [isMounted, hash]);

  if (!isMounted) return;

  return (
    <ul className='hidden w-4/6  gap-12 lg:flex justify-end' onClick={() => setHash('set')}>
      <li className={hash == '#home' ? active : notActive}>
        <a href='#home'>Home</a>
      </li>
      <li className={hash == '#projects' ? active : notActive}>
        <a href='#projects'>Projects</a>
      </li>
      <li className={hash == '#about' ? active : notActive}>
        <a href='#about'>About</a>
      </li>
      <li className={hash == '#contact' ? active : notActive}>
        <a href='#contact'>Contact</a>
      </li>
    </ul>
  );
};

export default NavList;
