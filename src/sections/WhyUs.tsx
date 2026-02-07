
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  "No Hype, Just Results: We focus on technology that solves problems, not trends.",
  "Scalable Architecture: Systems built to grow from UMKM to Enterprise scale.",
  "Security Conscious: Security is integrated into the development process, not an afterthought.",
  "End-to-End Thinking: We consider the entire lifecycle of your product."
];

export function WhyUs() {
  return (
    <SectionWrapper id="why-us" className="bg-gradient-to-b from-base-light to-white dark:from-base-dark dark:to-[#0f1423] transition-colors duration-300">
      <div className="rounded-3xl bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/5 p-8 md:p-12 backdrop-blur-sm">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Why Choose Semesta Labs?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8">
              In a world full of digital noise, we provide clarity. Our mission is to build robust systems that stand the test of time and market shifts.
            </p>
            <div className="grid gap-4">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">{reason}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-900/20 to-accent-purple/20 border border-white/10 flex items-center justify-center">
            {/* Abstract visual/diagram representation */}
            <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,transparent,black)]" />
            <div className="relative z-10 text-center p-6">
              <span className="text-5xl font-bold text-white/10 block">100%</span>
              <span className="text-xl font-medium text-white/40">Commitment to Quality</span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
