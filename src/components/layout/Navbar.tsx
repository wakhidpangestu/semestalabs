import { useState, useEffect } from 'react';
import { Home, Layers, Sparkles, Briefcase, Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { cn } from '../../utils/cn';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated with modern icons mapping
  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Layers },
    { name: 'Services', href: '/services', icon: Sparkles },
    { name: 'Projects', href: '/projects', icon: Briefcase },
    { name: 'Contact', href: '/contact', icon: Send },
  ];

  // Logic to hide top navbar in hero section
  const showTopNavbar = isScrolled || location.pathname !== '/';

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={cn(
          "fixed top-0 md:top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 ease-in-out",
          showTopNavbar 
            ? "translate-y-0 opacity-100" 
            : "-translate-y-full md:-translate-y-10 opacity-0 pointer-events-none",
          isScrolled ? "pt-2 md:mt-2" : "pt-4"
        )}
      >
        <div 
          className={cn(
            "w-full max-w-2xl rounded-full px-4 py-1 transition-all duration-300 flex items-center justify-between",
            isScrolled || location.pathname !== '/'
              ? "bg-white/10 dark:bg-base-dark/40 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg"
              : "bg-white/5 dark:bg-base-dark/20 backdrop-blur-md border border-white/10"
          )}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Semesta Labs Logo" className="w-5 h-5" />
            <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white">Semesta Labs</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-[10px] uppercase tracking-wider font-semibold transition-colors",
                  location.pathname === link.href 
                    ? "text-primary-500"
                    : "text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <ThemeToggle size={14} />
            <Link to="/contact">
               <Button size="sm" className="px-3.5 py-1.5 text-xs" variant="primary">Work With Us</Button>
            </Link>
          </div>

          {/* Mobile Actions (Top) - Theme Only */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation (Floating, Glass, Rounded) */}
      {/* Mobile Bottom Navigation (Floating, Glass, Fully Rounded) */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <div className="bg-white/10 dark:bg-base-dark/60 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full shadow-2xl p-2 flex justify-around items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            const Icon = link.icon;
            
            return (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-300 relative",
                  isActive 
                    ? "text-primary-500 bg-primary-500/10 shadow-[0_0_15px_rgba(30,144,255,0.15)]"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                )}
              >
                <Icon 
                  size={20} 
                  strokeWidth={isActive ? 2.5 : 2}
                  fill="none"
                  className={cn("transition-transform duration-300", isActive ? "scale-110" : "")}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
