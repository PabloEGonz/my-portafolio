'use client';
import { NextPage } from 'next';
import Modal from './Modal';
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

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
      <div className='card-compact card w-96 bg-base-100 shadow-xl'>
        <figure>
          <Image src={data.image} alt='project image' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{data.name}</h2>
          <p>{data.description}</p>
          <div className='card-actions justify-end'>
            <button className='btn' onClick={() => setIsOpen(true)}>
              open modal
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
          <div className='col-span-3'>
            <Image src={data.image} alt='project image' className='rounded' />
            <div className='flex p-6 gap-5'>
              <button className='btn bg-purple text-white'>See live</button>
              <button className='btn bg-purple text-white'>
                Go to Repository
              </button>
            </div>
          </div>
          <div className='col-span-2 text-black'>
            <h2 className='text-2xl font-bold'>{data.name}</h2>
            <p className='px-3'>{data.paragraph}</p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Project;
