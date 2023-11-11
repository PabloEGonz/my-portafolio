'use client';
import { NextPage } from 'next';
import Modal from './Modal';
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import 'atropos/css';

interface ProjectProps {
  data: {
    name: string;
    description: string;
    paragraph: string;
    image: StaticImageData;
    techs: string[];
    live: string;
    repo: string;
  };
}

const Project: NextPage<ProjectProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='card card-compact bg-primary/50 border-secondary dark:border-none border-2 dark:bg-glass'>
        <figure>{<Image src={data.image} alt='project image' />}</figure>
        <div className='card-body text-white'>
          <h2 className='card-title'>{data.name}</h2>
          <p>{data.description}</p>
          <div className='card-actions justify-end'>
            <button
              className='btn bg-purple text-white hover:bg-pink'
              onClick={() => setIsOpen(true)}
            >
              See more
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
          <div className='col-span-3'>
            <Image
              src={data.image}
              alt='project image'
              className='aspect-video rounded'
            />
            <div className='flex gap-5 p-6'>
              <a
                href={data.live}
                className='btn bg-purple text-white hover:bg-pink active:bg-pink/50'
              >
                See live
              </a>
              <a
                href={data.repo}
                className='btn bg-purple text-white hover:bg-pink active:bg-pink/50'
              >
                Go to Repository
              </a>
            </div>
          </div>
          <div className='col-span-2 text-black dark:text-white'>
            <h2 className='text-2xl font-bold'>{data.name}</h2>
            <p className='px-3'>{data.paragraph}</p>
            <ul className='flex h-fit justify-center gap-3 pl-3 pt-3'>
              {data.techs.map((tech) => {
                return (
                  <li
                    className='w-max bg-purple/80 p-1.5 text-sm text-white hover:bg-pink lg:p-2'
                    key={tech}
                  >
                    {tech}
                  </li>
                );
              })}
            </ul>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Project;
