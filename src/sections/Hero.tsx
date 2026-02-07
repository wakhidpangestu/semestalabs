import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Glowing Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-500/20 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent-purple/15 blur-[130px] rounded-full" 
        />
        
        {/* Subtle radial gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base-light/10 dark:to-base-dark/20" />
      </div>

      {/* Subtle overlay to ensure text contrast */}
      <div className="absolute inset-0 z-[1] bg-base-light/5 dark:bg-base-dark/10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative px-6 py-12 rounded-3xl"
        >
          {/* Content */}
          <div className="inline-block relative">
             <div className="absolute inset-0 bg-primary-500/10 blur-3xl -z-10 rounded-full" />
             
             <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-500/20 bg-primary-500/5 backdrop-blur-md text-primary-600 dark:text-primary-400 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                Practical Solutions, Real Impact
             </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight max-w-5xl mx-auto drop-shadow-sm">
            Building Practical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-purple">AI & Web3 Systems</span> for Real Businesses
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow-sm">
            We help businesses design and build scalable digital systems that actually work, 
            from UMKM to enterprise. Avoid the hype, focus on results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact">
              <Button size="md" variant="primary">Work With Us</Button>
            </a>
            <a href="/about">
              <Button size="md" variant="secondary">View Our Approach</Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
