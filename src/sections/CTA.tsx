
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { Button } from '../components/ui/Button';

export function CTA() {
  return (
    <SectionWrapper id="contact" className="bg-base-light dark:bg-base-dark py-32 transition-colors duration-300">
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
            <Button size="lg" variant="primary">
              Contact Semesta Labs
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
