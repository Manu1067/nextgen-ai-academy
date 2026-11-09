import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-indigo-950/60 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand wordmark (single element) */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 text-white font-bold text-xl tracking-tight whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-indigo-400 flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-lg text-white group-hover:text-indigo-200 transition-colors">
              NextGen <span className="text-indigo-400">AI Academy</span>
            </span>
          </a>

          {/* Zone 2: Clean single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <button
              onClick={() => scrollToSection('courses')}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection('learning-journey')}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded"
            >
              Learning Paths
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded"
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              onClick={() => scrollToSection('registration')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl transition-all shadow-md shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-indigo-950 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            <button
              onClick={() => scrollToSection('courses')}
              className="text-left text-base font-medium text-slate-200 hover:text-indigo-400 py-1.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection('learning-journey')}
              className="text-left text-base font-medium text-slate-200 hover:text-indigo-400 py-1.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded"
            >
              Learning Paths
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-base font-medium text-slate-200 hover:text-indigo-400 py-1.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded"
            >
              About Academy
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-left text-base font-medium text-slate-200 hover:text-indigo-400 py-1.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded"
            >
              Projects & Outcomes
            </button>
            <button
              onClick={() => scrollToSection('audience')}
              className="text-left text-base font-medium text-slate-200 hover:text-indigo-400 py-1.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded"
            >
              Who Can Join
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-left text-base font-medium text-slate-200 hover:text-indigo-400 py-1.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-base font-medium text-slate-200 hover:text-indigo-400 py-1.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded"
            >
              Contact
            </button>
          </nav>
          <div className="pt-4 border-t border-slate-800">
            <button
              onClick={() => scrollToSection('registration')}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl cursor-pointer"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
