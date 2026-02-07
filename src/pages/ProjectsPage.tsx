import { useState, useEffect } from 'react';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { Button } from '../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Github, Star, GitFork, Loader2, ExternalLink, RefreshCw, X } from 'lucide-react';
import { cn } from '../utils/cn';

// GitHub Organization
const GITHUB_ORG = 'semestalabs';

// Language to color mapping (GitHub style)
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

// Gradient for thumbnail based on category
function getThumbnailGradient(category: string): string {
  switch (category) {
    case 'AI Systems': return 'bg-gradient-to-br from-blue-600 to-indigo-900';
    case 'Web3': return 'bg-gradient-to-br from-purple-600 to-fuchsia-900';
    default: return 'bg-gradient-to-br from-emerald-500 to-teal-800';
  }
}

// Format date to relative time
function formatUpdatedAt(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'Updated today';
  if (diffDays === 1) return 'Updated yesterday';
  if (diffDays < 7) return `Updated ${diffDays} days ago`;
  if (diffDays < 30) return `Updated ${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? 's' : ''} ago`;
  if (diffDays < 365) return `Updated ${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) > 1 ? 's' : ''} ago`;
  return `Updated ${Math.floor(diffDays / 365)} year${Math.floor(diffDays / 365) > 1 ? 's' : ''} ago`;
}

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  private: boolean;
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
  updated: string;
  thumbnail: string;
  private: boolean;
}

export function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Cache key
  const CACHE_KEY = 'semestalabs_github_repos';

  // Force refresh function (clears cache)
  const forceRefresh = () => {
    localStorage.removeItem(CACHE_KEY);
    fetchRepos(true);
  };

  // Fetch GitHub Repositories
  const fetchRepos = async (showLoading = false) => {
    if (showLoading) {
      setIsLoading(true);
    }
    setError(null);
    
    try {
      // Build headers - include token if available for higher rate limits
      const headers: HeadersInit = {
        'Accept': 'application/vnd.github.v3+json',
      };
      
      // Add GitHub token if set in environment (VITE_GITHUB_TOKEN)
      const token = import.meta.env.VITE_GITHUB_TOKEN;
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(
        `https://api.github.com/orgs/${GITHUB_ORG}/repos?sort=updated&per_page=30`,
        { headers }
      );
      
      if (!response.ok) {
        // If rate limited, keep current data
        if (response.status === 403) {
          if (projects.length === 0) {
            // Only show error if we have no data
            const staleCache = localStorage.getItem(CACHE_KEY);
            if (staleCache) {
              const { data } = JSON.parse(staleCache);
              if (data.length > 0) {
                setProjects(data);
                setError("Using cached data (GitHub rate limit reached)");
              }
            }
          }
          return;
        }
        throw new Error(`GitHub API Error: ${response.status}`);
      }
      
      const repos: GitHubRepo[] = await response.json();
      
      // Transform GitHub repos to our Project format
      const transformedProjects: Project[] = repos.map((repo) => {
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
          updated: formatUpdatedAt(repo.updated_at),
          thumbnail: getThumbnailGradient(category),
          private: repo.private,
        };
      });
      
      // Cache the result
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        data: transformedProjects,
        timestamp: Date.now(),
      }));
      
      setProjects(transformedProjects);
      setError(null);
    } catch (err) {
      console.error('Failed to fetch GitHub repos:', err);
      
      // Only show error if we have no data
      if (projects.length === 0) {
        const staleCache = localStorage.getItem(CACHE_KEY);
        if (staleCache) {
          try {
            const { data } = JSON.parse(staleCache);
            if (data.length > 0) {
              setProjects(data);
              setError("Using cached data (API unavailable)");
            }
          } catch {
            // Invalid cache
          }
        } else {
          setError("GitHub API temporarily unavailable. Please try again later.");
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Initial fetch and auto-refresh every 30 seconds
  useEffect(() => {
    // Initial load with spinner
    fetchRepos(true);
    
    // Auto-refresh every 30 seconds (silent, no loading spinner)
    const intervalId = setInterval(() => {
      fetchRepos(false);
    }, 30 * 1000); // 30 seconds
    
    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, []);

  // Filter projects
  const filteredProjects = projects.filter(p => {
    const matchesCategory = filter === "All" || p.category === filter;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get unique categories from projects
  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

  return (
    <div className="pt-24 min-h-screen bg-base-light dark:bg-base-dark transition-colors duration-300">
      <SectionWrapper>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-slate-200 dark:border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
               <img src="/logo.png" alt="Semesta Labs" className="w-8 h-8 rounded-full border border-slate-200 dark:border-white/10" />
               <span className="text-slate-500 dark:text-slate-400 font-medium">{GITHUB_ORG}</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Projects</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Live from GitHub — our open source work, experiments, and contributions.
            </p>
          </div>
          <div className="flex gap-2">
             <Button size="sm" variant="secondary" className="gap-2" onClick={forceRefresh} disabled={isLoading}>
                <RefreshCw size={16} className={isLoading ? 'animate-spin' : ''} /> Refresh
             </Button>
             <a href={`https://github.com/orgs/${GITHUB_ORG}/repositories`} target="_blank" rel="noopener noreferrer">
               <Button size="sm" variant="primary" className="gap-2">
                  <Github size={16} /> View on GitHub
               </Button>
             </a>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center min-h-[48px]">
          <motion.div 
            initial={{ opacity: 0, width: '280px' }}
            animate={{ 
              opacity: 1, 
              width: isSearchFocused ? '100%' : '280px',
              maxWidth: isSearchFocused ? '600px' : '280px'
            }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="relative group h-12 flex-shrink-0 md:flex-shrink"
          >
            <input 
              type="text" 
              placeholder="Search through projects..." 
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
              <Search size={20} strokeWidth={2.5} />
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
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-wrap gap-3 justify-center md:justify-start"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border whitespace-nowrap",
                  filter === cat
                    ? "bg-primary-500 text-white border-primary-500 shadow-[0_8px_16px_rgba(30,144,255,0.25),inset_0_2px_0_rgba(255,255,255,0.2),inset_0_-2px_0_rgba(0,0,0,0.15)]"
                    : "bg-white/50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.03),inset_0_1.5px_0_rgba(255,255,255,0.1)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)]"
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-20 text-slate-500 dark:text-slate-400">
            <Loader2 className="w-10 h-10 animate-spin text-primary-500 mb-4" />
            <p>Fetching repositories from GitHub...</p>
          </div>
        )}

        {/* Notice Banner (for cache/fallback status) */}
        {error && !isLoading && (
          <div className="mb-6 px-4 py-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
            {error}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-slate-500 dark:text-slate-400">
            <p className="text-lg">No projects found matching your criteria.</p>
          </div>
        )}

        {/* Grid - GitHub Style Cards */}
        {!isLoading && filteredProjects.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
              <motion.a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                <div className="h-full flex flex-col bg-white dark:bg-[#0d1117] border border-slate-300 dark:border-[#30363d] rounded-xl overflow-hidden hover:border-primary-500 dark:hover:border-primary-500 transition-colors group">
                  
                  {/* Thumbnail Area */}
                  <div className={`h-32 w-full ${project.thumbnail} relative flex items-center justify-center overflow-hidden`}>
                     <div className="absolute inset-0 bg-black/10"></div>
                     <div className="font-bold text-white/90 text-xl tracking-widest uppercase opacity-30 group-hover:opacity-50 transition-opacity transform group-hover:scale-110 duration-500">
                        {project.category.split(' ')[0]}
                     </div>
                     <ExternalLink className="absolute top-3 right-3 text-white/50 group-hover:text-white/80 transition-colors" size={18} />
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2 flex-wrap">
                         <h3 className="font-bold text-primary-500 group-hover:underline text-lg capitalize">
                           {project.title}
                         </h3>
                         <span className="px-2 py-0.5 text-xs rounded-full border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 font-medium">
                           {project.private ? 'Private' : 'Public'}
                         </span>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mt-auto">
                      {project.language && (
                        <div className="flex items-center gap-1.5">
                          <span className={`w-3 h-3 rounded-full ${languageColors[project.language] || 'bg-slate-400'}`}></span>
                          <span>{project.language}</span>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-1">
                         <Star size={14} />
                         <span>{project.stars}</span>
                      </div>

                      <div className="flex items-center gap-1">
                         <GitFork size={14} />
                         <span>{project.forks}</span>
                      </div>

                      <div className="ml-auto text-slate-400 text-[10px]">
                        {project.updated}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
            </AnimatePresence>
          </div>
        )}
      </SectionWrapper>
    </div>
  );
}
