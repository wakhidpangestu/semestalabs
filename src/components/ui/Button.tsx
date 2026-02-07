import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}: ButtonProps) {
  const variants = {
    primary: "bg-primary-500 hover:bg-primary-600 text-white shadow-[0_4px_16px_rgba(30,144,255,0.3),inset_0_2px_0_rgba(255,255,255,0.3),inset_0_-2px_0_rgba(0,0,0,0.1)] border border-primary-500/50",
    secondary: "bg-white/10 dark:bg-white/5 hover:bg-white/15 text-slate-900 dark:text-white backdrop-blur-md border border-white/20 dark:border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1.5px_0_rgba(255,255,255,0.1)]",
    outline: "bg-transparent border border-primary-500/50 text-primary-600 dark:text-primary-400 hover:bg-primary-500/10 hover:border-primary-500 shadow-[inset_0_1px_1px_rgba(30,144,255,0.1)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={cn(
        "font-medium rounded-full transition-all duration-300 inline-flex items-center justify-center text-center gap-2",
        variants[variant],
        sizes[size],
        className
      )}
      {...props as any}
    >
      {children}
    </motion.button>
  );
}
