'use client';

import { useEffect, useState } from 'react';

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
        <h1 className="text-4xl font-bold mb-4">Hi! I&apos;m Himal.</h1>
        <p className="text-base text-gray-800 dark:text-gray-300">
          Full-stack developer with 3+ years of experience building and scaling web applications. I
          specialize in Frontend and cloud infrastructure, currently crafting solutions in AI/ML,
          video streaming, and fintech domains. Passionate about clean code, system architecture,
          and building high-performance applications that solve real-world problems.
        </p>
      </div>
      <div className="flex items-center justify-center md:mb-0"></div>
    </div>
  );
}
