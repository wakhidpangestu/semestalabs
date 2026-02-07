import { SectionWrapper } from '../components/layout/SectionWrapper';

const techItems = [
  // AI & Automation
  { name: 'Python', logo: 'https://cdn.simpleicons.org/python/FFD21E' },
  { name: 'PyTorch', logo: 'https://cdn.simpleicons.org/pytorch/EE4C2C' },
  // { name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/250px-ChatGPT-Logo.svg.png' },
  { name: 'LangChain', logo: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
  { name: 'Hugging Face', logo: 'https://cdn.simpleicons.org/huggingface/FFD21E' },
  
  // Web3 & Blockchain
  { name: 'Solidity', logo: 'https://cdn.simpleicons.org/solidity/363636' },
  { name: 'Ethereum', logo: 'https://cdn.simpleicons.org/ethereum/474B8A' },
  { name: 'MetaMask', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/3840px-MetaMask_Fox.svg.png' },
  { name: 'Polygon', logo: 'https://cdn.simpleicons.org/polygon/8247E5' },
  { name: 'Web3.js', logo: 'https://cdn.simpleicons.org/web3dotjs/F16822' },

  // Core & Platforms
  { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'Google Cloud', logo: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
  
  // Custom/Agentic
  { name: 'Antigravity', logo: 'https://antigravity.google/assets/image/antigravity-logo.png' },
];

export function TechStack() {
  // Doubling items for seamless scroll
  const scrollItems = [...techItems, ...techItems];

  return (
    <SectionWrapper className="bg-base-light dark:bg-base-dark border-t border-black/5 dark:border-white/5 transition-colors duration-300 py-12 overflow-hidden">
      <div className="text-center mb-12">
        <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-2">Architectural Foundation</p>
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Built with the world's most <span className="text-primary-500">advanced ecosystems</span></h3>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        {/* Infinite Scrolling Track */}
        <div className="flex animate-scroll whitespace-nowrap gap-12 items-center py-4">
          {scrollItems.map((tech, index) => (
            <div 
              key={`${tech.name}-${index}`} 
              className="group flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/40 dark:bg-white/[0.02] border border-slate-200/50 dark:border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-primary-500/30 hover:bg-white dark:hover:bg-white/5 shadow-sm min-w-fit"
            >
              <img 
                src={tech.logo} 
                alt={tech.name} 
                className="w-7 h-7 object-contain opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
              <span className="text-sm font-bold tracking-tight text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-base-light dark:from-base-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-base-light dark:from-base-dark to-transparent z-10 pointer-events-none" />
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </SectionWrapper>
  );
}
