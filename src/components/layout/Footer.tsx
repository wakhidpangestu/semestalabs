import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-base-light dark:bg-base-dark border-t border-black/5 dark:border-white/5 pt-12 pb-28 md:pb-12 px-4 md:px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Semesta Labs Logo" className="w-6 h-6" />
            <span className="text-lg font-bold text-slate-900 dark:text-white">Semesta Labs</span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">Building Practical Digital Futures.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600 dark:text-slate-400">
          <Link to="/about" className="hover:text-primary-500 dark:hover:text-white transition-colors">About</Link>
          <Link to="/services" className="hover:text-primary-500 dark:hover:text-white transition-colors">Services</Link>
          <Link to="/contact" className="hover:text-primary-500 dark:hover:text-white transition-colors">Contact</Link>
          <a href="#" className="hover:text-primary-500 dark:hover:text-white transition-colors">Privacy Policy</a>
        </div>

        <div className="text-xs text-slate-500">
          © {new Date().getFullYear()} Semesta Labs Indonesia.
        </div>
      </div>
    </footer>
  );
}
