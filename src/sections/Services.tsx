import { SectionWrapper } from '../components/layout/SectionWrapper';
import { GlassCard } from '../components/ui/GlassCard';
import { motion } from 'framer-motion';
import { Bot, Globe, Cpu, BarChart3, Sparkles, Zap } from 'lucide-react';
import { cn } from '../utils/cn';

const services = [
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Architecting custom LLM agents and automation workflows to eliminate your operational bottleneck.",
    benefit: "40% Output Efficiency",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: Globe,
    title: "Web Platforms",
    description: "Enterprise-grade digital interfaces designed for high-concurrency and sub-second performance.",
    benefit: "100% Core Web Vitals",
    color: "from-emerald-500 to-teal-400"
  },
  {
    icon: Cpu,
    title: "Web3 Ecosystems",
    description: "Secure smart contracts and decentralized solutions focused on digital sovereignty and trust.",
    benefit: "Zero-Knowledge Ready",
    color: "from-purple-600 to-indigo-400"
  },
  {
    icon: BarChart3,
    title: "Data Intelligence",
    description: "Turning raw noise into actionable strategic signals through custom analytics pipelines.",
    benefit: "Real-time Decisions",
    color: "from-amber-500 to-orange-400"
  }
];

export function Services() {
  return (
    <SectionWrapper id="services" className="bg-base-light dark:bg-base-dark transition-colors duration-300 relative overflow-hidden py-24">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-purple/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles size={14} />
            Our Expertise
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Vertical Solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-blue-600">Complex Landscapes.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            We don't just build software; we engineer competitive advantages through mission-critical technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard hoverEffect className="flex flex-col h-full p-8 border-slate-200/50 dark:border-white/5 bg-white/40 dark:bg-base-dark/40">
                {/* Visual Impact */}
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-8 shadow-sm border border-white/20 text-white bg-gradient-to-br",
                  service.color
                )}>
                  <service.icon size={24} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-10 leading-relaxed font-normal flex-grow">
                  {service.description}
                </p>

                {/* Impact Stat */}
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                   <div className="flex items-center gap-2 mb-1">
                      <Zap size={14} className="text-primary-500 fill-current" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Primary Impact</span>
                   </div>
                   <p className="text-sm font-bold text-slate-900 dark:text-white">{service.benefit}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
