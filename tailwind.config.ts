import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      black: '#001621',
      white: '#fff',
      primary: '#1a9e97',
      pink: '#E60576',
      glass: '#fafafa35',
      secondary: '#DEB992',
      purple: '#8258ff',
      opacity: '#051622d0'
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1a9e97',
          secondary: '#DEB992',
          accent: '#1dcdbc',
          neutral: '#2b3440',
          'base-100': '#ffffff',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
export default config;
