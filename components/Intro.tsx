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
          Full-stack Engineer with 4+ years of experience building scalable web, mobile, and
          cloud-based applications. Currently leading fintech solution, focusing on development,
          security, and user experience. Skilled in system design, DevOps, and cloud-native
          architectures, with a proven record of delivering SaaS, and AI/ML solutions.
        </p>
      </div>
    </div>
  );
}
