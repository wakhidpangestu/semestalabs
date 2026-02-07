import { SectionWrapper } from '../components/layout/SectionWrapper';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Target, ShieldCheck, Github, Linkedin, Cpu, Zap, Globe2, Instagram, Globe } from 'lucide-react';
import { cn } from '../utils/cn';

const CORE_VALUES = [
  {
    icon: Code2,
    title: "Builder Mindset",
    desc: "We prioritize logical, scalable, and maintainable engineering over just aesthetic pixels.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    icon: Cpu,
    title: "AI Integration",
    desc: "Deep integration of Large Language Models and custom AI agents into existing business workflows.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20"
  },
  {
    icon: ShieldCheck,
    title: "Web3 Sovereignty",
    desc: "Building decentralized systems that empower users with data ownership and security.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20"
  }
];

const STATS = [
  { label: "Engineering Talent", value: "15+", icon: Zap },
  { label: "Systems Deployed", value: "40+", icon: Target },
  { label: "Global Partners", value: "10+", icon: Globe2 },
];

interface AboutProps {
  showFounderCard?: boolean;
}

export function About({ showFounderCard = false }: AboutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <SectionWrapper id="about" className="relative overflow-visible pt-0">
      <div ref={containerRef} className="absolute inset-0 mx-4 md:mx-6 bg-slate-50/50 dark:bg-white/[0.02] rounded-2xl overflow-hidden pointer-events-none">
        {/* Dot Grid */}
        <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.1]" 
          style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-primary-500 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-accent-purple rounded-full blur-[100px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-10 md:px-20 relative z-10 pt-8 pb-20 md:pt-12 md:pb-32">
        <div className={cn(
          "grid gap-16 lg:gap-24 items-start",
          showFounderCard ? "lg:grid-cols-12" : "lg:grid-cols-1"
        )}>
          
          {/* Left Column: Mission & Content */}
          <div className={cn(
            showFounderCard ? "lg:col-span-7" : "max-w-4xl mx-auto text-center"
          )}>
            <motion.div
            style={{ y: yParallax }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
              <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-widest mb-6", !showFounderCard && "mx-auto")}>
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                The Engineering Laboratory
              </div>
              
              <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 leading-[1.05] tracking-tight">
                Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-purple">Resilient Digital</span> Ecosystems.
              </h2>
              
              <p className={cn(
                "text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-light",
                showFounderCard ? "max-w-2xl" : "max-w-3xl mx-auto"
              )}>
                Semesta Labs isn’t just an agency; we are a dedicated collective of engineers and strategists. 
                We specialize in bridging the gap between legacy reliability and the frontier of <span className="text-slate-900 dark:text-white font-medium">Artificial Intelligence</span> and <span className="text-slate-900 dark:text-white font-medium">Decentralized Systems</span>.
              </p>

              {/* Stats Bar */}
              <div className={cn("grid grid-cols-3 gap-4 py-8 border-y border-slate-200 dark:border-white/5", !showFounderCard && "max-w-3xl mx-auto")}>
                 {STATS.map((stat, i) => (
                   <div key={i} className="text-center md:text-left">
                      <div className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-1 flex items-center justify-center md:justify-start gap-2">
                        <stat.icon className="text-primary-500 w-4 h-4 md:w-5 md:h-5" />
                        {stat.value}
                      </div>
                      <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                   </div>
                 ))}
              </div>
            </motion.div>

            {/* Core Values Grid */}
            <div className={cn(
              "grid gap-6",
              showFounderCard ? "sm:grid-cols-1" : "md:grid-cols-3 max-w-5xl mx-auto"
            )}>
              {CORE_VALUES.map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className={cn(
                    "group relative p-8 rounded-3xl overflow-hidden transition-all duration-500",
                    "bg-white/40 dark:bg-white/[0.02] border border-white/60 dark:border-white/10 backdrop-blur-md",
                    "hover:bg-white/60 dark:hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-1"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-lg",
                    value.bg, value.color, "border", value.border
                  )}>
                    <value.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">{value.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">{value.desc}</p>
                  
                  {/* Decorative Corner */}
                  <div className={cn("absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 bg-gradient-to-br opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity", 
                    idx === 0 ? "from-blue-500" : idx === 1 ? "from-emerald-500" : "from-purple-500"
                  )} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Founder Card */}
          {showFounderCard && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-12 xl:col-span-5 flex justify-center lg:justify-end sticky top-32"
            >
              <div className="relative group w-full max-w-[300px]">
                {/* Main Card */}
                <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-[#0d1117] border border-slate-200 dark:border-white/10 shadow-xl transition-all duration-500 hover:shadow-2xl">
                  {/* Photo Section */}
                  <div className="relative aspect-[3.5/5] overflow-hidden group">
                    <img 
                      src="/avatar.png" 
                      alt="Wakhid Pangestu" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/60 via-transparent to-transparent" />
                  </div>

                  {/* Info Section */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Wakhid Pangestu</h3>
                      <p className="text-primary-500 font-bold text-[10px] tracking-widest uppercase">Founder & CTO</p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5">
                      <div className="flex gap-3">
                        <a href="https://github.com/wakhidpangestu" target="_blank" className="text-slate-400 hover:text-primary-500 transition-colors">
                          <Github size={18} />
                        </a>
                        <a href="https://linkedin.com/in/wakhidpangestu" target="_blank" className="text-slate-400 hover:text-primary-500 transition-colors">
                          <Linkedin size={18} />
                        </a>
                        <a href="https://instagram.com/wakhidpangestu" target="_blank" className="text-slate-400 hover:text-primary-500 transition-colors">
                          <Instagram size={18} />
                        </a>
                        <a href="https://www.wakhidpangestu.my.id" target="_blank" className="text-slate-400 hover:text-primary-500 transition-colors">
                          <Globe size={18} />
                        </a>
                      </div>
                      <span className="text-[10px] font-medium text-slate-400 uppercase tracking-tighter italic">top-tier engineering</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
        </div>
      </div>
    </SectionWrapper>
  );
}
