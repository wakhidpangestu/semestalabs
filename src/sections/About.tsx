import { SectionWrapper } from '../components/layout/SectionWrapper';
import { motion } from 'framer-motion';
import { Code2, Target, ShieldCheck, Quote, Github, Linkedin } from 'lucide-react';
import { cn } from '../utils/cn';

const CORE_VALUES = [
  {
    icon: Code2,
    title: "Builder Mindset",
    desc: "Logical, scalable systems over just 'pretty' pixels.",
    color: "text-blue-500",
    glow: "group-hover:shadow-blue-500/20"
  },
  {
    icon: Target,
    title: "Practical Impact",
    desc: "Solving real business friction with precision.",
    color: "text-emerald-500",
    glow: "group-hover:shadow-emerald-500/20"
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    desc: "Auditable and secure by design, never as an afterthought.",
    color: "text-purple-500",
    glow: "group-hover:shadow-purple-500/20"
  }
];

interface AboutProps {
  showFounderCard?: boolean;
}

export function About({ showFounderCard = false }: AboutProps) {
  return (
    <SectionWrapper id="about" className="bg-base-light dark:bg-base-dark transition-colors duration-300 relative overflow-hidden py-24 md:py-32">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-primary-500/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-[20%] left-[-5%] w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={cn(
          "grid gap-16 items-center",
          showFounderCard ? "lg:grid-cols-12" : "lg:grid-cols-1"
        )}>
          
          {/* Left Column: Mission & Values */}
          <div className={cn(
            showFounderCard ? "lg:col-span-7" : "max-w-4xl mx-auto text-center"
          )}>
            <motion.div
              initial={{ opacity: 0, x: showFounderCard ? -30 : 0, y: showFounderCard ? 0 : 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className={cn(
                "text-primary-500 font-bold tracking-widest uppercase text-sm mb-6 block",
                !showFounderCard && "mx-auto"
              )}>
                The Mission
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8 leading-[1.1]">
                We build the systems that <span className="text-primary-500">define tomorrow.</span>
              </h2>
              <p className={cn(
                "text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed",
                showFounderCard ? "max-w-2xl" : "max-w-3xl mx-auto"
              )}>
                Semesta Labs is not just a digital agency—we are an engineering laboratory. We bridge the gap between traditional reliability and cutting-edge innovations in AI and Web3.
              </p>
            </motion.div>

            <div className={cn(
              "grid gap-6",
              showFounderCard ? "sm:grid-cols-3" : "grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto"
            )}>
              {CORE_VALUES.map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className={cn(
                    "group p-6 rounded-3xl bg-white/50 dark:bg-white/[0.03] border border-white/40 dark:border-white/10 transition-all duration-300 hover:-translate-y-2",
                    value.glow,
                    !showFounderCard && "text-left"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-white dark:bg-white/5 border border-white/40 dark:border-white/10 shadow-sm transition-transform duration-500 group-hover:scale-110",
                    value.color,
                    !showFounderCard && "mx-0"
                  )}>
                    <value.icon size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">{value.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-500 leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Founder Card (Only on AboutPage) */}
          {showFounderCard && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              {/* Founder Card Shell */}
              <div className="relative group w-full max-w-sm">
                {/* Outer Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/50 to-blue-500/50 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                
                {/* Main Card */}
                <div className="relative rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#1a1c20] border border-white/40 dark:border-white/10 shadow-2xl transition-all duration-500 transform group-hover:rotate-1 group-hover:scale-[1.02]">
                  {/* Photo Area */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img 
                      src="/founder_professional_portrait.png" 
                      alt="Founder of Semesta Labs" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c20] via-transparent to-transparent opacity-80" />
                    
                    {/* Floating Quote */}
                    <div className="absolute top-6 left-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
                      <Quote className="text-primary-500 mb-2" size={20} fill="currentColor" />
                      <p className="text-xs text-white/90 italic font-medium leading-relaxed">
                        "I founded Semesta Labs to transform 'what if' into 'it's live'. We build the engines that drive digital sovereignty."
                      </p>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-8 relative">
                    <div className="flex justify-between items-end mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Wakhid Pangestu</h3>
                        <p className="text-primary-500 font-bold text-sm tracking-widest uppercase">Founder & CTO</p>
                      </div>
                      <div className="flex gap-2">
                        <a href="https://github.com/wakhidp" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-500 hover:bg-primary-500 hover:text-white transition-all">
                          <Github size={18} />
                        </a>
                        <a href="https://linkedin.com/in/wakhidp" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-500 hover:bg-primary-500 hover:text-white transition-all">
                          <Linkedin size={18} />
                        </a>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-slate-200 dark:border-white/10">
                      <div className="flex items-center gap-4">
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1a1c20] bg-slate-200 dark:bg-white/10 flex items-center justify-center" />
                          ))}
                        </div>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                          Leading <span className="text-slate-900 dark:text-white font-bold">15+ Skilled Engineers</span> worldwide.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Secondary Element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl bg-primary-500/10 border border-primary-500/20 backdrop-blur-xl -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700" />
              </div>
            </motion.div>
          )}
          
        </div>
      </div>
    </SectionWrapper>
  );
}
