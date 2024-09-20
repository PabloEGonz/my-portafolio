'use client';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { CardBody, CardContainer, CardItem } from './3d-card';
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

function ProfileCard() {
  return (
    <div className='hidden grow basis-1 justify-center lg:flex'>
      <BackgroundGradient containerClassName='w-fit'>
        <CardContainer containerClassName='py-0'>
          <CardBody className='group/card flex  flex-col rounded-[22px] bg-black p-6 shadow-[-5px_-3px_#ffffff17_inset] transition-all duration-300 hover:shadow-[-2px_-2px_#ffffff17_inset]'>
            <CardItem
              translateZ='100'
              className='flex w-full gap-5 rounded-xl transition-all group-hover/card:shadow-lg'
            >
              <Card className='w-full bg-white/60 shadow-[-2px_-1px_#ffffff16_inset] backdrop-blur-xl transition-all group-hover/card:shadow-[-1px_-1px_#ffffff16_inset] group-hover/card:drop-shadow-[5px_10px_10px_#17343e1c]'>
                <CardHeader className='flex-row items-center gap-10 border-b border-secondary p-4'>
                  <AnimatedTooltip />
                  <div className='flex flex-col'>
                    <CardTitle>Ezequiel G</CardTitle>
                    <CardDescription>Full Stack Developer</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className='p-4'>
                  <p>
                    Experienced in collaborative environments, persistent in
                    overcoming obstacles with a positive mindset I demonstre a
                    strong determination.
                  </p>
                </CardContent>
              </Card>
            </CardItem>
            <CardItem
              translateZ='150'
              className='mt-auto flex w-full gap-5 rounded-xl'
            >
              <div className='flex w-full gap-5'>
                <Link
                  href='https://github.com/PabloEGonz'
                  target='_blank'
                  className='rounded-lg bg-white p-3 text-2xl text-black shadow-[-2px_-2px_#00000069_inset] transition-all group-hover/card:shadow-[-1px_-1px_#00000069_inset]'
                >
                  <BsGithub />
                </Link>
                <Link
                  href='https://www.linkedin.com/in/pabloezekielgonz/'
                  target='_blank'
                  className='rounded-lg bg-white p-3 text-2xl text-black shadow-[-2px_-2px_#00000069_inset] transition-all group-hover/card:shadow-[-1px_-1px_#00000069_inset]'
                >
                  <BsLinkedin />
                </Link>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </BackgroundGradient>
    </div>
  );
}

export default ProfileCard;
