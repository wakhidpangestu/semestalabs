import React from 'react';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = false, ...props }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5 } : {}}
      className={cn(
        "bg-white/10 dark:bg-base-dark/60 backdrop-blur-lg border border-white/10 dark:border-white/5 rounded-xl p-6",
        "shadow-lg hover:shadow-xl transition-all duration-300",
        className
      )}
      {...props as any}
    >
      {children}
    </motion.div>
  );
}
