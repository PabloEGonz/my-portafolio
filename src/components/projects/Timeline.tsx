'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { Project } from './Project';
import ProjectButtons from './ProjectButtons';
import projects from './data';

const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div id='projects' className='w-full' ref={containerRef}>
      <div className='flex flex-col items-center justify-center gap-2 md:flex-row md:items-baseline md:gap-5'>
        <h2 className='text-center text-3xl font-extrabold md:text-5xl'>
          My Recent Projects
        </h2>
        <p className='text-muted-foreground text-center text-lg font-light'>
          See what I&apos;ve been working on lately
        </p>
      </div>
      <div
        ref={ref}
        className='relative mx-auto max-w-7xl overflow-hidden pb-20'
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className='flex justify-start pt-10 md:gap-10 md:pt-20'
          >
            <div className='sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm'>
              <div className='absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-black md:left-3'>
                <div className='h-4 w-4 rounded-full border border-neutral-700 bg-neutral-400 p-2' />
              </div>
              <motion.h3
                initial={{ opacity: 0.5 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: '-200px' }}
                className='hidden text-xl font-bold md:block md:pl-20 md:text-5xl'
              >
                {project.name}
                <div className='flex w-full gap-5'>
                  <ProjectButtons
                    repo={project.repo}
                    live={project.live}
                    demo={project.demo}
                  />
                </div>
              </motion.h3>
            </div>

            <div className='relative w-full pl-14 pr-4 md:pl-4'>
              <h3 className='mb-4 block space-y-4 text-left text-2xl font-bold md:hidden'>
                <span>{project.name}</span>
                <div className='flex w-full'>
                  <ProjectButtons
                    repo={project.repo}
                    live={project.live}
                    demo={project.demo}
                  />
                </div>
              </h3>
              <Project {...project} />
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className='absolute left-8 top-0 w-[3px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-400 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700 md:left-8'
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className='from-purple-500 absolute inset-x-0 top-0 w-[3px] rounded-full bg-gradient-to-t from-[0%] via-blue-500 via-[10%] to-transparent'
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
