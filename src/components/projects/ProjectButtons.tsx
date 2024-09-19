import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { MdPhonelink } from 'react-icons/md';

const ProjectButtons = ({
  demo,
  live,
  repo,
}: {
  demo?: string;
  live?: string;
  repo?: string;
}) => {
  return (
    <div className='flex gap-5 lg:p-6'>
      {demo && (
        <a
          href={demo}
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-lg bg-black p-2 text-2xl text-white transition-transform duration-300 hover:scale-110 active:bg-black/60'
        >
          <MdPhonelink />
        </a>
      )}
      {live && (
        <a
          href={live}
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-lg bg-black p-2 text-2xl text-white transition-transform duration-300 hover:scale-110 active:bg-black/60'
        >
          <FiExternalLink />
        </a>
      )}
      {repo && (
        <a
          href={repo}
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
