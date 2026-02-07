import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { cn } from '../../utils/cn';

interface ThemeToggleProps {
  className?: string;
  size?: number;
}

export function ThemeToggle({ className, size = 18 }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "rounded-full bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 border border-black/5 dark:border-white/10 backdrop-blur-md transition-all duration-300 text-slate-700 dark:text-slate-200 hover:scale-105 active:scale-95",
        size < 18 ? "p-1.5" : "p-2.5",
        className
      )}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon size={size} className="fill-slate-700 text-slate-700" />
      ) : (
        <Sun size={size} className="fill-yellow-400 text-yellow-400" />
      )}
    </button>
  );
}
