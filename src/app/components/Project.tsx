'use client';
import { NextPage } from 'next';
import Modal from './Modal';
import React, { useState } from 'react';
import Image,{ StaticImageData }  from 'next/image';

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
    <div className='card card-compact w-96 bg-base-100 shadow-xl'>
      <figure>
        <Image src={data.image} alt='project image'/>
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{data.name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className='card-actions justify-end'>
          <button className='btn' onClick={() => setIsOpen(true)}>
            open modal
          </button>
          {isOpen && (
            <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
              <div>
                <h3 className='text-lg font-bold'>Hello!</h3>
                <p className='py-4'>
                  Press ESC key or click on ✕ button to close
                </p>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
