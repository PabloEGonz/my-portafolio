'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { NextPage } from 'next';

interface Props {}

const ThemeSwitch: NextPage<Props> = ({}) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value='dark'>Dark</option>
      <option value='light'>Light</option>
    </select>
  );
};

export default ThemeSwitch;
