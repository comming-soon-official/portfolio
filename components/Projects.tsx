import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { MagicCard } from './ui/magic-card';
import HyperText from './ui/hyper-text';
import Safari from './ui/safari';

const projectsData = [
  {
    title: 'WatchWithMe',
    description:
      'Collaborated and build a synchronized video watching platform that allows users to watch content together in real-time with video/audio chat capabilities.',
    link: 'https://watchwithme.in',
    code: 'private',
    imageSrc: '/images/watchwithme.png',
    technologies: ['Next.js', 'React', 'LiveKit', 'TypeScript', 'Tailwind CSS', 'WebRTC'],
  },
  {
    title: 'CyberKrypts.dev',
    description:
      'Collaborated minor parts to develop a professional portfolio and blog platform for showcasing development work and technical writing. Features dark mode, responsive design, and optimized performance.',
    link: 'https://cyberkrypts.dev',
    code: 'private',
    imageSrc: '/images/cyberkrypts.png',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MDX', 'SandBox', 'Devops'],
  },
  {
    title: 'MultiScribe',
    description:
      'Implemented an advanced transcription service with R&D focus on multilingual support. Created a comprehensive dashboard for audio tracks.',
    link: 'https://multiscribe.vercel.app/',
    code: 'https://github.com/comming-soon-official/multiscribe',
    imageSrc: '/images/multiscribe.png',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GCP', 'translation'],
  },
  {
    title: 'Budget Bro',
    description:
      'Collaborated on testing and backend authentication services, calculation services, and Flutter UI tweaking for a personal finance management application.',
    link: 'https://budget-bro.vercel.app/',
    code: 'private',
    imageSrc: '/images/budget_bro.png',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Flutter',
      'Authentication',
      'Go',
      'Pockebase',
    ],
  },
  {
    title: 'HindhuSmia AI',
    description:
      'AI-powered platform for Hindu scripture analysis and interpretation, featuring natural language processing and semantic search.',
    link: 'https://hindhusmia.ai',
    code: 'https://github.com/comming-soon-official/hindumisia.ai-rework',
    imageSrc: '/images/hindumisia.png',
    technologies: [
      'Next.js',
      'React',
      'Python',
      'NLP',
      'TypeScript',
      'Tailwind CSS',
      'ShadCN',
      'Apache EGraphs',
    ],
  },
  {
    title: 'Bahikhata',
    description:
      'Collaborated with financial experts and developers to create a modern accounting and business management platform built for Indian businesses with GST compliance and financial reporting.',
    link: 'https://web.bahikhata.org',
    code: 'private',
    imageSrc: '/images/bahikhata.png',
    technologies: ['React', 'MongoDB', 'Node.js', 'Bootstrap'],
  },
  {
    title: 'AIEnsured Saas',
    description:
      'Developed an enterprise SaaS platform for AI/ML model testing and validation. Features real-time monitoring, multi-pipeline support, and comprehensive reporting.',
    link: 'https://prod.aiensured.com',
    code: 'private',
    imageSrc: '/images/aiensured_saas.png',
    technologies: [
      'ReactJS',
      'Bootstrap',
      'AntD',
      'Node.js',
      'Devops',
      'AWS',
      'Azure',
      'TypeScript',
    ],
  },

  {
    title: 'AIEnsured Pipelines',
    description:
      'Worked alongside the AIEnsured team to build a data visualization for AI/ML large datas.',
    link: 'https://prod.aiensured.com',
    code: 'private',
    imageSrc: '/images/aiensured_pipeline.png',
    technologies: ['ReactJS', 'Bootstrap', 'MongoDB', 'Graphs', 'Parse Platform', 'NodeJS'],
  },
];

function Projects() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <HyperText className="text-3xl font-bold uppercase " text="Overall Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((project, index) => (
          <MagicCard key={index} className="hover:scale-105 transition-all">
            <div className="flex flex-col ">
              <Safari url="magicui.design" className="size-full" src={project.imageSrc} />

              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-[4px]">
                  {project.technologies.map((technology, index) => (
                    <Badge key={index} variant={'outline'}>
                      {technology}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 mt-4">
                  <Link href={project.link}>
                    <Button variant="default">View</Button>
                  </Link>
                  {project.code !== 'private' && (
                    <Link href={project.code}>
                      <Button variant="outline">Code</Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </MagicCard>
        ))}
      </div>
    </div>
  );
}

export default Projects;
