import React from 'react';
import { Sparkles, Mail, MapPin, Clock, Github, Twitter, Linkedin, PhoneCall, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onSelectCourseTrack?: (courseId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCourseTrack }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-950 border-t border-indigo-950/80 pt-16 pb-12 relative text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Info (2 columns wide on lg) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <div className="flex items-center gap-2.5 text-white font-bold text-xl">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-indigo-400 flex items-center justify-center shadow-md shadow-indigo-500/20">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span>NextGen <span className="text-indigo-400">AI Academy</span></span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Empowering college students, recent graduates, and ambitious professionals with practical, project-centric artificial intelligence education and deployed code portfolios.
            </p>
            <div className="pt-2 flex items-center gap-4 text-slate-400">
              <span className="text-xs text-slate-400">Explore open curriculum:</span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded p-1"
                aria-label="NextGen AI Academy open source GitHub repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded p-1"
                aria-label="NextGen AI Academy on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded p-1"
                aria-label="NextGen AI Academy on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Useful Navigation Links */}
          <div className="space-y-3 text-left">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('courses')}
                  className="hover:text-indigo-300 transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400 rounded"
                >
                  Featured Courses
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('learning-journey')}
                  className="hover:text-indigo-300 transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400 rounded"
                >
                  Learning Journey
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('about')}
                  className="hover:text-indigo-300 transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400 rounded"
                >
                  About Academy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('why-learn-ai')}
                  className="hover:text-indigo-300 transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400 rounded"
                >
                  Why Learn AI
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('projects')}
                  className="hover:text-indigo-300 transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400 rounded"
                >
                  Capstone Projects
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('audience')}
                  className="hover:text-indigo-300 transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400 rounded"
                >
                  Who Can Join
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('faq')}
                  className="hover:text-indigo-300 transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400 rounded"
                >
                  FAQ & Guidance
                </button>
              </li>
            </ul>
          </div>

          {/* Course Tracks */}
          <div className="space-y-3 text-left">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Course Tracks
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectCourseTrack) onSelectCourseTrack('intro-to-ai');
                    else scrollTo('courses');
                  }}
                  className="hover:text-indigo-300 transition-colors cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400 rounded"
                >
                  Introduction to AI
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectCourseTrack) onSelectCourseTrack('generative-ai-llms');
                    else scrollTo('courses');
                  }}
                  className="hover:text-indigo-300 transition-colors cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400 rounded"
                >
                  Generative AI & LLMs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectCourseTrack) onSelectCourseTrack('prompt-engineering');
                    else scrollTo('courses');
                  }}
                  className="hover:text-indigo-300 transition-colors cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400 rounded"
                >
                  Prompt Engineering
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectCourseTrack) onSelectCourseTrack('ai-automation');
                    else scrollTo('courses');
                  }}
                  className="hover:text-indigo-300 transition-colors cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400 rounded"
                >
                  AI Automation & Agents
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectCourseTrack) onSelectCourseTrack('machine-learning-fundamentals');
                    else scrollTo('courses');
                  }}
                  className="hover:text-indigo-300 transition-colors cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400 rounded"
                >
                  Machine Learning Fundamentals
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectCourseTrack) onSelectCourseTrack('ai-tools-for-productivity');
                    else scrollTo('courses');
                  }}
                  className="hover:text-indigo-300 transition-colors cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400 rounded"
                >
                  Productivity & Tools
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Campus Info - Clearly Identified Placeholders */}
          <div className="space-y-3 text-left">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Contact & Inquiries
            </h4>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider">
                Illustrative Contact Channels
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <span className="truncate">admissions@example-nextgenai.edu</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Simulation Campus Hub, Tech Quarter (Demo Location)</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Virtual Advising: Mon–Fri, 9am–5pm EST</span>
              </div>
            </div>

            <div className="pt-1">
              <button
                type="button"
                onClick={() => scrollTo('registration')}
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-colors cursor-pointer"
              >
                <span>Submit Admissions Inquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Illustrative Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} NextGen AI Academy. All rights reserved.
          </div>
          <div className="text-center md:text-right max-w-xl text-[11px] text-slate-500 leading-relaxed">
            NextGen AI Academy is an illustrative education platform concept. Course structures, syllabi, contact emails, addresses, and sample student profiles are presented as educational demonstration models without claiming official university degree accreditation.
          </div>
        </div>
      </div>
    </footer>
  );
};
