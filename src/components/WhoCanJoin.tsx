import React, { useState } from 'react';
import { GraduationCap, Briefcase, Award, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { AUDIENCE_PROFILES } from '../data/coursesData';

interface WhoCanJoinProps {
  onSelectTrack: (trackName: string) => void;
}

export const WhoCanJoin: React.FC<WhoCanJoinProps> = ({ onSelectTrack }) => {
  const [selectedRole, setSelectedRole] = useState<'student' | 'graduate' | 'professional'>('student');

  const icons = [GraduationCap, Award, Briefcase];

  return (
    <section id="audience" className="py-24 bg-slate-950 relative border-t border-slate-800/60">
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 tracking-wider uppercase">
            <span>Tailored Audience Pathways</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Who Can Join NextGen AI Academy?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            Whether you are preparing for your first technical internship, transitioning across industries, or automating workflows inside an enterprise, we offer targeted pathways.
          </p>
        </div>

        {/* 3 Visually Distinct Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {AUDIENCE_PROFILES.map((profile, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={profile.id}
                className="relative rounded-2xl p-8 bg-slate-900/60 border border-indigo-950/80 hover:border-indigo-500/50 transition-all duration-300 shadow-xl shadow-black/40 flex flex-col justify-between text-left group"
              >
                {/* Visual badge top line */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-indigo-950/60 border border-indigo-700/40 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    {/* Unboxed Metadata (Zero-Pill) */}
                    <span className="text-xs text-slate-400 font-mono">
                      {profile.commitment}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                      {profile.title}
                    </h3>
                    <p className="text-xs font-medium text-indigo-400 mt-1">
                      {profile.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {profile.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-800">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Target Outcomes
                    </span>
                    {profile.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-3">
                  <div className="text-xs text-slate-400">
                    <span className="text-indigo-300 font-medium">Recommended:</span> {profile.recommendedTrack}
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectTrack(profile.title)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-indigo-600 rounded-xl transition-all cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                  >
                    <span>Select {profile.title} Path</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Pathway Recommender Helper */}
        <div className="rounded-2xl bg-gradient-to-br from-indigo-950/60 via-slate-900/90 to-purple-950/40 border border-indigo-800/40 p-6 sm:p-8 max-w-4xl mx-auto text-left shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-indigo-900/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Not sure where to begin?</h4>
                <p className="text-xs text-slate-300">Use our quick pathway recommender to find the ideal course sequence</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-1 bg-slate-950 rounded-xl border border-indigo-900/40">
              <button
                type="button"
                onClick={() => setSelectedRole('student')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400 ${
                  selectedRole === 'student' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Student
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole('graduate')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400 ${
                  selectedRole === 'graduate' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Graduate
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole('professional')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400 ${
                  selectedRole === 'professional' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Professional
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300 mb-6">
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="font-semibold text-indigo-300 block mb-1">Recommended Starting Point</span>
              {selectedRole === 'student' && 'Introduction to Artificial Intelligence (4 Weeks)'}
              {selectedRole === 'graduate' && 'Generative AI and LLMs (6 Weeks)'}
              {selectedRole === 'professional' && 'Prompt Engineering + AI Productivity (3 Weeks)'}
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="font-semibold text-purple-300 block mb-1">Target Milestone</span>
              {selectedRole === 'student' && 'Build and deploy a public research retrieval tool to GitHub'}
              {selectedRole === 'graduate' && 'Construct an autonomous agent with function calling and API endpoints'}
              {selectedRole === 'professional' && 'Deploy an automated workflow saving 10+ operational hours per week'}
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="font-semibold text-emerald-300 block mb-1">Prerequisite Prep Needed</span>
              {selectedRole === 'student' && 'Zero coding prerequisites; pre-course setup module included'}
              {selectedRole === 'graduate' && 'Basic Python or JavaScript syntax familiarity recommended'}
              {selectedRole === 'professional' && 'No technical background required; focuses on API and workflow tools'}
            </div>
          </div>

          <div className="flex justify-end pt-2 border-t border-indigo-900/30">
            <button
              type="button"
              onClick={() => {
                if (selectedRole === 'student') onSelectTrack('College Students');
                else if (selectedRole === 'graduate') onSelectTrack('Fresh Graduates');
                else onSelectTrack('Working Professionals');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold shadow-md transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Apply with this Pathway</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
