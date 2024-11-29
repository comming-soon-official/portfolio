'use client';

import { cn } from '@/lib/utils';

export const Meteors = ({ number = 20, className }: { number?: number; className?: string }) => {
  const meteors = new Array(number).fill(true);
  return (
    <div className={cn('fixed inset-0 overflow-hidden pointer-events-none', className)}>
      {meteors.map((_, idx) => (
        <span
          key={idx}
          className={cn(
            'absolute h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-slate-100/50 shadow-[0_0_0_1px_#ffffff10]',
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent"
          )}
          style={{
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + 's',
            animationDuration: Math.random() * (10 - 2) + 2 + 's',
          }}
        />
      ))}
    </div>
  );
};

export default Meteors;
