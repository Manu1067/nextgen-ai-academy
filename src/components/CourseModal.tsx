import React, { useEffect, useRef } from 'react';
import { X, Clock, BarChart2, BookOpen, CheckCircle, ArrowRight, ShieldCheck, Target } from 'lucide-react';
import { Course } from '../types';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (courseId: string) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose, onEnroll }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!course) return;

    // Focus close button on open
    closeButtonRef.current?.focus();

    // Handle Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [course, onClose]);

  if (!course) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-modal-title"
      aria-describedby="course-modal-desc"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl rounded-2xl bg-slate-900 border border-indigo-900/60 shadow-2xl shadow-indigo-950/70 overflow-hidden text-left my-8 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header gradient bar */}
        <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400" />

        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-slate-800">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-xs text-indigo-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <BarChart2 className="w-3.5 h-3.5" />
                  {course.level}
                </span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {course.duration}
                </span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  {course.modulesCount} Modules
                </span>
              </div>
              <h3 id="course-modal-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {course.title}
              </h3>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
              aria-label="Close course details modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p id="course-modal-desc" className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            {course.fullDescription}
          </p>
        </div>

        {/* Modal Body: Learning objectives, syllabus, prerequisites */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
          {/* Learning Objectives */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-indigo-300 uppercase tracking-wider flex items-center gap-2">
              <Target className="w-4 h-4 text-indigo-400" />
              <span>Core Learning Objectives</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {course.learningObjectives.map((objective, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{objective}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum breakdown */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Curriculum & Weekly Breakdown
            </h4>
            <div className="space-y-3">
              {course.syllabus.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-indigo-300">{item.week}</span>
                    <span className="text-slate-400 font-medium">{item.title}</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-400 pt-1">
                    {item.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-indigo-500 shrink-0" />
                        <span className="truncate">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Project Capstone Outcome */}
          <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-800/40 space-y-1">
            <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
              Capstone Project Outcome
            </div>
            <p className="text-sm text-slate-200 font-medium">{course.projectOutcome}</p>
          </div>

          {/* Prerequisites */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 space-y-1">
            <span className="font-semibold text-white block">Prerequisites & Recommended Background:</span>
            <p className="text-slate-400">{course.prerequisites}</p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 border-t border-slate-800">
            <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>Illustrative educational course plan. All project code is built in public developer repositories.</span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            Close Details
          </button>
          <button
            type="button"
            onClick={() => onEnroll(course.id)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl shadow-lg shadow-indigo-600/30 hover:scale-[1.02] transition-all cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Register Interest</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
