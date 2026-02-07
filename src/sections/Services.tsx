
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { GlassCard } from '../components/ui/GlassCard';
import { Bot, Globe, Cpu, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: <Bot className="w-8 h-8 text-accent-cyan" />,
    title: "AI Systems & Automation",
    description: "Implement machine learning models to automate repetitive workflows and gain predictive insights.",
    benefit: "Reduce operational costs and speed up decision-making."
  },
  {
    icon: <Globe className="w-8 h-8 text-primary-500" />,
    title: "Web & Digital Platforms",
    description: "High-performance web applications built for scale, speed, and cross-device compatibility.",
    benefit: "Engage users with a seamless, fast digital experience."
  },
  {
    icon: <Cpu className="w-8 h-8 text-accent-purple" />,
    title: "Web3 & Decentralized Solutions",
    description: "Smart contract development, blockchain integration, and secure dApp architecture.",
    benefit: "Leverage transparency and security for next-gen assets."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-emerald-400" />,
    title: "Data-Driven Decision Support",
    description: "Custom dashboards and analytics pipelines to visualize your business data.",
    benefit: "Turn raw data into actionable business strategies."
  }
];

export function Services() {
  return (
    <SectionWrapper id="services" className="bg-base-light dark:bg-base-dark transition-colors duration-300">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Core Capabilities</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          We deliver end-to-end technology solutions designed to grow with your business.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <GlassCard key={index} hoverEffect className="flex flex-col h-full">
            <div className="mb-6 p-4 rounded-full bg-white/5 w-fit border border-white/5">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">
              {service.description}
            </p>
            <div className="pt-4 border-t border-white/10 mt-auto">
              <p className="text-xs font-medium text-primary-400 uppercase tracking-wide">
                Benefit
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                {service.benefit}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
