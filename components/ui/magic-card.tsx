'use client';

import { cn } from '@/lib/utils';
import { useMotionTemplate, useMotionValue, motion } from 'framer-motion';
import { MouseEvent } from 'react';

export interface MagicCardProps {
  children: React.ReactNode;
  className?: string;
}

export const MagicCard: React.FC<MagicCardProps> = ({ children, className }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        'group relative w-full rounded-xl border border-white/10 bg-gray-900/5 dark:bg-gray-100/5 px-4 py-4 shadow-md transition duration-200 hover:shadow-xl',
        className
      )}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
};
