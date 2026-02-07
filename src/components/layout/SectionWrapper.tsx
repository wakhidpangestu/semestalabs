import React from 'react';
import { cn } from '../../utils/cn';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-20 px-4 md:px-6 relative overflow-hidden", className)}>
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {children}
      </div>
    </section>
  );
}
