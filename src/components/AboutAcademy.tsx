import React from 'react';
import { Users, Award, Laptop, MessageSquareText, ShieldAlert } from 'lucide-react';
import campusVisual from '../assets/images/academy_learning_hub_1794244914548.jpg';

export const AboutAcademy: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative border-t border-slate-800/60">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Studio Photo & Community Proof */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-indigo-900/60 shadow-2xl shadow-indigo-950/40">
              <img
                src={campusVisual}
                alt="NextGen AI Academy collaborative learning studio with learners analyzing machine learning models"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 lg:h-[460px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-indigo-500/30">
                <div className="flex items-center justify-between text-xs text-white mb-1">
                  <span className="font-semibold text-indigo-300">NextGen Collaborative Studio & Remote Lab</span>
                  <span className="text-slate-400">Global Cohort Access</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  Asynchronous video curriculum supplemented with weekly live peer labs and mentor code clinics.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Mission and Philosophy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 tracking-wider uppercase">
                <span>About NextGen AI Academy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Designed for the Builders of Tomorrow
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                NextGen AI Academy was established with a singular conviction: the best way to master artificial intelligence is not through static slide decks or passive video consumption, but by actively constructing systems that solve real problems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-950 flex items-center justify-center text-indigo-400">
                  <Laptop className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Project-First Instruction</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every concept is reinforced with a runnable code milestone rather than multiple-choice quizzes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-purple-950 flex items-center justify-center text-purple-400">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Peer & Mentor Feedback</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Detailed code reviews on your pull requests to cultivate professional software engineering habits.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-950 flex items-center justify-center text-indigo-400">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Verifiable Artifacts</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Earn credentials backed by open public repositories, verifiable deployments, and documentation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-purple-950 flex items-center justify-center text-purple-400">
                  <MessageSquareText className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Open Community</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Connect with ambitious students, graduates, and engineers exchanging ideas and collaborating.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('courses');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <span>Explore All Tracks</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('registration');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-indigo-500 text-slate-300 hover:text-white text-xs font-semibold transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <span>Join Next Cohort</span>
              </button>
            </div>

            <div className="pt-2 text-xs text-slate-500 border-t border-slate-800/80">
              * NextGen AI Academy operates as an illustrative educational concept and design prototype.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
