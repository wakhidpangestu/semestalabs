import { SectionWrapper } from '../components/layout/SectionWrapper';

export function TechStack() {
  return (
    <SectionWrapper className="bg-base-light dark:bg-base-dark border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="text-center mb-10">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Powered By Modern Technology</p>
      </div>
      
      {/* Logos represented by text nicely for now to keep it minimal and dependency-free for images */}
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {['React', 'Vite', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Solidity'].map((tech) => (
          <span key={tech} className="text-xl md:text-2xl font-bold text-slate-400 dark:text-slate-400 hover:text-primary-500 dark:hover:text-white cursor-default">
            {tech}
          </span>
        ))}
      </div>
    </SectionWrapper>
  );
}
