import { BackgroundGradient } from '../Background';
import Image from 'next/image';
import { WobbleCard } from './WoobleCard';
import { usePalette } from 'color-thief-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './Accordion';

type Card = {
  title: string;
  text: string;
};
export type ProjectProps = {
  name: string;
  description: string;
  image: string;
  techs: string[];
  live?: string;
  repo?: string;
  demo?: string;
  cards: { a: Card; b: Card };
};

export function Project({
  techs,
  description,
  cards,
  image,
  name,
}: ProjectProps) {
  const { data } = usePalette(image ?? '', 8, 'hex');
  return (
    <div>
      <p className='text-muted-foreground mb-8 text-lg font-light'>
        {description}
      </p>
      <div className='mb-8'>
        <ul className='flex h-fit flex-wrap gap-1 md:gap-3'>
          {techs.map((tech) => (
            <li
              className='w-max rounded bg-black p-1.5 text-xs text-white shadow transition-all duration-100 ease-in-out hover:translate-x-[-1px] hover:bg-primary hover:shadow-lg lg:p-2'
              key={tech}
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className='flex-wrap gap-4 space-y-4 lg:flex lg:space-y-0'>
        <BackgroundGradient containerClassName='basis-[45%] grow'>
          <Image
            src={image}
            alt={name}
            width={500}
            height={500}
            className='h-full w-full rounded-lg object-cover'
          />
        </BackgroundGradient>
        <WobbleCard
          style={{ backgroundColor: data?.[6] ?? '#262626' }}
          containerClassName='basis-[20%] grow hidden lg:block'
          className='flex flex-col justify-center pt-2'
        >
          <h2
            style={{
              color: data?.[7] ?? '#fff',
              filter: 'brightness(0.4)',
            }}
            className='text-balance text-left text-base font-bold tracking-[-0.015em] md:text-xl lg:text-3xl'
          >
            {cards.a.title}
          </h2>
          <p className='mt-4 text-left text-sm text-text-white'>
            {cards.a.text}
          </p>
        </WobbleCard>
        <WobbleCard
          style={{ backgroundColor: data?.[7] ?? '#235147' }}
          containerClassName='col-span-2 hidden lg:block'
          className='py-2 xl:py-5'
        >
          <h2 className='text-balance text-left text-base font-bold tracking-[-0.015em] text-text-white md:text-xl lg:text-3xl'>
            {cards.b.title}
          </h2>
          <div className='mt-4 max-w-[700px] text-left text-sm text-text-white'>
            {cards.b.text}
          </div>
        </WobbleCard>
        <Accordion type='multiple' className='block lg:hidden'>
          <AccordionItem value='item-1'>
            <AccordionTrigger className='text-left'>
              {cards.a.title}
            </AccordionTrigger>
            <AccordionContent>{cards.a.text}</AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger className='text-left'>
              {cards.b.title}
            </AccordionTrigger>
            <AccordionContent>{cards.b.text}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
