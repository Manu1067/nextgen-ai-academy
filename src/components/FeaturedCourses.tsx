import React, { useState } from 'react';
import { Clock, BarChart2, ArrowRight, BookOpen, Layers } from 'lucide-react';
import { Course } from '../types';
import { COURSES } from '../data/coursesData';

interface FeaturedCoursesProps {
  onSelectCourse: (course: Course) => void;
}

export const FeaturedCourses: React.FC<FeaturedCoursesProps> = ({ onSelectCourse }) => {
  const [filter, setFilter] = useState<'all' | 'foundations' | 'engineering' | 'productivity'>('all');

  const filteredCourses = COURSES.filter((course) => {
    if (filter === 'all') return true;
    return course.category === filter;
  });

  return (
    <section id="courses" className="py-24 bg-slate-950 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 tracking-wider uppercase">
              <span>Structured Curriculum</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Course Offerings
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Explore six specialized tracks engineered to transition learners from foundational AI literacy to advanced generative architectures and autonomous workflows.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-indigo-950/80 rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Tracks ({COURSES.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('foundations')}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'foundations'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Foundations
            </button>
            <button
              type="button"
              onClick={() => setFilter('engineering')}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'engineering'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Engineering & Agents
            </button>
            <button
              type="button"
              onClick={() => setFilter('productivity')}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'productivity'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Productivity
            </button>
          </div>
        </div>

        {/* 6 Course Cards Grid */}
        {filteredCourses.length === 0 ? (
          <div className="py-16 text-center text-slate-400 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-base font-medium text-slate-300">No courses match the selected filter.</p>
            <button
              onClick={() => setFilter('all')}
              className="mt-3 text-xs font-semibold text-indigo-400 hover:text-indigo-300 underline cursor-pointer"
            >
              Reset filter to all tracks
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                role="button"
                tabIndex={0}
                aria-label={`View curriculum details and learning objectives for ${course.title}`}
                onClick={() => onSelectCourse(course)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectCourse(course);
                  }
                }}
                className="group relative rounded-2xl p-7 bg-slate-900/70 border border-indigo-950/70 hover:border-indigo-500/60 focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none transition-all duration-300 shadow-xl shadow-black/40 hover:shadow-indigo-950/50 flex flex-col justify-between text-left cursor-pointer transform hover:-translate-y-1"
              >
                {/* Card top gradient accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent group-hover:via-indigo-400 transition-all" />

                <div className="space-y-4">
                  {/* Unboxed Metadata Line with separators (Zero-Pill Discipline) */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5 text-indigo-300">
                      <BarChart2 className="w-3.5 h-3.5 text-indigo-400" />
                      {course.level}
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {course.duration}
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                      {course.modulesCount} Modules
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors leading-snug">
                    {course.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {course.shortDescription}
                  </p>

                  {/* Project highlight note */}
                  <div className="pt-3 pb-1 border-t border-slate-800/80">
                    <div className="text-xs text-slate-400">
                      <span className="text-indigo-400 font-medium">Capstone:</span> {course.projectOutcome}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-6 mt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Self-paced + Reviews</span>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-300 group-hover:text-indigo-200 group-hover:underline transition-colors">
                    <span>Explore Course</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Note on illustrative nature */}
        <div className="mt-12 text-center text-xs text-slate-500">
          * Course curricula, module counts, and capstone specifications are illustrative sample blueprints reflecting actual modern AI engineering methodologies.
        </div>
      </div>
    </section>
  );
};
