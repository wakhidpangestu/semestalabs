import { useState } from 'react';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { Button } from '../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Github, 
  Instagram, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Globe,
  ArrowUpRight,
  User,
  ChevronDown,
  FileText
} from 'lucide-react';
import { cn } from '../utils/cn';

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email Us",
    value: "semestalabs@gmail.com",
    sub: "Our team typically responds within 24 hours.",
    href: "mailto:semestalabs@gmail.com",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    icon: MapPin,
    label: "Our Hub",
    value: "Jakarta, Indonesia",
    sub: "Active mostly in digital space, globally available.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    icon: Clock,
    label: "Collaborative Hours",
    value: "Mon - Fri, 9 AM - 6 PM",
    sub: "Available for priority support on weekends.",
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  }
];

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/orgs/semestalabs", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com/semestalabs.id", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/in/semestalabs", label: "LinkedIn" },
];

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const [selectedType, setSelectedType] = useState("Development (AI, Web3, Platform)");
  const [isTypeOpen, setIsTypeOpen] = useState(false);

  const INQUIRY_TYPES = [
    "Development (AI, Web3, Platform)",
    "Strategic Technology Consultation",
    "Open Source Contribution",
    "Other / General Inquiry"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <div className="pt-24 min-h-screen bg-base-light dark:bg-base-dark transition-colors duration-300 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary-500/5 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <SectionWrapper className="relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-sm font-bold tracking-wide uppercase mb-6">
              <MessageSquare size={16} /> Get In Touch
            </span>
            <h1 className="text-4xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
              Let's craft the <span className="text-primary-500">future</span> together.
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Have a visionary project in mind? Or simply want to discuss the legal and technical boundaries of your next big thing? We're ready when you are.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto pb-24">
          {/* Left Column: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-10"
          >
            <div className="space-y-8">
              {CONTACT_INFO.map((item, idx) => (
                <div key={idx} className="group flex gap-5 p-2 rounded-2xl transition-all duration-300 hover:bg-white/50 dark:hover:bg-white/5">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg border border-white/40 dark:border-white/10 transition-transform duration-500 group-hover:scale-110", item.bg)}>
                    <item.icon className={item.color} size={26} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5">{item.label}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-xl font-bold text-slate-900 dark:text-white hover:text-primary-500 transition-colors flex items-center gap-2 group/link">
                        {item.value}
                        <ArrowUpRight size={18} className="opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all" />
                      </a>
                    ) : (
                      <p className="text-xl font-bold text-slate-900 dark:text-white">{item.value}</p>
                    )}
                    <p className="text-slate-500 dark:text-slate-400 mt-1">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials & Availability */}
            <div className="pt-10 border-t border-slate-200 dark:border-white/10">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-6">Connected Networks</h3>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href} 
                    className="w-12 h-12 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-300 shadow-sm"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
              <div className="mt-8 p-6 rounded-2xl bg-primary-500/5 border border-primary-500/10 flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  <span className="text-slate-900 dark:text-white font-bold">Currently Available</span> for new collaborative projects & consulting.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="relative p-1 md:p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-white/40 dark:border-white/10 shadow-2xl backdrop-blur-xl">
              {/* Form Success State */}
              <AnimatePresence>
                {isSent && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center p-12 text-center bg-white/90 dark:bg-base-dark/95 backdrop-blur-xl rounded-[2.5rem]"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20">
                      <CheckCircle2 className="text-emerald-500" size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Message Received!</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-sm">
                      Thank you for reaching out. A core member of Semesta Labs will get back to you shortly.
                    </p>
                    <Button variant="outline" className="rounded-full px-8" onClick={() => setIsSent(false)}>Send Another Message</Button>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="p-6 md:p-4 space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-4">Full Identity</label>
                    <div className="relative group">
                      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors">
                        <User size={18} />
                      </div>
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. John Doe"
                        className="w-full pl-12 pr-6 py-4 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all placeholder:text-slate-400 font-medium shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-4">Secure Email</label>
                    <div className="relative group">
                      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors">
                        <Mail size={18} />
                      </div>
                      <input 
                        required
                        type="email" 
                        placeholder="e.g. john@company.com"
                        className="w-full pl-12 pr-6 py-4 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all placeholder:text-slate-400 font-medium shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"
                      />
                    </div>
                  </div>
                </div>

                {/* Inquiry Type */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-4">Engagement Type</label>
                  <div className="relative group">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors z-10 pointer-events-none">
                      <Globe size={18} />
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsTypeOpen(!isTypeOpen)}
                      className="w-full pl-12 pr-12 py-4 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all font-medium text-left flex justify-between items-center group shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"
                    >
                      <span className={selectedType ? "text-slate-900 dark:text-white" : "text-slate-400"}>
                        {selectedType || "Select Type"}
                      </span>
                      <ChevronDown size={18} className={cn("text-slate-400 transition-transform duration-300", isTypeOpen && "rotate-180")} />
                    </button>

                    <AnimatePresence>
                      {isTypeOpen && (
                        <>
                          <div className="fixed inset-0 z-20" onClick={() => setIsTypeOpen(false)} />
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute top-full left-0 right-0 mt-3 p-2 bg-white dark:bg-[#1a1c20] border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl backdrop-blur-2xl z-30 overflow-hidden"
                          >
                            {INQUIRY_TYPES.map((type) => (
                              <button
                                key={type}
                                type="button"
                                onClick={() => {
                                  setSelectedType(type);
                                  setIsTypeOpen(false);
                                }}
                                className={cn(
                                  "w-full px-6 py-3.5 text-left rounded-2xl text-sm font-medium transition-all",
                                  selectedType === type
                                    ? "bg-primary-500 text-white shadow-lg"
                                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"
                                )}
                              >
                                {type}
                              </button>
                            ))}
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Brief */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-4">Project Architecture Brief</label>
                  <div className="relative group">
                    <div className="absolute left-5 top-6 text-slate-400 group-focus-within:text-primary-500 transition-colors">
                      <FileText size={18} />
                    </div>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Describe your vision and requirements..."
                      className="w-full pl-12 pr-6 py-5 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all placeholder:text-slate-400 font-medium resize-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full py-6 rounded-full text-lg font-bold gap-3 shadow-[0_12px_24px_rgba(30,144,255,0.2),inset_0_2px_0_rgba(255,255,255,0.2),inset_0_-2px_0_rgba(0,0,0,0.1)] hover:scale-[1.01] active:scale-[0.98] transition-all" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Firing up..." : "Initiate Engagement"}
                  <Send size={20} className={cn(isSubmitting ? "hidden" : "block transition-transform group-hover:translate-x-1")} />
                </Button>
                
                <p className="text-center text-xs text-slate-500 dark:text-slate-500 px-8">
                  By initiating engagement, you agree to our <span className="underline cursor-pointer hover:text-primary-500 transition-colors">Privacy Policy</span>. Data is transmitted via encrypted laboratory channels.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
      
      {/* Footer Branding */}
      <div className="max-w-6xl mx-auto px-6 pb-12 opacity-30 pointer-events-none flex justify-between items-center text-slate-400">
        <div className="flex items-center gap-2">
          <Globe size={16} />
          <span className="text-xs font-bold uppercase tracking-widest">Global Operations HUB</span>
        </div>
        <div className="text-xs font-medium">© {new Date().getFullYear()} SEMESTA LABS INC.</div>
      </div>
    </div>
  );
}

