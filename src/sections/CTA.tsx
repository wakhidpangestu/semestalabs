
import { SectionWrapper } from '../components/layout/SectionWrapper';

export function CTA() {
  return (
    <SectionWrapper id="contact" className="bg-base-light dark:bg-base-dark transition-colors duration-300">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary-500/10 to-transparent dark:from-primary-900/40 dark:to-base-dark border border-black/5 dark:border-white/10 p-12 md:p-20 text-center">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Let's Build Systems That Actually Work
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10">
            Ready to transform your business with practical, scalable technology? 
            Let's discuss your project.
          </p>
          <div className="flex justify-center">
            <button className="relative py-3.5 px-10 rounded-full font-bold text-base transition-all duration-300 active:scale-95
              bg-primary-500 text-white
              shadow-[0_8px_16px_rgba(30,144,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.3)]
              hover:shadow-[0_12px_24px_rgba(30,144,255,0.3),inset_0_-1px_2px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.3)]
              active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.3)]"
            >
              Contact Semesta Labs
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
