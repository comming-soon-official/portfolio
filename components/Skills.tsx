import React from 'react';
import { Badge } from './ui/badge';
import HyperText from './ui/hyper-text';

interface SkillCategory {
  primary?: string[];
  basic?: string[];
}

type SkillsData = {
  [key: string]: string[] | SkillCategory;
};

const skillsData: SkillsData = {
  Languages: {
    primary: ['JavaScript', 'TypeScript'],
    basic: ['Go', 'Python', 'C', 'Bash'],
  },
  Frameworks: {
    primary: ['React', 'Node.js', 'Express.js', 'Next.js', 'WXT Extensions'],
    basic: ['Flask', 'Django', 'FastAPI', 'Flutter'],
  },
  Styling: ['Tailwind CSS', 'Bootstrap', 'CSS', 'SASS'],
  'UI Components': {
    primary: ['ShadCN', 'React Bootstrap', 'NextUI', 'MagicUI'],
    basic: ['Material UI', 'Ant Design', 'daisyUI'],
  },

  Database: ['MongoDB', 'PostgreSQL', 'SQLite', 'RealmDB'],
  'DevOps & Cloud': {
    primary: ['Jenkins', 'CI/CD', 'Git', 'GitLab', 'Coolify', 'Hetzner', 'AWS', 'Listmonk'],
    basic: ['Kubernetes', 'Redis', 'Docker', 'Snyk'],
  },
  'Monitoring & Analytics': ['Grafana', 'Prometheus', 'Appsmith', 'Apache ECharts', 'Chart.js'],
  OS: ['Linux (Arch, Debian)', 'Windows'],
  VAPT: {
    primary: ['OWASP', 'OSINT', 'Burp Suite', 'Metasploit', 'Bug Hunting', 'Reverse Engineering'],
    basic: ['BOF', 'Privilege Escalation'],
  },
  'Mobile Development': {
    primary: ['React Native'],
    basic: ['Flutter'],
  },
  Tools: [
    'Postman',
    'n8n',
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
      <HyperText className="text-3xl font-bold uppercase" text="Skills" />
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
