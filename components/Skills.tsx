import React from 'react';
import { Badge } from './ui/badge';

interface SkillCategory {
  primary?: string[];
  basic?: string[];
}

type SkillsData = {
  [key: string]: string[] | SkillCategory;
};

const skillsData: SkillsData = {
  Languages: {
    primary: ['JavaScript', 'TypeScript', 'Python', 'C', 'Bash'],
    basic: ['Go', 'C++'],
  },
  Frameworks: {
    primary: ['React', 'Node.js', 'Express.js', 'Next.js', 'WXT Extensions'],
    basic: ['Flask', 'Django', 'Gin', 'FastAPI', 'Flutter'],
  },
  Styling: ['Tailwind CSS', 'Bootstrap', 'CSS', 'SASS'],
  'UI Components': [
    'ShadCN',
    'React Bootstrap',
    'Ant Design',
    'daisyUI',
    'NextUI',
    'MagicUI',
    'Material UI',
  ],
  Database: ['MongoDB', 'PostgreSQL', 'SQLite', 'RealmDB'],
  'DevOps & Cloud': {
    primary: [
      'Jenkins',
      'CI/CD',
      'Git',
      'GitLab',
      'Redis',
      'Docker',
      'Coolify',
      'Snyk',
      'Hetzner',
      'AWS',
      'Listmonk',
    ],
    basic: ['Kubernetes'],
  },
  'Monitoring & Analytics': ['Grafana', 'Prometheus', 'Appsmith', 'Apache ECharts', 'Chart.js'],
  OS: ['Linux (Arch, Debian)', 'Windows'],
  VAPT: {
    primary: [
      'OWASP',
      'OSINT',
      'Burp Suite',
      'Metasploit',
      'Privilege Escalation',
      'Bug Hunting',
      'Reverse Engineering',
    ],
    basic: ['BOF'],
  },
  'Mobile Development': {
    basic: ['React Native', 'Flutter'],
  },
  Tools: [
    'Postman',
    'VSCode',
    'Cursor',
    'Drizzle Studio',
    'Compass',
    'GitHub',
    'GitLab',
    'Figma',
    'Docker Desktop',
    'JIRA',
    'Notion',
    'Linear',
  ],
};

function Skills() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <h1 className="text-2xl font-bold">Skills</h1>
      <div className="flex flex-col gap-4">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{category}</h2>
            <div className="flex flex-wrap gap-2">
              {typeof skills === 'object' && !Array.isArray(skills) ? (
                <>
                  {skills.primary?.map((skill: string, index: number) => (
                    <Badge key={index} className="">
                      {skill}
                    </Badge>
                  ))}
                  {skills.basic?.map((skill: string, index: number) => (
                    <Badge key={index} variant={'secondary'} className="">
                      {skill}
                    </Badge>
                  ))}
                </>
              ) : (
                (skills as string[]).map((skill: string, index: number) => (
                  <Badge key={index} className="">
                    {skill}
                  </Badge>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;