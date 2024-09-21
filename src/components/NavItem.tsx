'use client';
import { NextPage } from 'next';
import { useState, useEffect } from 'react';

interface Props {}

const NavList: NextPage<Props> = () => {
  const [isMounted, setMounted] = useState(false);
  const [hash, setHash] = useState('');
  const active =
    'text-black font-semibold hover:font-semibold link-underline';
  const notActive =
    'text-primary hover:font-semibold hover:text-black link-underline';
  useEffect(() => {
    if (isMounted) {
      setHash(window.location.hash);
    } else {
      setMounted(true);
    }
  }, [isMounted, hash]);

  if (!isMounted) return;

  return (
    <ul className='hidden gap-12 lg:flex justify-end' onClick={() => setHash('set')}>
      <li className={hash == '#home' ? active : notActive}>
        <a className="underline-animation" href='#home'>Home</a>
      </li>
      <li className={hash == '#projects' ? active : notActive}>
        <a href='#projects'>Projects</a>
      </li>
      <li className={hash == '#contact' ? active : notActive}>
        <a href='#contact'>Contact</a>
      </li>
    </ul>
  );
};

export default NavList;
