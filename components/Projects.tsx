import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const projectsData = [
  {
    title: 'WatchWithMe',
    description:
      'Collaborated and build a synchronized video watching platform that allows users to watch content together in real-time with video/audio chat capabilities.',
    link: 'https://watchwithme.in',
    code: 'private',
    previewVideo: '/videos/WatchWithMePreview.mp4',
    technologies: ['Next.js', 'React', 'LiveKit', 'TypeScript', 'Tailwind CSS', 'WebRTC'],
  },
  {
    title: 'CyberKrypts.dev',
    description:
      'Collaborated minor parts to develop a professional portfolio and blog platform for showcasing development work and technical writing. Features dark mode, responsive design, and optimized performance.',
    link: 'https://cyberkrypts.dev',
    code: 'https://github.com/cyberkrypts/cyberkrypts.dev',
    previewVideo: '/videos/CyberKryptsPreview.mp4',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MDX', 'SandBox', 'Devops'],
  },
  {
    title: 'HindhuSmia AI',
    description:
      'AI-powered platform for Hindu scripture analysis and interpretation, featuring natural language processing and semantic search.',
    link: 'https://hindhusmia.ai',
    code: 'private',
    previewVideo: '/videos/HindhuSmiaPreview.mp4',
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
    previewVideo: '/videos/BahikhataPreview.mp4',
    technologies: ['React', 'MongoDB', 'Node.js', 'Bootstrap'],
  },
  {
    title: 'AIEnsured Saas',
    description:
      'Developed an enterprise SaaS platform for AI/ML model testing and validation. Features real-time monitoring, multi-pipeline support, and comprehensive reporting.',
    link: 'https://prod.aiensured.com',
    code: 'private',
    previewVideo: '/videos/TestaingPreview.mp4',
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
    previewVideo: '/videos/AIEnsuredPreview.mp4',
    technologies: ['ReactJS', 'Bootstrap', 'MongoDB', 'Graphs', 'Parse Platform', 'NodeJS'],
  },
];

function Projects() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">Overall Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((project, index) => (
          <div key={index} className="flex flex-col border rounded-md dark:border-gray-700">
            <video src={project.previewVideo} autoPlay muted loop className="rounded-t-md" />
            <div className="flex flex-col gap-3 p-4 grow">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">{project.description}</p>
              <div className="flex flex-wrap gap-[4px]">
                {project.technologies.map((technology, index) => (
                  <Badge key={index} variant={'outline'}>
                    {technology}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
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
        ))}
      </div>
    </div>
  );
}

export default Projects;
