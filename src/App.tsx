import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyLearnAI } from './components/WhyLearnAI';
import { FeaturedCourses } from './components/FeaturedCourses';
import { CourseModal } from './components/CourseModal';
import { LearningJourney } from './components/LearningJourney';
import { WhoCanJoin } from './components/WhoCanJoin';
import { ProjectsAndOutcomes } from './components/ProjectsAndOutcomes';
import { AboutAcademy } from './components/AboutAcademy';
import { Testimonials } from './components/Testimonials';
import { RegistrationForm } from './components/RegistrationForm';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { Course } from './types';
import { COURSES } from './data/coursesData';

export default function App() {
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<Course | null>(null);
  const [prefilledCourse, setPrefilledCourse] = useState<string>('Generative AI and LLMs');
  const [prefilledRole, setPrefilledRole] = useState<string>('College Student');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnrollFromModal = (courseId: string) => {
    const courseTitleMap: Record<string, string> = {
      'intro-to-ai': 'Introduction to Artificial Intelligence',
      'generative-ai-llms': 'Generative AI and LLMs',
      'prompt-engineering': 'Prompt Engineering',
      'ai-automation': 'AI Automation',
      'machine-learning-fundamentals': 'Machine Learning Fundamentals',
      'ai-tools-for-productivity': 'AI Tools for Productivity'
    };
    if (courseTitleMap[courseId]) {
      setPrefilledCourse(courseTitleMap[courseId]);
    }
    setSelectedCourseForModal(null);
    scrollTo('registration');
  };

  const handleSelectAudienceTrack = (trackName: string) => {
    if (trackName.includes('Student')) {
      setPrefilledRole('College Student');
      setPrefilledCourse('Introduction to Artificial Intelligence');
    } else if (trackName.includes('Graduate')) {
      setPrefilledRole('Fresh Graduate');
      setPrefilledCourse('Generative AI and LLMs');
    } else {
      setPrefilledRole('Working Professional');
      setPrefilledCourse('Prompt Engineering');
    }
    scrollTo('registration');
  };

  const handleSelectCourseFromFooter = (courseId: string) => {
    const course = COURSES.find((c) => c.id === courseId);
    if (course) {
      setSelectedCourseForModal(course);
    } else {
      scrollTo('courses');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreCourses={() => scrollTo('courses')}
          onJoinProgram={() => scrollTo('registration')}
        />

        {/* Why Learn AI */}
        <WhyLearnAI />

        {/* Featured Courses */}
        <FeaturedCourses onSelectCourse={(course) => setSelectedCourseForModal(course)} />

        {/* Learning Journey */}
        <LearningJourney />

        {/* Who Can Join */}
        <WhoCanJoin onSelectTrack={handleSelectAudienceTrack} />

        {/* Projects and Outcomes */}
        <ProjectsAndOutcomes />

        {/* About Academy & Learning Studio */}
        <AboutAcademy />

        {/* Testimonials */}
        <Testimonials />

        {/* Registration Lead Capture */}
        <RegistrationForm
          initialAreaOfInterest={prefilledCourse}
          initialRole={prefilledRole}
        />

        {/* FAQ Section */}
        <FAQSection onAskQuestion={() => scrollTo('registration')} />
      </main>

      {/* Footer */}
      <Footer onSelectCourseTrack={handleSelectCourseFromFooter} />

      {/* Interactive Course Details Modal */}
      <CourseModal
        course={selectedCourseForModal}
        onClose={() => setSelectedCourseForModal(null)}
        onEnroll={handleEnrollFromModal}
      />
    </div>
  );
}
