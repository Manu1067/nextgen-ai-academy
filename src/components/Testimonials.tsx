import React, { useState, useEffect } from 'react';
import { Quote, Sparkles, CheckCircle2, ChevronLeft, ChevronRight, Pause, Play, LayoutGrid, Sliders } from 'lucide-react';
import { TESTIMONIALS } from '../data/coursesData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || viewMode !== 'carousel') return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, viewMode]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-slate-950 relative border-t border-slate-800/60">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 tracking-wider uppercase">
            <span>Illustrative Learner Perspectives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How Learners Apply Practical AI
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            Sample case studies representing how students, career switchers, and industry professionals apply project-first learning in their work.
          </p>

          {/* View Mode Switcher */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="inline-flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
              <button
                type="button"
                onClick={() => setViewMode('carousel')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  viewMode === 'carousel' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Spotlight Carousel</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  viewMode === 'grid' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Show All 3 Profiles</span>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Mode */}
        {viewMode === 'carousel' ? (
          <div
            className="max-w-3xl mx-auto relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Active Card */}
            <div
              key={activeTestimonial.id}
              className="relative rounded-2xl p-8 sm:p-12 bg-slate-900/80 border border-indigo-900/70 shadow-2xl shadow-indigo-950/40 text-left transition-all duration-300 animate-in fade-in-50 zoom-in-95"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-indigo-950/80 border border-indigo-700/40 flex items-center justify-center text-indigo-400">
                    <Quote className="w-6 h-6" />
                  </div>
                  <span className="text-xs text-indigo-400 font-mono">
                    Profile {currentIndex + 1} of {TESTIMONIALS.length}
                  </span>
                </div>

                {/* Main Quote */}
                <p className="text-base sm:text-lg text-slate-100 leading-relaxed italic">
                  "{activeTestimonial.quote}"
                </p>

                {/* Highlight badge */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <div className="flex items-start gap-2 text-xs text-emerald-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{activeTestimonial.highlight}</span>
                  </div>
                  <div className="text-xs text-slate-400 pl-6">
                    <span className="text-slate-500">Capstone Deliverable:</span> {activeTestimonial.projectBuilt}
                  </div>
                </div>

                {/* Profile Attribution */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-base shadow-md">
                      {activeTestimonial.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">{activeTestimonial.name}</div>
                      <div className="text-xs text-slate-300 font-medium">{activeTestimonial.role}</div>
                      <div className="text-xs text-slate-500">{activeTestimonial.background}</div>
                    </div>
                  </div>

                  {/* Carousel Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous testimonial"
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next testimonial"
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Indicator Dots & Auto-Play Toggle */}
            <div className="flex items-center justify-center gap-3 pt-6">
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((t, idx) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentIndex === idx ? 'w-8 bg-indigo-500' : 'w-2 bg-slate-700 hover:bg-slate-600'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                aria-label={isAutoPlaying ? 'Pause rotation' : 'Play rotation'}
                className="p-1 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer focus:outline-none"
              >
                {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        ) : (
          /* Grid Mode: All 3 cards visible */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="relative rounded-2xl p-8 bg-slate-900/60 border border-indigo-950/80 hover:border-indigo-600/50 transition-all duration-300 shadow-xl shadow-black/40 flex flex-col justify-between text-left group"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-indigo-950/70 border border-indigo-800/40 flex items-center justify-center text-indigo-400">
                      <Quote className="w-5 h-5" />
                    </div>
                    <span className="text-xs text-indigo-400 font-mono">Sample Outcome</span>
                  </div>

                  <p className="text-sm text-slate-200 leading-relaxed italic">
                    "{t.quote}"
                  </p>

                  <div className="pt-3 border-t border-slate-800/80 space-y-1.5">
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="font-medium text-emerald-300">{t.highlight}</span>
                    </div>
                    <div className="text-xs text-slate-400">
                      <span className="text-slate-500">Capstone Project:</span> {t.projectBuilt}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                    <div className="text-[11px] text-slate-500">{t.background}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Clear transparent disclaimer banner */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 max-w-3xl mx-auto text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
          <span>
            <strong>Transparency Notice:</strong> Testimonials and profiles displayed above are illustrative case scenarios demonstrating typical curriculum trajectories and project deliverables.
          </span>
        </div>
      </div>
    </section>
  );
};
