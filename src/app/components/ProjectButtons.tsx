import React from 'react';
import { ProjectProps } from './Project';
const ProjectButtons: React.FC<ProjectProps> = ({ data }) => {
  return (
    <div className='flex gap-5 p-6'>
      {data.demo && (
        <a
          href={data.demo}
          target='_blank'
          rel='noopener noreferrer'
          className='btn bg-purple text-white hover:bg-pink active:bg-pink/50'
        >
          See demo
        </a>
      )}
      {data.live && (
        <a
          href={data.live}
          target='_blank'
          rel='noopener noreferrer'
          className='btn bg-purple text-white hover:bg-pink active:bg-pink/50'
        >
          See live
        </a>
      )}
      {data.repo && (
        <a
          href={data.repo}
          target='_blank'
          rel='noopener noreferrer'
          className='btn bg-purple text-white hover:bg-pink active:bg-pink/50'
        >
          Go to Repository
        </a>
      )}
    </div>
  );
};

export default ProjectButtons;
