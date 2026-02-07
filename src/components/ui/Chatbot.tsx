import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessagesSquare, X, Send, Sparkles } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "Apa itu Semesta Labs?",
    answer: "Semesta Labs adalah laboratorium teknik digital yang berfokus pada pembangunan sistem AI dan Web3 praktis untuk bisnis."
  },
  {
    question: "Layanan apa yang tersedia?",
    answer: "Kami menawarkan pengembangan Sistem AI & Automasi, Platform Web3/Blockchain, dan Aplikasi Web skala perusahaan."
  },
  {
    question: "Bagaimana cara kerja sama?",
    answer: "Anda bisa mulai dengan konsultasi gratis. Kami akan menganalisis kebutuhan bisnis Anda dan memberikan solusi teknis yang tepat."
  },
  {
    question: "Berapa biaya proyeknya?",
    answer: "Biaya sangat bergantung pada kompleksitas solusi. Hubungi kami melalui WhatsApp untuk mendapatkan estimasi yang lebih akurat."
  }
];

const WHATSAPP_NUMBER = "6281234567890"; // Ganti dengan nomor asli

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const [showPopup, setShowPopup] = useState(true);

  // Auto-set popup to reappear if closed and reopened, but for now just show it initially
  React.useEffect(() => {
    const timer = setTimeout(() => setShowPopup(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-28 md:bottom-6 right-4 md:right-6 z-50">
      <AnimatePresence>
        {/* Welcome Popup Bubble */}
        {!isOpen && showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10, x: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="absolute bottom-16 md:bottom-20 right-0 py-2 md:py-3 px-4 md:px-5 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-white/10 whitespace-nowrap"
          >
            <div className="absolute -bottom-2 right-5 md:right-6 w-4 h-4 bg-white dark:bg-slate-800 border-r border-b border-slate-200 dark:border-white/10 rotate-45" />
            <p className="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-200 flex items-center gap-2">
              <Sparkles size={14} className="text-primary-500" />
              Ada yang ingin kamu tanyakan?
            </p>
          </motion.div>
        )}

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-16 md:bottom-20 right-0 w-[calc(100vw-2rem)] sm:w-80 md:w-96 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary-500 p-6 text-white flex justify-between items-center shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessagesSquare size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Semesta Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <p className="text-xs text-white/80">Siap membantu</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-all duration-300"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[400px] overflow-y-auto space-y-4 bg-slate-50 dark:bg-slate-900/50">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none border border-slate-100 dark:border-white/5 shadow-sm">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Halo! Saya asisten virtual Semesta Labs. Berikut beberapa hal yang sering ditanyakan:
                </p>
              </div>

              {FAQ_DATA.map((faq, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <button
                    onClick={() => setSelectedQuestion(selectedQuestion === index ? null : index)}
                    className={`text-left text-sm p-4 rounded-2xl border transition-all duration-300 active:scale-95 ${
                      selectedQuestion === index 
                      ? 'bg-primary-500 text-white border-primary-500 shadow-lg shadow-primary-500/20' 
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-primary-500/50 hover:bg-slate-50 dark:hover:bg-slate-800/80'
                    }`}
                  >
                    {faq.question}
                  </button>
                  {selectedQuestion === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-primary-50 dark:bg-primary-900/10 p-4 rounded-2xl text-sm text-slate-700 dark:text-slate-300 italic border-l-4 border-primary-500 mx-1"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer / WhatsApp CTA */}
            <div className="p-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-white/10">
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-4 text-center">
                Punya pertanyaan spesifik? Hubungi tim kami langsung.
              </p>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-green-500/20 active:scale-95"
              >
                <Send size={18} />
                Chat di WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button with Depth Emboss Effect */}
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsOpen(!isOpen);
          setShowPopup(false);
        }}
        className={`relative w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 
          ${isOpen 
            ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shadow-inner overflow-hidden' 
            : 'bg-primary-500 text-white shadow-[0_8px_16px_rgba(59,130,246,0.3),inset_0_-4px_6px_rgba(0,0,0,0.2),inset_0_4px_6px_rgba(255,255,255,0.3)]'
          }
        `}
      >
        {isOpen ? (
          <X size={20} className="md:size-[28px] relative z-10" />
        ) : (
          <MessagesSquare size={20} className="md:size-[28px] relative z-10 drop-shadow-md" />
        )}
        
        {/* Animated outer ring for attention when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full border-2 border-primary-500/30 animate-ping" />
        )}
      </motion.button>
    </div>
  );
}
