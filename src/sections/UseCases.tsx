import { useState } from 'react';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { GlassCard } from '../components/ui/GlassCard';
import { Building2, Store, Rocket, Landmark } from 'lucide-react';
import { cn } from '../utils/cn';

const categories = [
  { id: 'umkm', label: 'UMKM', icon: Store },
  { id: 'startup', label: 'Startups', icon: Rocket },
  { id: 'enterprise', label: 'Enterprises', icon: Building2 },
  { id: 'institution', label: 'Institutions', icon: Landmark },
];

const content = {
  umkm: {
    title: "Digitalizing Local Business",
    pain: "Struggling with manual inventory and inconsistent sales tracking.",
    solution: "Simple, mobile-friendly POS and inventory systems that run on low-end devices."
  },
  startup: {
    title: "MVP to Scale",
    pain: "Need to launch fast but ensure architecture can handle growth.",
    solution: "Rapid development of scalable MVPs using modern tech stacks (React/Node) with cloud-native infrastructure."
  },
  enterprise: {
    title: "System Integration",
    pain: "Disconnected legacy systems slowing down operations.",
    solution: "Secure API layers and microservices to unify data flow across departments."
  },
  institution: {
    title: "Secure & Compliant Systems",
    pain: "High data sensitivity and complex regulatory requirements.",
    solution: "Auditable, secure platforms with role-based access control and on-premise options."
  }
};

export function UseCases() {
  const [activeTab, setActiveTab] = useState<'umkm' | 'startup' | 'enterprise' | 'institution'>('umkm');

  return (
    <SectionWrapper id="use-cases" className="bg-base-light dark:bg-base-dark transition-colors duration-300">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Impact Across Sectors</h2>
        <p className="text-slate-600 dark:text-slate-400">Tailored solutions for every stage of business growth.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id as any)}
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300",
              activeTab === cat.id 
                ? "bg-primary-500 border-primary-500 text-white shadow-lg shadow-primary-500/25" 
                : "bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:bg-black/10 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white"
            )}
          >
            <cat.icon size={18} />
            <span className="font-medium">{cat.label}</span>
          </button>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <GlassCard className="p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 transition-all duration-300">
            {content[activeTab].title}
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mt-8 text-left">
            <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/10">
              <span className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2 block">
                The Challenge
              </span>
              <p className="text-slate-700 dark:text-slate-300">{content[activeTab].pain}</p>
            </div>
            <div className="p-6 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
              <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-2 block">
                Our Solution
              </span>
              <p className="text-slate-700 dark:text-slate-300">{content[activeTab].solution}</p>
            </div>
          </div>
        </GlassCard>
      </div>
    </SectionWrapper>
  );
}
