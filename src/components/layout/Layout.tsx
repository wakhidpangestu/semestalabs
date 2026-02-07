import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Chatbot } from '../ui/Chatbot';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-base-light dark:bg-base-dark text-slate-900 dark:text-slate-200 selection:bg-primary-500/30 font-sans transition-colors duration-300 flex flex-col pb-32 md:pb-0">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
}
