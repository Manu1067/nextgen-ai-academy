import React from 'react';
import { ArrowRight, Compass, Code2, Cpu, CheckCircle2 } from 'lucide-react';
import heroVisual from '../assets/images/hero_ai_learning_1794244913332.jpg';

interface HeroProps {
  onExploreCourses: () => void;
  onJoinProgram: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCourses, onJoinProgram }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950">
      {/* Background ambient glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-800/50 text-indigo-300 text-xs font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              <span>Next-Generation Practical AI Curriculum</span>
              <span className="text-indigo-400/60">·</span>
              <span>2026 Cohort Open</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] text-balance">
              Build Your Future in the <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-100 bg-clip-text text-transparent">Age of AI.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl text-balance">
              Develop practical, in-demand artificial intelligence skills through structured learning paths and hands-on projects designed specifically for college students, fresh graduates, and ambitious professionals.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onExploreCourses}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={onJoinProgram}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-indigo-900/50 hover:border-indigo-600/60 rounded-xl hover:text-white transition-all cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <Compass className="w-5 h-5 text-indigo-400" />
                <span>Join the Program</span>
              </button>
            </div>

            {/* Quick value signals */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>100% Hands-on Code & Tools</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>Self-Paced with Mentor Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>Portfolio-Ready Public Repos</span>
              </div>
            </div>
          </div>

          {/* Right Column: AI Visual Carrier */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Glow frame */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-indigo-500/30 via-purple-500/20 to-transparent shadow-2xl shadow-indigo-950/60">
                <div className="relative rounded-[14px] overflow-hidden bg-slate-900/90 border border-indigo-800/40">
                  <img
                    src={heroVisual}
                    alt="Neural network synaptic visualization and geometric crystal data streams"
                    referrerPolicy="no-referrer"
                    className="w-full h-80 sm:h-96 lg:h-[420px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />

                  {/* High-fidelity overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />

                  {/* Floating interactive highlight card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-indigo-500/30 shadow-xl space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span className="font-semibold text-white flex items-center gap-1.5">
                        <Cpu className="w-4 h-4 text-indigo-400" />
                        NextGen Applied AI Lab
                      </span>
                      <span className="text-slate-400">Live Curriculum</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                      <div className="p-2 rounded-lg bg-indigo-950/50 border border-indigo-900/40">
                        <div className="text-xs text-slate-400">Model APIs</div>
                        <div className="text-sm font-semibold text-indigo-300">LLM & Vision</div>
                      </div>
                      <div className="p-2 rounded-lg bg-purple-950/50 border border-purple-900/40">
                        <div className="text-xs text-slate-400">Knowledge</div>
                        <div className="text-sm font-semibold text-purple-300">Vector RAG</div>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/40">
                        <div className="text-xs text-slate-400">Deploy</div>
                        <div className="text-sm font-semibold text-slate-200">Agents</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative accent element */}
              <div className="hidden sm:block absolute -top-4 -right-4 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-purple-500/40 shadow-xl shadow-purple-950/50 text-xs text-purple-200">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-purple-400" />
                  <span>Real Code, No Toy Scripts</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metric Proof Strip */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-indigo-950/50">
              <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">6</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">Specialized Course Tracks</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-indigo-950/50">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-400 font-mono tabular-nums">100%</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">Project-Based Learning</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-indigo-950/50">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 font-mono tabular-nums">3+</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">Production Capstone Projects</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-indigo-950/50">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400 font-mono tabular-nums">1:1</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">Code & Portfolio Reviews</div>
            </div>
          </div>
          <p className="text-center text-xs text-slate-500 mt-4">
            Curriculum parameters and learning hours represent typical benchmark figures for educational illustration.
          </p>
        </div>
      </div>
    </section>
  );
};
