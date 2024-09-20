'use client';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './card';
import Link from 'next/link';
import { AnimatedTooltip } from './AnimatedTooltip';
import { BackgroundGradient } from '../Background';
import { Rubik } from 'next/font/google';

const rubik = Rubik({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

function ProfileCardMobile() {
  return (
    <div className='flex grow basis-1 justify-center lg:hidden'>
      <BackgroundGradient containerClassName='w-fit'>
        <Card className='w-full rounded-3xl bg-white/60 shadow-lg backdrop-blur-xl'>
          <CardHeader className='flex-row items-center gap-10 border-b border-secondary p-4'>
            <AnimatedTooltip />
            <div className='flex flex-col'>
              <CardTitle>Ezequiel G</CardTitle>
              <CardDescription>Full Stack Developer</CardDescription>
            </div>
          </CardHeader>
          <CardContent className='p-4'>
            <p className={rubik.className}>
              Experienced in collaborative environments, persistent in
              overcoming obstacles with a positive mindset. Constantly seeking
              new learning opportunities and demonstrating a strong
              determination.
            </p>
          </CardContent>
          <div className='flex gap-5 p-4'>
            <Link
              href='https://github.com/PabloEGonz'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-lg bg-white p-3 text-2xl text-black shadow'
            >
              <BsGithub />
            </Link>
            <Link
              href='https://www.linkedin.com/in/pabloezekielgonz/'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-lg bg-white p-3 text-2xl text-black shadow'
            >
              <BsLinkedin />
            </Link>
          </div>
        </Card>
      </BackgroundGradient>
    </div>
  );
}

export default ProfileCardMobile;
