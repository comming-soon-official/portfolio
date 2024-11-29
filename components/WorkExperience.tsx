import React from 'react';

interface WorkExperienceItem {
  startDate: string;
  endDate?: string;
  companyName: string;
  companyLogo?: string;
  jobTitle: string;
  location: string;
  occupation: string;
  description: Array<{
    main: string;
    sub?: string[];
  }>;
  companyLink?: string;
}

const workExperienceData: WorkExperienceItem[] = [
  {
    startDate: 'September 2021',
    endDate: 'Present',
    companyName: 'TESTAING',
    jobTitle: 'Frontend Engineer',
    location: 'Remote',
    occupation: 'Employee',
    description: [
      {
        main: 'Developed a full-scale SaaS application from Scratch for Various AI/ML model testing',
        sub: [
          'Built frontend with user authentication, file uploads, WebSocket dashboard for real-time monitoring',
          'Data visualization report pages and dynamic profile pages with multi-theme support',
          'Role management system (Admin, Manager, User) for brand asset control',
        ],
      },
      {
        main: 'Developed robust backend infrastructure for AI/ML testing platform',
        sub: [
          'Parse Server with S3 integration for file storage',
          'Dynamic EC2 provisioning/termination via custom AWS AMIs',
          'Node.js/Express middleman service bridging with Python testing pipelines',
        ],
      },
      {
        main: 'Implemented comprehensive testing and monitoring systems',
        sub: [
          'Multi-pipeline support for diverse AI/ML models (image, NLP, structured data)',
          'Automated result archiving with S3 integration and real-time database updates',
          'CI/CD setup for automated deployments',
        ],
      },
      {
        main: 'Built AI/ML Dashboard with payment integration and optimizations',
        sub: [
          'Razorpay integration with wallet functionality and automatic credit deductions',
          'Interactive data visualization with dynamic graphs for AI/ML pipelines',
          'Performance improvements using DSA techniques and codebase refactoring',
        ],
      },
    ],
  },
  {
    startDate: 'February 2023',
    endDate: 'Present',
    companyName: 'NINJAMONKS',
    jobTitle: 'FullStack Developer / Mobile App Developer',
    location: 'Remote',
    occupation: 'Consultant',
    description: [
      {
        main: 'Developed full-featured expense tracker application',
        sub: [
          'SMS OTP Authentication with Redis rate limiting',
          'Automated recurring transactions via cron jobs',
          'Data extraction & processing from legal documents to MongoDB',
        ],
      },
      {
        main: 'Built offline-first React Native mobile application',
        sub: [
          'RealmDB integration for offline storage and real-time sync',
          'Performance optimization and memory leak fixes',
          'Migration strategies for seamless database upgrades',
        ],
      },
      {
        main: 'Led DevOps and infrastructure management',
        sub: [
          'Jenkins pipeline setup for automated deployments',
          'AWS infrastructure optimization and management',
          'Large-scale legacy data migration with zero downtime',
        ],
      },
    ],
  },
  {
    startDate: 'September 2019',
    endDate: 'Present',
    companyName: 'Cyberkrypts',
    jobTitle: 'FullStack Developer / Browser Extension Developer',
    location: 'Remote',
    occupation: 'Co-Founder',
    description: [
      {
        main: 'Co-developed WatchWithMe platform',
        sub: [
          'Next.js based full-stack implementation with optimized infrastructure',
          'Feature-rich browser extension using WXT framework',
          'LiveKit integration for video/audio calls',
        ],
      },
      {
        main: 'Implemented monitoring and analytics solutions',
        sub: [
          'Grafana & Prometheus for Docker container monitoring',
          'Appsmith dashboards for user analytics',
          'Listmonk with AWS SES for email marketing automation',
        ],
      },
      {
        main: 'Led multiple product initiatives at CyberKrypts',
        sub: [
          'Infrastructure design for CyberKrypts.dev',
          'Gym Buddy React Native mobile app for workout tracking',
          'JobJeeni browser extension for streamlined job hunting',
        ],
      },
    ],
  },
];

const WorkExperience: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full -z-10">
      <h1 className="text-2xl font-bold">Professional Work Experience</h1>

      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {workExperienceData.map((item, index) => (
          <li
            key={index}
            className={`mb-10 ms-4 ${index === workExperienceData.length - 1 ? 'mb-0' : ''}`}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.startDate} - {item.endDate || 'Present'}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.jobTitle} at {item.companyName}
            </h3>
            <div className="flex gap-2 mb-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">{item.location}</span>

              <span className="text-sm text-gray-500 dark:text-gray-400">• {item.occupation}</span>
            </div>
            <div className="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">
              <ul className="list-disc list-inside ">
                {item.description.map((desc, index) => (
                  <li key={index}>
                    <span className="font-semibold">{desc.main}</span>
                    {desc.sub && (
                      <ul className="list-circle list-inside ml-6 mt-1 text-gray-500 dark:text-gray-400">
                        {desc.sub.map((subDesc, subIndex) => (
                          <li key={subIndex} className="text-sm">
                            {subDesc}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            {item.companyLink && (
              <a
                href={item.companyLink}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Learn more{' '}
                <svg
                  className="w-3 h-3 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default WorkExperience;
