import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/coursesData';

interface FAQSectionProps {
  onAskQuestion?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onAskQuestion }) => {
  // Allow toggling open items; default first one open
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['faq-1']));

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setOpenIds(new Set(FAQS.map((f) => f.id)));
  };

  const collapseAll = () => {
    setOpenIds(new Set());
  };

  return (
    <section id="faq" className="py-24 bg-slate-950 relative border-t border-slate-800/60">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 tracking-wider uppercase">
            <span>Clarifications & Guidance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            Everything you need to know about the curriculum, prerequisites, time investments, and verifiable capstones.
          </p>

          <div className="flex items-center justify-center gap-3 pt-2 text-xs text-slate-400">
            <button
              type="button"
              onClick={expandAll}
              className="text-indigo-400 hover:text-indigo-300 underline cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400 rounded px-1"
            >
              Expand All
            </button>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <button
              type="button"
              onClick={collapseAll}
              className="text-indigo-400 hover:text-indigo-300 underline cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400 rounded px-1"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 text-left">
          {FAQS.map((faq) => {
            const isOpen = openIds.has(faq.id);
            const answerId = `faq-answer-${faq.id}`;
            const headerId = `faq-header-${faq.id}`;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/90 border-indigo-600/50 shadow-xl shadow-indigo-950/30'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  id={headerId}
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-2xl"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider block">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-indigo-400 bg-indigo-950/80' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in-50 duration-200"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional support prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-800/50 flex items-center justify-center text-indigo-400 shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Have a specific question about your background?</div>
              <div className="text-xs text-slate-400">Reach our admissions advisors at admissions@example-nextgenai.edu (Placeholder)</div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              if (onAskQuestion) {
                onAskQuestion();
              } else {
                const el = document.getElementById('registration');
                el?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-4 py-2 text-xs font-semibold text-indigo-300 bg-indigo-950/60 hover:bg-indigo-900/60 border border-indigo-800/50 rounded-xl transition-colors whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            Ask in Application Form
          </button>
        </div>
      </div>
    </section>
  );
};
