'use client';

import { motion } from 'framer-motion';

interface RunnerSilhouetteProps {
  className?: string;
}

export function RunnerSilhouette({ className }: RunnerSilhouetteProps) {
  return (
    <motion.div
      className={`absolute bottom-10 w-16 h-16 md:w-20 md:h-20 ${className}`}
      animate={{
        x: ['0vw', '90vw', '0vw'],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <svg
        viewBox="0 0 64 64"
        fill="currentColor"
        className="w-full h-full text-black"
      >
        {/* 러너 실루엣 SVG Path */}
        <path d="M32 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm-8 16c-1.1 0-2 .9-2 2v12l-6 18h4l5-15v15h4V42l5 14h4l-6-18V26c0-1.1-.9-2-2-2h-6z" />
      </svg>
    </motion.div>
  );
}
