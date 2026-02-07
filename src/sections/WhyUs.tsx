import { SectionWrapper } from '../components/layout/SectionWrapper';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Layers, BarChart3, Star, ArrowRight } from 'lucide-react';
import { cn } from '../utils/cn';

const REASONS = [
  {
    icon: Zap,
    title: "No Hype, Just Results",
    desc: "We focus on technology that solves real business friction, not chasing short-lived trends. Pragmatism is our core.",
    color: "from-blue-500/20 to-blue-600/5",
    iconColor: "text-blue-500",
    border: "border-blue-500/20"
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    desc: "Systems built with the future in mind. From startup MVPs to enterprise-grade infrastructure, we architect for growth.",
    color: "from-emerald-500/20 to-emerald-600/5",
    iconColor: "text-emerald-500",
    border: "border-emerald-500/20"
  },
  {
    icon: ShieldCheck,
    title: "Security Conscious",
    desc: "Security isn't a feature; it's a foundation. We integrate auditable security practices into every line of code.",
    color: "from-purple-500/20 to-purple-600/5",
    iconColor: "text-purple-500",
    border: "border-purple-500/20"
  },
  {
    icon: BarChart3,
    title: "End-to-End Thinking",
    desc: "We don't just ship code; we consider the entire lifecycle—from deployment strategy to long-term maintenance.",
    color: "from-amber-500/20 to-amber-600/5",
    iconColor: "text-amber-500",
    border: "border-amber-500/20"
  }
];

export function WhyUs() {
  return (
    <SectionWrapper id="why-us" className="bg-base-light dark:bg-base-dark transition-colors duration-300 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Star size={14} className="fill-current" />
              The Semesta Edge
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 leading-tight tracking-tight">
              Why visionaries <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-blue-600">choose Semesta Labs.</span>
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-xl">
              In a crowded digital landscape, we provide the engineering clarity needed to build software that lasts. We don't just build apps; we architect competitive advantages.
            </p>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-sm relative group overflow-hidden">
                 <div className="absolute inset-y-0 left-0 w-1 bg-primary-500" />
                 <h4 className="font-bold text-slate-900 dark:text-white mb-2">Technical Excellence</h4>
                 <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Our team consists of engineers who have built systems for millions of users worldwide.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-sm relative group overflow-hidden">
                 <div className="absolute inset-y-0 left-0 w-1 bg-accent-purple" />
                 <h4 className="font-bold text-slate-900 dark:text-white mb-2">Strategic Partnership</h4>
                 <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">We think like stakeholders. Your ROI and business stability are our primary metrics.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {REASONS.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className={cn(
                  "group p-8 rounded-[2rem] bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 relative transition-all duration-500",
                  "hover:shadow-2xl hover:shadow-primary-500/5 hover:-translate-y-2 overflow-hidden"
                )}
              >
                {/* Accent Background */}
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500", reason.color)} />
                
                <div className="relative z-10">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-white dark:bg-white/5 border shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6",
                    reason.iconColor, reason.border
                  )}>
                    <reason.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-primary-500 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
                
                {/* Subtle Indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                   <ArrowRight size={18} className={reason.iconColor} />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
