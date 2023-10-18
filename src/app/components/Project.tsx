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
      <div className='bg-glass card-compact card w-96 shadow-xl'>
        <figure>{<Image src={data.image} alt='project image' />}</figure>
        <div className='card-body text-white'>
          <h2 className='card-title'>{data.name}</h2>
          <p>{data.description}</p>
          <div className='card-actions justify-end'>
            <button
              className='hover:bg-pink btn bg-purple text-white'
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
            <Image src={data.image} alt='project image' className='rounded' />
            <div className='flex gap-5 p-6'>
              <button className='hover:bg-pink btn bg-purple text-white'>
                See live
              </button>
              <button className='hover:bg-pink btn bg-purple text-white'>
                Go to Repository
              </button>
            </div>
          </div>
          <div className='col-span-2 text-black'>
            <h2 className='text-2xl font-bold'>{data.name}</h2>
            <p className='px-3'>{data.paragraph}</p>
            <ul className='flex gap-3 pl-3 pt-3'>
              {data.techs.map((tech) => {
                return (
                  <li
                    className='hover:bg-pink rounded bg-purple p-1 text-sm text-white opacity-80'
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
