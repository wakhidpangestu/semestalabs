import { useState, useEffect } from 'react';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, GitFork, ExternalLink, Loader2, Code2, Sparkles, Box, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';

// GitHub Organization
const GITHUB_ORG = 'semestalabs';

// Category to Icon mapping
const categoryIcons: Record<string, typeof Code2> = {
  'AI Systems': Sparkles,
  'Web3': Box,
  'Web Platforms': Code2,
};

// Language colors
const languageColors: Record<string, string> = {
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-500",
  Python: "bg-blue-400",
  Solidity: "bg-slate-400",
  HTML: "bg-orange-500",
  CSS: "bg-purple-500",
  Vue: "bg-emerald-500",
  Go: "bg-cyan-500",
  Rust: "bg-orange-600",
  Java: "bg-red-500",
  "C++": "bg-pink-500",
  C: "bg-gray-500",
  Shell: "bg-green-500",
};

// Topic to Category mapping
function getCategory(topics: string[], language: string | null): string {
  if (topics.includes('ai') || topics.includes('machine-learning') || topics.includes('python') || language === 'Python') {
    return 'AI Systems';
  }
  if (topics.includes('web3') || topics.includes('blockchain') || topics.includes('solidity') || language === 'Solidity') {
    return 'Web3';
  }
  return 'Web Platforms';
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
  category: string;
  language: string | null;
  stars: number;
  forks: number;
  engagement: number;
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    async function fetchHighlightedProjects() {
      setIsLoading(true);
      try {
        const headers: HeadersInit = { 'Accept': 'application/vnd.github.v3+json' };
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        if (token) headers['Authorization'] = `Bearer ${token}`;

        const response = await fetch(`https://api.github.com/orgs/${GITHUB_ORG}/repos?sort=updated&per_page=30`, { headers });
        if (!response.ok) throw new Error(`GitHub API Error: ${response.status}`);
        
        const repos: GitHubRepo[] = await response.json();
        
        const transformedProjects: Project[] = repos
          .map((repo) => {
            const category = getCategory(repo.topics || [], repo.language);
            return {
              id: repo.id,
              title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
              description: repo.description || 'No description provided.',
              url: repo.html_url,
              category,
              language: repo.language,
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              engagement: repo.stargazers_count + repo.forks_count,
            };
          })
          .sort((a, b) => b.engagement - a.engagement)
          .slice(0, 3); // Max 3 highlight projects
        
        setProjects(transformedProjects);
      } catch (err) {
        console.error('Failed to fetch GitHub repos:', err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchHighlightedProjects();
  }, []);

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = projects.filter(p => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <SectionWrapper id="projects" className="bg-base-light dark:bg-base-dark transition-colors duration-300 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 blur-[120px] rounded-full -mr-48 -mt-48" />

      <div className="text-center mb-16 relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-primary-500 font-bold tracking-widest uppercase text-sm mb-4 block"
        >
          Selected Innovations
        </motion.span>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
          Highlighted Projects
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Designing the future of AI, Web3, and digital commerce.
        </p>
      </div>

      {!isLoading && projects.length > 0 && (
        <div className="flex flex-col items-center mb-16 relative z-10 gap-8">
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, width: '280px' }}
            whileInView={{ opacity: 1 }}
            animate={{ 
              width: isSearchFocused ? '100%' : '280px',
              maxWidth: isSearchFocused ? '600px' : '280px'
            }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="relative group h-12"
          >
            <input 
              type="text" 
              placeholder="Search highlights..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full h-full pl-12 pr-12 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500/50 outline-none transition-all placeholder:text-slate-400 font-medium shadow-[0_4px_12px_rgba(0,0,0,0.03),inset_0_2px_0_rgba(255,255,255,0.2)] focus:shadow-[0_12px_32px_rgba(30,144,255,0.15),inset_0_2px_0_rgba(255,255,255,0.2)]"
            />
            <div className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 pointer-events-none z-10",
              isSearchFocused ? "text-primary-500 scale-110" : "text-slate-500"
            )}>
              <div className="relative">
                <Search size={20} strokeWidth={2.5} />
                {isSearchFocused && <motion.div layoutId="search-glow" className="absolute inset-0 bg-primary-500/20 blur-md rounded-full -z-10" />}
              </div>
            </div>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary-500 transition-colors p-1"
              >
                <X size={18} strokeWidth={2.5} />
              </button>
            )}
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border relative overflow-hidden",
                  activeCategory === cat
                    ? "bg-primary-500 text-white border-primary-500 shadow-[0_8px_20px_rgba(30,144,255,0.3),inset_0_2px_0_rgba(255,255,255,0.2),inset_0_-2px_0_rgba(0,0,0,0.15)] scale-105"
                    : "bg-white/50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.03),inset_0_1.5px_0_rgba(255,255,255,0.1)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)]"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {isLoading && (
        <div className="flex flex-col items-center justify-center py-24 text-slate-500 dark:text-slate-400">
          <Loader2 className="w-12 h-12 animate-spin text-primary-500 mb-4" />
          <p className="font-medium">Curating projects...</p>
        </div>
      )}

      {!isLoading && (
        <div className="flex flex-wrap justify-center gap-8 mb-20 relative z-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const Icon = categoryIcons[project.category] || Code2;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full max-w-sm"
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group block h-full relative p-8 rounded-2xl bg-white/10 dark:bg-white/[0.03] backdrop-blur-2xl border border-slate-200/50 dark:border-white/10 transition-all duration-300",
                      project.category === 'AI Systems' ? 'hover:border-blue-500/50 hover:bg-blue-500/[0.05]' : 
                      project.category === 'Web3' ? 'hover:border-purple-500/50 hover:bg-purple-500/[0.05]' : 
                      'hover:border-emerald-500/50 hover:bg-emerald-500/[0.05]'
                    )}
                  >
                    {/* Card Content */}
                    <div className="relative z-10 flex justify-between items-start mb-8">
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 border shadow-sm",
                        project.category === 'AI Systems' ? 'bg-blue-500/10 border-blue-500/20 text-blue-500 group-hover:bg-blue-500 group-hover:text-white' : 
                        project.category === 'Web3' ? 'bg-purple-500/10 border-purple-500/20 text-purple-500 group-hover:bg-purple-500 group-hover:text-white' : 
                        'bg-emerald-500/10 border-emerald-500/20 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white'
                      )}>
                        <Icon size={24} />
                      </div>
                      <div className="flex gap-2">
                        <div className="flex items-center gap-1 px-2 py-0.5 bg-white/5 rounded-md text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-tighter border border-white/10">
                          <Star size={10} fill="currentColor" className="text-amber-500" />
                          <span>{project.stars}</span>
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 mb-8">
                       <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors leading-tight tracking-tight">
                        {project.title}
                       </h3>
                       <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed line-clamp-3 font-normal">
                        {project.description}
                       </p>
                    </div>

                    <div className="relative z-10 flex items-center justify-between mt-auto pt-6 border-t border-slate-100 dark:border-white/5">
                       <div className="flex items-center gap-4 text-[10px] font-bold text-slate-500 dark:text-slate-500 uppercase tracking-tight">
                          {project.language && (
                            <div className="flex items-center gap-1.5">
                               <span className={cn("w-2 h-2 rounded-full", languageColors[project.language] || 'bg-slate-400')} />
                               <span>{project.language}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                             <GitFork size={11} strokeWidth={2.5} />
                             <span>{project.forks}</span>
                          </div>
                       </div>
                       <div className={cn(
                         "w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 shadow-lg",
                         project.category === 'AI Systems' ? 'bg-blue-500 text-white' : 
                         project.category === 'Web3' ? 'bg-purple-500 text-white' : 'bg-emerald-500 text-white'
                       )}>
                          <ExternalLink size={14} strokeWidth={2.5} />
                       </div>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}

      <div className="text-center relative z-10">
         <Link to="/projects">
            <button className="relative py-3 px-8 rounded-full font-bold text-sm transition-all duration-300
              bg-primary-500 text-white
              shadow-[0_8px_16px_rgba(30,144,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.3)]
              hover:shadow-[0_12px_24px_rgba(30,144,255,0.3),inset_0_-1px_2px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.3)]
              active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.3)]
              active:translate-y-0.5
              flex items-center justify-center gap-2 mx-auto group"
            >
              Explore Portfolio
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
         </Link>
      </div>
    </SectionWrapper>
  );
}
