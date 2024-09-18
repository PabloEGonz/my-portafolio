'use client';
import { NextPage } from 'next';
import Image from 'next/image';
import Modal from './Modal';
import React, { useState } from 'react';
import 'atropos/css';
import ProjectButtons from './ProjectButtons';

export interface ProjectProps {
  data: {
    name: string;
    description: string;
    paragraph: string;
    image: string;
    techs: string[];
    live?: string;
    repo?: string;
    demo?: string;
  };
}

const Project: NextPage<ProjectProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='card-compact card border-2 border-secondary bg-white/30 backdrop-blur-md'>
        <figure>{<Image src={data.image} alt='project image' />}</figure>
        <div className='card-body text-black'>
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
          <div className='col-span-2 text-black'>
            <h2 className='text-2xl font-bold'>{data.name}</h2>
            <p className='px-3'>{data.paragraph}</p>
            <ul className='flex h-fit justify-center gap-1 pl-3 pt-3 md:gap-3'>
              {data.techs.map((tech) => {
                return (
                  <li
                    className='w-max bg-purple/80 p-1.5 text-xs text-white hover:bg-pink lg:p-2'
                    key={tech}
                  >
                    {tech}
                  </li>
                );
              })}
            </ul>
            {data.repo ? null : (
              <p className='text-balance px-3 py-3 text-sm font-thin text-red'>
                As this project is private, the source code is not available for
                public viewing.
              </p>
            )}
            {data.live ? null : (
              <p className='text-balance px-3 py-3 text-sm font-thin text-red'>
                This is a project that requires a DB so it is not live.
              </p>
            )}
          </div>
        </Modal>
      )}
    </>
  );
};

export default Project;
