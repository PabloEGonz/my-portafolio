'use client';
import { NextPage } from 'next';
import Project from './Project';
import Atropos from 'atropos/react';
import projects from '../data';

interface Props {}

const Projects: NextPage<Props> = ({}) => {
  return (
    <div className='p-6' id='projects'>
      <h2 className='mb-12 text-4xl text-primary'>My Recent Projects</h2>
      <div className='grid gap-10 lg:grid-cols-2'>
        {projects.map((project) => {
          return (
            <Atropos activeOffset={40} shadowScale={1.05}>
              <Project data={project} />
            </Atropos>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
