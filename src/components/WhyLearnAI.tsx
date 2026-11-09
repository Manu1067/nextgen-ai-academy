import React, { useState } from 'react';
import { Target, Layers, Briefcase, Terminal, Check, X, Sparkles } from 'lucide-react';

export const WhyLearnAI: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'capabilities'>('capabilities');

  const benefits = [
    {
      id: 'future-ready',
      title: 'Future-Ready Skills',
      icon: Target,
      tagline: 'Stay ahead of automation waves',
      description:
        'AI is fundamentally transforming engineering, product development, design, and operations. Instead of waiting for curricula to catch up, gain foundational fluency in neural architectures, prompt dynamics, and model APIs today.',
      bulletPoints: [
        'Understand model capabilities, token limits, and failure modes',
        'Gain confidence communicating technical AI concepts',
        'Future-proof your career across tech, product, and business disciplines'
      ]
    },
    {
      id: 'hands-on',
      title: 'Hands-On Learning',
      icon: Terminal,
      tagline: 'Code, test, break, and iterate',
      description:
        'Passive video tutorials create the illusion of competence. At NextGen, you spend 80% of your time inside code notebooks, testing real API endpoints, tuning hyperparameters, and debugging vector retrieval queries.',
      bulletPoints: [
        'Live coding environments and interactive notebooks',
        'Direct integration with state-of-the-art model APIs',
        'Instant test suites providing validation on your code submissions'
      ]
    },
    {
      id: 'industry-relevant',
      title: 'Industry-Relevant Knowledge',
      icon: Layers,
      tagline: 'The modern applied AI toolchain',
      description:
        'We bypass outdated textbook algorithms to focus on the frameworks teams actually deploy in production: Retrieval-Augmented Generation (RAG), vector stores, function calling, and structured JSON outputs.',
      bulletPoints: [
        'Work with modern ecosystems: LangChain, LlamaIndex, Vector DBs',
        'Enterprise security and prompt injection guardrails',
        'Cost optimization and latency benchmarking for real deployments'
      ]
    },
    {
      id: 'portfolio-building',
      title: 'Portfolio-Building Projects',
      icon: Briefcase,
      tagline: 'Proof of work over credentials',
      description:
        'Hiring managers and clients look for tangible demonstrations of skill. Every milestone translates into clean, documented GitHub repositories, deployed web applications, and live interactive demos you can showcase.',
      bulletPoints: [
        'Public GitHub repositories with clean documentation and READMEs',
        'Live hosted web demos recruiters can test immediately',
        'Technical case studies explaining architectural decisions and trade-offs'
      ]
    }
  ];

  return (
    <section id="why-learn-ai" className="py-24 bg-slate-900/60 relative border-t border-slate-800/60">
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 tracking-wider uppercase">
            <span>Pedagogy & Core Advantages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            Why Learn Practical AI with NextGen?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            Traditional computer science programs often treat AI as purely abstract mathematics, while generic video courses offer shallow surface demos. We bridge that gap with engineering rigor and applied building.
          </p>

          {/* Interactive view toggle */}
          <div className="inline-flex items-center p-1 rounded-xl bg-slate-950 border border-indigo-900/40 shadow-inner mt-4">
            <button
              type="button"
              onClick={() => setActiveTab('capabilities')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'capabilities'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Core Benefits
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('comparison')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'comparison'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Curriculum Comparison
            </button>
          </div>
        </div>

        {/* View 1: 4 Core Benefits */}
        {activeTab === 'capabilities' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={benefit.id}
                  className="group relative rounded-2xl p-7 bg-slate-950/80 border border-indigo-950/80 hover:border-indigo-600/50 transition-all duration-300 shadow-lg shadow-black/30 hover:shadow-indigo-950/30 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono text-slate-500">0{index + 1}</span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-xs font-medium text-indigo-400 mt-1">{benefit.tagline}</p>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {benefit.description}
                    </p>

                    <div className="pt-3 border-t border-slate-800/80 space-y-2">
                      {benefit.bulletPoints.map((point, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-400">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* View 2: Traditional vs NextGen Academy Comparison */
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-indigo-950 bg-slate-950/90 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
              {/* Traditional Column */}
              <div className="p-8 space-y-6 bg-slate-950/40">
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider">Traditional Theory Courses</span>
                  <h4 className="text-xl font-bold text-slate-300">Passive & Abstract</h4>
                </div>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <span>Heavy emphasis on manual derivation of matrix math with little code connection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <span>Toy datasets (MNIST, Iris) that bear zero resemblance to real modern production data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <span>Outdated syllabi that omit transformers, LLM prompt engineering, and vector search</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <span>Graduation certificates without verifiable code repos or working application links</span>
                  </li>
                </ul>
              </div>

              {/* NextGen Academy Column */}
              <div className="p-8 space-y-6 bg-gradient-to-br from-indigo-950/40 via-purple-950/20 to-slate-950/60 border-t md:border-t-0 border-indigo-500/20">
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    NextGen AI Academy Method
                  </span>
                  <h4 className="text-xl font-bold text-white">Applied & Production-Grade</h4>
                </div>
                <ul className="space-y-4 text-sm text-slate-200">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Hands-on model orchestration using modern APIs, Python, TypeScript, and Docker</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Real-world messy data: PDF research papers, multi-source webhooks, and live APIs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Up-to-date tracks in Generative AI, RAG pipelines, prompt testing, and autonomous agents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Three deployed public capstones with code repositories and interactive user interfaces</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
