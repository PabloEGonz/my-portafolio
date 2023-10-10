"use client"
import { NextPage } from 'next';
import Project from './Project';
import projects from '../data';

interface Props {}

const Projects: NextPage<Props> = ({}) => {
  return (
    <div className='p-6'>
      <h2 className='text-4xl mb-12'>My Recent Projects</h2>
      <div className='grid grid-cols-2 gap-10'>
      {projects.map((project) => {
        return <Project data={project} />;
      })}
      </div>
    </div>
  );
};

export default Projects;
