import React, { useState } from 'react';
import { Search, BrainCircuit, Hammer, Rocket, CheckCircle, ArrowRight, ArrowLeft, Sparkles, Check } from 'lucide-react';

export const LearningJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Discover',
      tagline: 'Map your baseline and AI trajectory',
      icon: Search,
      summary: 'Assess your technical starting point, demystify the machine learning ecosystem, and formulate a targeted project roadmap aligned with your personal background.',
      achievements: [
        'Complete the AI Readiness & Math diagnostic assessment',
        'Map your target career or project objectives (NLP, Vision, Agents, Automation)',
        'Configure your local Python/TypeScript developer environment & API keys',
        'Establish your public GitHub learning repository and portfolio skeleton'
      ],
      milestoneDeliverable: 'Personalized AI Learning Blueprint & Verified Development Environment',
      estimatedHours: 'Week 1 · ~6-8 Hours'
    },
    {
      number: '02',
      title: 'Learn',
      tagline: 'Master core architectures & prompt mechanics',
      summary: 'Deep dive into transformer attention mechanisms, token embeddings, vector indexing, and structural prompt design through interactive runnable notebooks.',
      icon: BrainCircuit,
      achievements: [
        'Understand tokenization, context windows, and cost optimization trade-offs',
        'Construct structured outputs (JSON Schemas) with deterministic error handling',
        'Learn semantic similarity metrics and vector store chunking strategies',
        'Implement prompt regression test suites with automated quality assertions'
      ],
      milestoneDeliverable: 'Structured Notebook Portfolio with 10+ Validated AI Code Exercises',
      estimatedHours: 'Weeks 2-3 · ~12-16 Hours'
    },
    {
      number: '03',
      title: 'Build',
      tagline: 'Construct end-to-end applications with real APIs',
      summary: 'Move from isolated scripts to multi-component software systems. Connect frontend interfaces with backend LLM orchestration, vector databases, and external tool calls.',
      icon: Hammer,
      achievements: [
        'Build a production RAG system over multi-page PDF documents',
        'Orchestrate multi-step autonomous agent loops with failover mechanisms',
        'Implement latency caching and semantic guardrails to prevent hallucinations',
        'Containerize your application using Docker for repeatable hosting'
      ],
      milestoneDeliverable: 'Working Full-Stack AI Application with Automated Test Coverage',
      estimatedHours: 'Weeks 4-5 · ~15-20 Hours'
    },
    {
      number: '04',
      title: 'Launch',
      tagline: 'Deploy public demos and showcase verifiable proof',
      summary: 'Ship your capstone application to cloud infrastructure, draft a technical architectural case study, and present your live project for peer and mentor evaluation.',
      icon: Rocket,
      achievements: [
        'Deploy your live web application to a public cloud URL for recruiter review',
        'Write an in-depth README case study with architecture diagrams and metrics',
        'Receive comprehensive 1:1 code and architecture review feedback',
        'Earn your verifiable NextGen AI Academy Certificate of Completion'
      ],
      milestoneDeliverable: 'Live Public Web Application + Documented GitHub Case Study',
      estimatedHours: 'Week 6 · ~10 Hours'
    }
  ];

  return (
    <section id="learning-journey" className="py-24 bg-slate-900/40 relative border-t border-slate-800/60">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 tracking-wider uppercase">
            <span>Pedagogical Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            The NextGen Learning Journey
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            A clear four-step progression designed to turn theoretical curiosity into deployed software engineering capabilities.
          </p>

          {/* Visual connected progress indicator bar */}
          <div className="max-w-md mx-auto pt-4">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
              <span className="text-indigo-400 font-semibold">Stage {activeStep + 1} of 4</span>
              <span>{Math.round(((activeStep + 1) / steps.length) * 100)}% Journey Progress</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 transition-all duration-500 rounded-full"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* 4-Step Interactive Navigation bar */}
        <div
          role="tablist"
          aria-label="Learning journey stages"
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = activeStep === idx;
            const isPast = activeStep > idx;

            return (
              <button
                key={step.number}
                role="tab"
                id={`journey-tab-${idx}`}
                aria-selected={isCurrent}
                aria-controls={`journey-panel-${idx}`}
                tabIndex={0}
                onClick={() => setActiveStep(idx)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    setActiveStep((prev) => Math.min(steps.length - 1, prev + 1));
                  } else if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    setActiveStep((prev) => Math.max(0, prev - 1));
                  }
                }}
                className={`p-4 rounded-xl text-left transition-all duration-300 border cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                  isCurrent
                    ? 'bg-indigo-950/90 border-indigo-500 shadow-lg shadow-indigo-950/60 ring-1 ring-indigo-500/50 text-white'
                    : isPast
                    ? 'bg-slate-950/80 border-slate-700/80 text-slate-300 hover:border-slate-600'
                    : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isCurrent ? 'text-indigo-400' : isPast ? 'text-emerald-400' : 'text-slate-500'}`}>
                    {isPast ? (
                      <span className="flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" />
                        STEP {step.number}
                      </span>
                    ) : (
                      `STEP ${step.number}`
                    )}
                  </span>
                  <Icon className={`w-4 h-4 ${isCurrent ? 'text-indigo-400' : isPast ? 'text-emerald-400' : 'text-slate-500'}`} />
                </div>
                <div className={`text-base font-bold ${isCurrent ? 'text-white' : 'text-slate-300'}`}>
                  {step.title}
                </div>
                <div className="text-xs text-slate-400 truncate mt-0.5">
                  {step.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Spotlight Card */}
        <div
          id={`journey-panel-${activeStep}`}
          role="tabpanel"
          aria-labelledby={`journey-tab-${activeStep}`}
          className="rounded-2xl bg-slate-950 border border-indigo-900/60 p-6 sm:p-10 shadow-2xl shadow-black/50 text-left transition-all duration-300 animate-in fade-in-50"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left overview */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400">
                <span>Phase {steps[activeStep].number} of 04</span>
                <span aria-hidden="true">·</span>
                <span>{steps[activeStep].estimatedHours}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {steps[activeStep].title}: {steps[activeStep].tagline}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {steps[activeStep].summary}
              </p>

              <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-900/40 space-y-1 mt-4">
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Phase Deliverable
                </span>
                <p className="text-sm font-semibold text-slate-200">
                  {steps[activeStep].milestoneDeliverable}
                </p>
              </div>

              {/* Step Navigation Controls */}
              <div className="pt-4 flex items-center gap-3">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>
                <button
                  type="button"
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right achievements list */}
            <div className="lg:col-span-7 bg-slate-900/60 rounded-xl p-6 border border-slate-800/80 space-y-4">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                What You Master & Achieve During This Stage
              </h4>
              <div className="space-y-3.5">
                {steps[activeStep].achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
