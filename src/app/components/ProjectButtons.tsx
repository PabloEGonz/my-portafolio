import React from 'react';
import { ProjectProps } from './Project';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { MdPhonelink } from 'react-icons/md';

const ProjectButtons: React.FC<ProjectProps> = ({ data }) => {
  return (
    <div className='flex gap-5 p-6'>
      {data.demo && (
        <a
          href={data.demo}
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-lg bg-black p-2 text-2xl text-white transition-transform duration-300 hover:scale-110 active:bg-black/60'
        >
          <MdPhonelink />
        </a>
      )}
      {data.live && (
        <a
          href={data.live}
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-lg bg-black p-2 text-2xl text-white transition-transform duration-300 hover:scale-110 active:bg-black/60'
        >
          <FiExternalLink />
        </a>
      )}
      {data.repo && (
        <a
          href={data.repo}
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-lg bg-black p-2 text-2xl text-white transition-transform duration-300 hover:scale-110 active:bg-black/60'
        >
          <FaGithub />
        </a>
      )}
    </div>
  );
};

export default ProjectButtons;
