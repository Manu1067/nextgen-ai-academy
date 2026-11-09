import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, RefreshCw, Sparkles, Shield, User, Mail, Briefcase, Compass } from 'lucide-react';
import { RegistrationFormData } from '../types';

interface RegistrationFormProps {
  initialAreaOfInterest?: string;
  initialRole?: string;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  initialAreaOfInterest = 'Generative AI and LLMs',
  initialRole = 'College Student'
}) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    currentRole: initialRole,
    areaOfInterest: initialAreaOfInterest,
    learningPace: 'Part-Time (5-8 hrs/week)',
    notes: ''
  });

  useEffect(() => {
    if (initialAreaOfInterest) {
      setFormData((prev) => ({ ...prev, areaOfInterest: initialAreaOfInterest }));
    }
  }, [initialAreaOfInterest]);

  useEffect(() => {
    if (initialRole) {
      setFormData((prev) => ({ ...prev, currentRole: initialRole }));
    }
  }, [initialRole]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');
  const [highlightField, setHighlightField] = useState<string | null>(null);

  const fullNameRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const roleRef = React.useRef<HTMLSelectElement>(null);
  const areaRef = React.useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (initialAreaOfInterest) {
      setFormData((prev) => ({ ...prev, areaOfInterest: initialAreaOfInterest }));
      setHighlightField('areaOfInterest');
      const timer = setTimeout(() => setHighlightField(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [initialAreaOfInterest]);

  useEffect(() => {
    if (initialRole) {
      setFormData((prev) => ({ ...prev, currentRole: initialRole }));
      setHighlightField('currentRole');
      const timer = setTimeout(() => setHighlightField(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [initialRole]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    } else if (!/^[a-zA-Z\s.'-]+$/.test(formData.fullName.trim())) {
      newErrors.fullName = 'Full name should only contain letters and standard characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g., alex@domain.com).';
    }

    if (!formData.currentRole) {
      newErrors.currentRole = 'Please select your current role.';
    }

    if (!formData.areaOfInterest) {
      newErrors.areaOfInterest = 'Please choose your primary area of interest.';
    }

    setErrors(newErrors);

    // Focus first invalid field
    if (newErrors.fullName) {
      fullNameRef.current?.focus();
    } else if (newErrors.email) {
      emailRef.current?.focus();
    } else if (newErrors.currentRole) {
      roleRef.current?.focus();
    } else if (newErrors.areaOfInterest) {
      areaRef.current?.focus();
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate validation and client-side processing
    setTimeout(() => {
      const generatedId = `NGA-${Math.floor(100000 + Math.random() * 900000)}`;
      setApplicationId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      currentRole: 'College Student',
      areaOfInterest: 'Generative AI and LLMs',
      learningPace: 'Part-Time (5-8 hrs/week)',
      notes: ''
    });
    setErrors({});
  };

  return (
    <section id="registration" className="py-24 bg-slate-900/50 relative border-t border-slate-800/60">
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 tracking-wider uppercase">
            <span>Admissions & Cohort Registration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Apply to NextGen AI Academy
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-balance max-w-2xl mx-auto">
            Reserve your spot for upcoming cohorts. Submit your background details and track preference to receive the curriculum syllabus and technical onboarding packet.
          </p>
        </div>

        {/* Main Card Container */}
        <div className="rounded-2xl bg-slate-950 border border-indigo-900/70 p-6 sm:p-10 shadow-2xl text-left">
          {isSubmitted ? (
            /* Success State */
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Application Received!</h3>
                <p className="text-sm text-slate-300 max-w-lg mx-auto">
                  Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. Your illustrative application reference number is:
                </p>
                <div className="inline-block px-4 py-2 rounded-xl bg-indigo-950/60 border border-indigo-800/60 font-mono text-indigo-300 font-bold text-base tracking-wider mt-2">
                  {applicationId}
                </div>
              </div>

              {/* Confirmation Details Card */}
              <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-left text-xs space-y-2 text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Registered Email:</span>
                  <span className="font-medium text-white">{formData.email}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Current Role:</span>
                  <span className="font-medium text-white">{formData.currentRole}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Selected Focus Track:</span>
                  <span className="font-medium text-indigo-300">{formData.areaOfInterest}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Pace:</span>
                  <span className="font-medium text-white">{formData.learningPace}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-indigo-900/40 max-w-lg mx-auto text-xs text-slate-400 space-y-1">
                <p className="font-semibold text-slate-200">Next Steps (Illustrative):</p>
                <p>An orientation package containing recommended software setup guides and preliminary reading materials will be sent to your email.</p>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Submit Another Application</span>
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Lead Capture Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="block text-xs font-semibold text-slate-200">
                    Full Name <span className="text-indigo-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      ref={fullNameRef}
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      aria-required="true"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      placeholder="e.g. Alex Chen"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.fullName ? 'border-rose-500 focus:border-rose-500 ring-1 ring-rose-500/50' : 'border-slate-800 focus:border-indigo-500'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p id="fullName-error" className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-200">
                    Email Address <span className="text-indigo-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      ref={emailRef}
                      id="email"
                      type="email"
                      value={formData.email}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. alex@example.com"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500 focus:border-rose-500 ring-1 ring-rose-500/50' : 'border-slate-800 focus:border-indigo-500'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p id="email-error" className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Current Role */}
                <div className="space-y-1.5">
                  <label htmlFor="currentRole" className="block text-xs font-semibold text-slate-200">
                    Current Role <span className="text-indigo-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <select
                      ref={roleRef}
                      id="currentRole"
                      value={formData.currentRole}
                      aria-required="true"
                      aria-invalid={!!errors.currentRole}
                      aria-describedby={errors.currentRole ? "role-error" : undefined}
                      onChange={(e) => {
                        setFormData({ ...formData, currentRole: e.target.value });
                        if (errors.currentRole) setErrors({ ...errors, currentRole: '' });
                      }}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900 border text-sm text-white focus:outline-none focus:border-indigo-500 transition-all ${
                        highlightField === 'currentRole' ? 'ring-2 ring-indigo-400 bg-indigo-950/40 border-indigo-500' : 'border-slate-800'
                      } ${errors.currentRole ? 'border-rose-500 ring-1 ring-rose-500/50' : ''}`}
                    >
                      <option value="College Student">College Student (Undergraduate / Graduate)</option>
                      <option value="Fresh Graduate">Fresh Graduate (Within 0-2 Years)</option>
                      <option value="Working Professional">Working Professional (Software / Tech)</option>
                      <option value="Business & Product">Business, Design & Product Lead</option>
                      <option value="Other">Other / Self-Taught Learner</option>
                    </select>
                  </div>
                  {errors.currentRole && (
                    <p id="role-error" className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.currentRole}</span>
                    </p>
                  )}
                </div>

                {/* Area of Interest */}
                <div className="space-y-1.5">
                  <label htmlFor="areaOfInterest" className="block text-xs font-semibold text-slate-200">
                    Primary Area of Interest <span className="text-indigo-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Compass className="w-4 h-4" />
                    </div>
                    <select
                      ref={areaRef}
                      id="areaOfInterest"
                      value={formData.areaOfInterest}
                      aria-required="true"
                      aria-invalid={!!errors.areaOfInterest}
                      aria-describedby={errors.areaOfInterest ? "area-error" : undefined}
                      onChange={(e) => {
                        setFormData({ ...formData, areaOfInterest: e.target.value });
                        if (errors.areaOfInterest) setErrors({ ...errors, areaOfInterest: '' });
                      }}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900 border text-sm text-white focus:outline-none focus:border-indigo-500 transition-all ${
                        highlightField === 'areaOfInterest' ? 'ring-2 ring-indigo-400 bg-indigo-950/40 border-indigo-500' : 'border-slate-800'
                      } ${errors.areaOfInterest ? 'border-rose-500 ring-1 ring-rose-500/50' : ''}`}
                    >
                      <option value="Introduction to Artificial Intelligence">Introduction to Artificial Intelligence</option>
                      <option value="Generative AI and LLMs">Generative AI and LLMs (Transformers & RAG)</option>
                      <option value="Prompt Engineering">Prompt Engineering (ReAct & Evaluation)</option>
                      <option value="AI Automation">AI Automation (Autonomous Tool Agents)</option>
                      <option value="Machine Learning Fundamentals">Machine Learning Fundamentals (Scikit-Learn)</option>
                      <option value="AI Tools for Productivity">AI Tools for Productivity & Operations</option>
                    </select>
                  </div>
                  {errors.areaOfInterest && (
                    <p id="area-error" className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.areaOfInterest}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Learning Pace Preference */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-200">
                  Preferred Learning Schedule
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className={`p-3.5 rounded-xl border flex items-center gap-3 cursor-pointer transition-colors ${
                    formData.learningPace.includes('Part-Time')
                      ? 'bg-indigo-950/60 border-indigo-500 text-white'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                  }`}>
                    <input
                      type="radio"
                      name="learningPace"
                      value="Part-Time (5-8 hrs/week)"
                      checked={formData.learningPace.includes('Part-Time')}
                      onChange={(e) => setFormData({ ...formData, learningPace: e.target.value })}
                      className="text-indigo-600 focus:ring-indigo-500"
                    />
                    <div>
                      <div className="text-xs font-semibold text-slate-200">Part-Time (Flexible)</div>
                      <div className="text-[11px] text-slate-400">5–8 hrs/week, evening & weekend friendly</div>
                    </div>
                  </label>

                  <label className={`p-3.5 rounded-xl border flex items-center gap-3 cursor-pointer transition-colors ${
                    formData.learningPace.includes('Accelerated')
                      ? 'bg-indigo-950/60 border-indigo-500 text-white'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                  }`}>
                    <input
                      type="radio"
                      name="learningPace"
                      value="Accelerated Intensive (12-15 hrs/week)"
                      checked={formData.learningPace.includes('Accelerated')}
                      onChange={(e) => setFormData({ ...formData, learningPace: e.target.value })}
                      className="text-indigo-600 focus:ring-indigo-500"
                    />
                    <div>
                      <div className="text-xs font-semibold text-slate-200">Accelerated Intensive</div>
                      <div className="text-[11px] text-slate-400">12–15 hrs/week, rapid project completion</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-1.5">
                <label htmlFor="notes" className="block text-xs font-semibold text-slate-200">
                  Optional Questions or Target Project Idea
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us what specific problem you'd like to solve using AI..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>Validating & Processing Application...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Disclaimer */}
              <div className="flex items-center gap-2 text-xs text-slate-500 justify-center text-center pt-2">
                <Shield className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>
                  Illustrative admissions portal. No personal contact data is sold or transmitted to third-party databases.
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
