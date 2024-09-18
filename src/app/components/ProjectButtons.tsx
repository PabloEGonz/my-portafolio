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
          className='btn bg-purple text-white text-2xl hover:bg-pink active:bg-pink/50'
        >
          <MdPhonelink />
        </a>
      )}
      {data.live && (
        <a
          href={data.live}
          target='_blank'
          rel='noopener noreferrer'
          className='btn bg-purple text-white text-2xl hover:bg-pink active:bg-pink/50'
        >
          <FiExternalLink />
        </a>
      )}
      {data.repo && (
        <a
          href={data.repo}
          target='_blank'
          rel='noopener noreferrer'
          className='btn bg-purple text-white text-2xl hover:bg-pink active:bg-pink/50'
        >
          <FaGithub />
        </a>
      )}
    </div>
  );
};

export default ProjectButtons;
