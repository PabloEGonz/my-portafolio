'use client';
import { ThemeProvider } from 'next-themes';
import { useState, useEffect, ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

interface Props {
  children: string | ReactElement | ReactNode[];
}

const Provider: NextPage<Props> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      {children}
    </ThemeProvider>
  );
};

export default Provider;