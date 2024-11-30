'use client';

import { useEffect, useState } from 'react';
import HyperText from './ui/hyper-text';
import { GrLocation } from 'react-icons/gr';

export default function Intro() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Return null or loading state while client-side hydration is happening
  if (!isMounted) {
    return null; // or a loading skeleton
  }

  return (
    <div className="w-full flex flex-col-reverse lg:flex-row gap-14 justify-between items-center -z-10">
      <div className="flex flex-col gap-2 w-full lg:w-4/5">
        <div className="flex items-baseline gap-7">
          <HyperText
            className="text-4xl font-bold text-black dark:text-white"
            text="Hi! I'm Himal"
          />
          <p className="flex items-center gap-1">
            <GrLocation className="w-4 h-4" />
            <HyperText text="Vellore, Tamil Nadu" />
          </p>
        </div>
        <p className="text-base text-gray-800 dark:text-gray-300">
          Full-stack developer with 3+ years expertise in building scalable web applications and
          cloud infrastructure. Currently leading development of AI/ML platforms, browser
          extensions, and mobile applications. Proven track record in architecting high-performance
          solutions across fintech, video streaming, and enterprise SaaS domains. Strong focus on
          system design, cloud-native architectures, and implementing best practices for code
          quality and scalability.
        </p>
      </div>
    </div>
  );
}
